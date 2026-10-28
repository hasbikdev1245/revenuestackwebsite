"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 8);
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="header-inner">
        <a className="logo" href="#top" aria-label={site.name}>
          <LogoMark />
          <span>{site.name}</span>
        </a>
        <nav className="nav-desktop" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-tools">
          <a className="btn header-cta" href="#apply">
            <span className="cta-long">Apply to work with us</span>
            <span className="cta-short">Apply</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <span />
            <span />
          </button>
        </div>
      </div>
      <span className="progress" style={{ transform: `scaleX(${progress})` }} />
      {open ? (
        <div className="nav-mobile" id="mobile-nav">
          <div className="nav-mobile-bar">
            <a className="logo" href="#top" onClick={() => setOpen(false)}>
              <LogoMark />
              <span>{site.name}</span>
            </a>
            <button className="text-button" type="button" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <nav aria-label="Mobile">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#proof" onClick={() => setOpen(false)}>
              Record
            </a>
            <a href="#faq" onClick={() => setOpen(false)}>
              FAQ
            </a>
          </nav>
          <a className="btn" href="#apply" onClick={() => setOpen(false)}>
            Apply to work with us
          </a>
        </div>
      ) : null}
    </header>
  );
}

function LogoMark() {
  return <img className="logo-mark" src="/logo.png" alt="" />;
}
