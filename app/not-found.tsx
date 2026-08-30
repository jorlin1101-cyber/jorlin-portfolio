import Link from "next/link";

export default function NotFound() {
  return (
    <main className="site-shell empty-state">
      <p className="eyebrow">404 / LOST IN THE STACK</p>
      <h1>这页暂时没有被部署。</h1>
      <p>回到首页，看看已经跑起来的项目。</p>
      <Link className="button button-dark" href="/">回到首页</Link>
    </main>
  );
}
