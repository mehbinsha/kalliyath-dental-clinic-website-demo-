"use client";

import { useState } from "react";
import { CalendarDays, Menu, Phone, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Patient Stories", href: "#stories" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function ClinicMark() {
  return (
    <svg aria-hidden="true" className="h-11 w-10 shrink-0" viewBox="0 0 48 54" fill="none">
      <path
        d="M24 2 44 9v14c0 13-8.6 23.8-20 29C12.6 46.8 4 36 4 23V9L24 2Z"
        fill="currentColor"
      />
      <path
        d="M16.4 17.5c2.4-2.2 5.2-1 7.6.1 2.4-1.1 5.2-2.3 7.6-.1 3.2 2.9 1.6 7.4-.2 11.3-1.7 3.8-2.2 8.3-4.5 8.3-1.8 0-1.4-6-2.9-6s-1.1 6-2.9 6c-2.3 0-2.8-4.5-4.5-8.3-1.8-3.9-3.4-8.4-.2-11.3Z"
        fill="white"
      />
    </svg>
  );
}

function Brand() {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-2.5" aria-label="Kalliyath Dental Clinic home">
      <ClinicMark />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-extrabold tracking-[0.045em] text-green-dark sm:text-base">
          KALLIYATH
        </span>
        <span className="mt-1 text-[10px] font-semibold tracking-[0.11em] text-green-dark sm:text-[11px]">
          DENTAL CLINIC
        </span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 rounded-b-[22px] bg-white shadow-[0_5px_22px_rgba(15,79,65,0.06)]">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-[88px] lg:px-12 xl:px-[6.2%]">
        <Brand />

        <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={index === 0 ? "page" : undefined}
              className={`whitespace-nowrap text-[13px] font-medium transition-colors hover:text-green ${
                index === 0
                  ? "border-b-2 border-green pb-1 text-green-dark"
                  : "text-foreground/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 xl:flex">
          <a
            href="tel:+917760197138"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-green-dark px-4 text-[12px] font-semibold text-white transition-colors hover:bg-green"
          >
            <Phone aria-hidden="true" size={14} />
            <span>7760 197 138</span>
          </a>
          <a
            href="#appointment"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-mint-strong px-4 text-[12px] font-semibold text-green-dark transition-colors hover:bg-mint"
          >
            <CalendarDays aria-hidden="true" size={14} />
            <span>Book Appointment</span>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-green-dark transition-colors hover:bg-mint xl:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full border-t border-border bg-white px-5 pb-5 pt-3 shadow-lg xl:hidden"
        >
          <div className="mx-auto flex max-w-2xl flex-col">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border/70 py-3 text-sm font-medium text-foreground transition-colors hover:text-green"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-green-dark px-5 text-sm font-semibold text-white"
            >
              <CalendarDays aria-hidden="true" size={16} />
              Book Appointment
            </a>
            <a
              href="tel:+917760197138"
              className="mt-3 inline-flex items-center justify-center gap-2 py-2 text-sm font-semibold text-green-dark"
            >
              <Phone aria-hidden="true" size={15} />
              Call 7760 197 138
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
