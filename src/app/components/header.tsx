import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar mx-auto">
      <Link href="/" className="logo">
        <img src="/logo.png" alt="Classical Music Collection 2024" />
      </Link>
      <div>
        <Link href="/recordings" className="nav-item">
          Recordings
        </Link>
        <Link href="/performances" className="nav-item">
          Performances
        </Link>
      </div>
    </nav>
  );
}
