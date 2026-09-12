import test from 'node:test';
import assert from 'node:assert/strict';
import { createContactHandler } from '../lib/contact.ts';

const valid = {name:'访客',email:'visitor@example.com',topic:'job',message:'你好，希望了解项目合作。',website:''};
const request = (data = valid, headers = {}) => new Request('https://jorlinshi.cn/api/contact', {
  method:'POST', headers:{'content-type':'application/json',origin:'https://jorlinshi.cn',...headers},body:JSON.stringify(data),
});
function fixture(overrides = {}) {
  const calls = [];
  const handler = createContactHandler({apiKey:'test-secret',from:'Portfolio <contact@mail.jorlinshi.cn>',to:'jorlin1101@163.com',
    allowedOrigins:['https://jorlinshi.cn'],now:()=>Date.UTC(2026,8,12),
    fetchImpl:async (url, options) => {calls.push({url,...options}); return Response.json({id:'test-receipt'});},...overrides});
  return {handler,calls};
}
test('sends only to the owner, replies to the visitor, treats message as plain text', async () => {
  const {handler,calls}=fixture();
  const response=await handler(request({...valid,to:'other@example.com',from:'fake@example.com',message:'<script>alert(1)</script>'}));
  assert.equal(response.status,202);
  const sent=JSON.parse(calls[0].body);
  assert.deepEqual(sent.to,['jorlin1101@163.com']);
  assert.equal(sent.reply_to,valid.email);
  assert.equal(sent.from,'Portfolio <contact@mail.jorlinshi.cn>');
  assert.equal(sent.html,undefined);
  assert.ok(sent.text.includes('<script>'));
  assert.ok(!(await response.text()).includes('test-secret'));
});
test('cross-site requests and honeypot submissions never send email', async () => {
  const {handler,calls}=fixture();
  assert.equal((await handler(request(valid,{origin:'https://other.example'}))).status,403);
  assert.equal((await handler(request({...valid,website:'spam'}))).status,400);
  assert.equal(calls.length,0);
});
test('rejects bad addresses, header injection, unknown topics and empty messages', async () => {
  for (const data of [{...valid,email:'not-an-email'},{...valid,name:'Person\r\nBcc: bad@example.com'},
    {...valid,topic:'toString'},{...valid,message:'   '},{...valid,message:'x'.repeat(5001)},null,[]]) {
    const {handler,calls}=fixture();
    assert.equal((await handler(request(data))).status,400);
    assert.equal(calls.length,0);
  }
});
test('caps incoming bytes even without a Content-Length', async () => {
  const {handler,calls}=fixture();
  assert.equal((await handler(request({...valid,message:'中'.repeat(9000)}))).status,413);
  assert.equal(calls.length,0);
});
test('missing credentials fail visibly without attempting provider delivery', async () => {
  const {handler,calls}=fixture({apiKey:undefined});
  assert.equal((await handler(request())).status,503);
  assert.equal(calls.length,0);
});
test('provider rejection, invalid receipt and timeout do not become a success', async () => {
  for (const fetchImpl of [async()=>Response.json({error:'private provider detail'},{status:403}),
    async()=>Response.json({}),async()=>{throw new Error('timeout');}]) {
    const {handler}=fixture({fetchImpl});
    const response=await handler(request());
    assert.equal(response.status,502);
    assert.deepEqual(await response.json(),{ok:false,code:'send_failed'});
  }
});
test('retries across instances reuse the same provider idempotency key', async () => {
  const first=fixture(),second=fixture();
  await first.handler(request()); await second.handler(request());
  assert.equal(first.calls[0].headers['Idempotency-Key'],second.calls[0].headers['Idempotency-Key']);
  await second.handler(request({...valid,message:'Another message'}));
  assert.notEqual(first.calls[0].headers['Idempotency-Key'],second.calls[1].headers['Idempotency-Key']);
});
test('limits repeated requests, ignores spoofed x-forwarded-for and expires limits', async () => {
  let time=Date.UTC(2026,8,12);
  const {handler,calls}=fixture({now:()=>time,vercel:true});
  for(let i=0;i<5;i++) assert.equal((await handler(request(valid,{'x-forwarded-for':String(i),'x-vercel-forwarded-for':'1.2.3.4'}))).status,202);
  const limited=await handler(request(valid,{'x-vercel-forwarded-for':'1.2.3.4'}));
  assert.equal(limited.status,429); assert.equal(limited.headers.get('retry-after'),'600');
  assert.equal(calls.length,5);
  time+=600001;
  assert.equal((await handler(request(valid,{'x-vercel-forwarded-for':'1.2.3.4'}))).status,202);
});
