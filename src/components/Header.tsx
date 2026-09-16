"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/site-config";
import { PhoneIcon, MenuIcon, CloseIcon } from "./icons";

const navLinks = [
  { label: "Our Approach", href: "#approach" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Areas", href: "#areas" },
];

const navLinkClass =
  "focus-ring relative py-1 text-[15px] font-medium text-charcoal transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-coral after:transition-transform after:duration-300 after:ease-out hover:text-coral hover:after:scale-x-100";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-mist/95 backdrop-blur transition-shadow duration-300 supports-[backdrop-filter]:bg-mist/90 ${
        scrolled
          ? "border-haze-dark/60 shadow-[0_1px_16px_rgba(30,51,54,0.06)]"
          : "border-transparent"
      }`}
    >
      <div className="section-container flex h-[72px] items-center justify-between gap-2 sm:gap-4">
        <a
          href="#top"
          className="focus-ring min-w-0 shrink font-serif text-lg font-medium tracking-tight text-slate sm:text-xl"
        >
          <span className="sm:hidden">Christian&rsquo;s Cleaning Co.</span>
          <span className="hidden sm:inline">Christian&rsquo;s Cleaning Company</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={business.phoneHref}
            className="focus-ring flex items-center gap-2 text-[15px] font-medium text-charcoal transition-colors hover:text-coral"
          >
            <PhoneIcon className="h-4 w-4 text-slate" />
            {business.phone}
          </a>
          <a
            href="#quote"
            className="focus-ring inline-flex items-center justify-center rounded bg-coral px-5 py-2.5 text-[15px] font-medium text-mist transition-all duration-200 hover:-translate-y-0.5 hover:bg-coral-dark hover:shadow-[0_6px_16px_rgba(166,69,38,0.28)] active:translate-y-0"
          >
            Get a Free Quote
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <a
            href="#quote"
            className="focus-ring inline-flex items-center justify-center whitespace-nowrap rounded bg-coral px-3 py-2.5 text-sm font-medium text-mist transition-colors hover:bg-coral-dark active:translate-y-0 sm:px-4"
          >
            Free Quote
          </a>
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded text-slate"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-nav" className="border-t border-haze-dark/60 bg-mist lg:hidden">
          <nav className="section-container flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="focus-ring rounded px-2 py-3 text-base font-medium text-charcoal hover:bg-haze-light hover:text-coral"
              >
                {link.label}
              </a>
            ))}
            <a
              href={business.phoneHref}
              className="focus-ring mt-2 flex items-center gap-2 rounded px-2 py-3 text-base font-medium text-slate"
            >
              <PhoneIcon className="h-4 w-4" />
              {business.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
