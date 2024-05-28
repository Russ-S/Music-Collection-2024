import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/recordings">Recordings</Link>
      <Link href="/performances">Performances</Link>
    </nav>
  );
}
