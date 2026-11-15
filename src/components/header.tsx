import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Projects" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="brand" href="/" aria-label="Mostafa Tavassoli, home">
          <span className="brand-mark">MT</span>
          <span>Mostafa Tavassoli</span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
          <a className="nav-external" href="https://github.com/mosTavassoli" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
