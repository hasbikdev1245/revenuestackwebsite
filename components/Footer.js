import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <img className="footer-logo" src="/logo.png" alt="" />
        <p className="footer-mark">{site.name}</p>
        <p className="footer-line">
          Backend Growth Partner — for 7 & 8 figure info and agency businesses that already cracked the front end.
        </p>
        <div className="footer-row">
          <nav aria-label="Footer">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="#proof">Record</a>
            <a href="#fit">Fit</a>
            <a href="#faq">FAQ</a>
            <a href="#apply">Apply</a>
          </nav>
          <p>© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
