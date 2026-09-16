"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/site-config";
import { PhoneIcon, MenuIcon, CloseIcon } from "./icons";

const navLinks = [
  { label: "Our Approach", href: "#approach" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Areas", href: "#areas" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 border-b border-sage-dark/60 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/90">
      <div className="section-container flex h-[72px] items-center justify-between gap-2 sm:gap-4">
        <a
          href="#top"
          className="focus-ring min-w-0 shrink font-serif text-lg font-medium tracking-tight text-forest sm:text-xl"
        >
          <span className="sm:hidden">Christian&rsquo;s Cleaning Co.</span>
          <span className="hidden sm:inline">Christian&rsquo;s Cleaning Company</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring text-[15px] font-medium text-charcoal transition-colors hover:text-forest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={business.phoneHref}
            className="focus-ring flex items-center gap-2 text-[15px] font-medium text-charcoal transition-colors hover:text-forest"
          >
            <PhoneIcon className="h-4 w-4 text-forest" />
            {business.phone}
          </a>
          <a
            href="#quote"
            className="focus-ring inline-flex items-center justify-center rounded bg-forest px-5 py-2.5 text-[15px] font-medium text-ivory transition-colors hover:bg-forest-light"
          >
            Get a Free Quote
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
          <a
            href="#quote"
            className="focus-ring inline-flex items-center justify-center whitespace-nowrap rounded bg-forest px-3 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-forest-light sm:px-4"
          >
            Free Quote
          </a>
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded text-forest"
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
        <div id="mobile-nav" className="border-t border-sage-dark/60 bg-ivory lg:hidden">
          <nav className="section-container flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="focus-ring rounded px-2 py-3 text-base font-medium text-charcoal hover:bg-sage-light hover:text-forest"
              >
                {link.label}
              </a>
            ))}
            <a
              href={business.phoneHref}
              className="focus-ring mt-2 flex items-center gap-2 rounded px-2 py-3 text-base font-medium text-forest"
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
