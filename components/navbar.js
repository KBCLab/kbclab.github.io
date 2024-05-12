import Link from "next/link";

export default function Navigation({  }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
            <Link href={`/`} className="navbar-brand">KBWord</Link>
            <p className="text-secondary me-auto mb-2 mb-lg-0 ms-lg-4"><small>KBC情報保管所</small></p>
        </div>
    </nav>
  );
}