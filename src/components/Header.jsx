"use client";

import { useEffect, useState } from "react";

const HAMBURGER_LINES = 3;

const nav = [
  { label: "About", href: "#about" },
  {
    label: "Services",
    children: [
      { label: "Anxiety & Panic Therapy", href: "#services" },
      { label: "Trauma Therapy & EMDR", href: "#services" },
      { label: "Burnout & Perfectionism", href: "#services" },
    ],
  },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faqs" },
];

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden="true"
      className={`inline-block transition-transform duration-300 ${
        open ? "rotate-90" : ""
      }`}
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

function Logo() {
  return (
    <a
      href="#"
      className="block shrink-0"
      aria-label="Dr. Maya Reynolds, PsyD, home"
    >
      <span className="block font-heading text-[10.5vw] font-light leading-none lg:text-[3.4vw]">
        Maya Reynolds
      </span>
      <span className="mt-[1.8vw] block pl-[1vw] text-[2.7vw] font-normal uppercase tracking-[0.42em] text-brand lg:mt-[0.6vw] lg:pl-[0.3vw] lg:text-[0.9vw]">
        Clinical Psychology
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <>
      <header className="relative z-50 bg-paper px-[10vw] pb-6 pt-8 lg:pb-[4.7vw] lg:pl-[6.2vw] lg:pr-[5vw] lg:pt-[2.3vw]">
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-[2.6vw] lg:flex" aria-label="Main">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className="label-caps nav-text py-3 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </button>

                  <div className="invisible absolute right-0 top-full z-50 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    <ul className="min-w-max bg-paper py-2 text-right">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="label-caps nav-sub-text block py-[0.9vw] transition-colors hover:text-brand"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="label-caps nav-text py-3 transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              )
            )}

            <a href="#book" className="contact-oval label-caps nav-text">
              Contact
            </a>
          </nav>

          <button
            type="button"
            onClick={() => (open ? closeMenu() : setOpen(true))}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative flex h-12 w-12 shrink-0 items-center justify-center lg:hidden"
          >
            {open ? (
              <>
                <span className="absolute block h-px w-[30px] rotate-45 bg-ink" />
                <span className="absolute block h-px w-[30px] -rotate-45 bg-ink" />
              </>
            ) : (
              <span className="flex flex-col gap-[7px]">
                {Array.from({ length: HAMBURGER_LINES }).map((_, i) => (
                  <span key={i} className="block h-px w-[38px] bg-ink" />
                ))}
              </span>
            )}
          </button>
        </div>
      </header>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-paper px-[10vw] pb-10 pt-[130px] lg:hidden"
        >
          <ul className="space-y-8">
            {nav.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded(expanded === item.label ? null : item.label)
                    }
                    aria-expanded={expanded === item.label}
                    className="label-caps inline-flex items-center gap-3 text-left text-[28px] leading-tight"
                  >
                    {item.label}
                    <Chevron open={expanded === item.label} />
                  </button>

                  {expanded === item.label && (
                    <ul className="mt-5 space-y-4 pl-1">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            onClick={closeMenu}
                            className="label-caps text-[16px] text-ink/70"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="label-caps text-[28px] leading-tight"
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="pt-10">
            <a
              href="#book"
              onClick={closeMenu}
              className="contact-oval mobile-contact label-caps"
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </>
  );
}