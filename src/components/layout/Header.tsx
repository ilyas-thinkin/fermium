"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    dropdown: [
      { href: "/services/fitout", label: "Interior FitOut Work" },
      { href: "/services/approvals", label: "Authority Approvals" },
      { href: "/services/structural", label: "Structural Solutions" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDesktopDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar — only visible when not scrolled */}
      <div
        className={`bg-white border-b border-black/5 text-primary transition-all duration-300 overflow-hidden ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-14 opacity-100"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between h-12 text-xs md:text-sm">
          {/* Left — Address & Phone */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div className="leading-tight">
                <p className="font-semibold text-primary hidden sm:block">
                  Al Babtain Building, Office 302, Port Saeed, Deira, Dubai
                </p>
                <p className="font-semibold text-primary sm:hidden">Deira, Dubai</p>
                <p className="text-text-light text-[11px]">Visit our office</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div className="leading-tight">
                <p className="font-semibold text-primary">052 254 3903</p>
                <p className="text-text-light text-[11px]">Information Center</p>
              </div>
            </div>
          </div>

          {/* Right — Socials */}
          <div className="flex items-center gap-4 text-text-light">
            <div className="hidden sm:flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar — switches from navy (hero) to white (scrolled) */}
      <div
        className={`transition-all duration-500 ${
          isScrolled
            ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            : "bg-primary shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between h-18">
          {/* Logo — white when on hero, original colors when scrolled */}
          <Link href="/" className="relative z-50 shrink-0">
            <Image
              src="/logo/logo.png"
              alt="Fermium Designs"
              width={180}
              height={40}
              priority
              className={`h-10 w-auto transition-all duration-500 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === pathname ||
                (link.dropdown &&
                  link.dropdown.some((d) => pathname.startsWith(d.href)));

              if (link.dropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={link.href}
                      className={`relative flex items-center gap-1.5 px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                        isScrolled
                          ? isActive
                            ? "text-accent"
                            : "text-primary hover:text-accent"
                          : isActive
                            ? "text-white bg-white/15 rounded-md"
                            : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${desktopDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Dropdown */}
                    <div
                      className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                        desktopDropdownOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="w-60 bg-white rounded-lg shadow-[0_16px_40px_rgba(0,0,0,0.15)] overflow-hidden border border-black/5">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center justify-between px-5 py-3.5 text-sm font-medium text-primary hover:bg-accent/5 hover:text-accent transition-colors border-b border-black/5 last:border-b-0"
                          >
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                    isScrolled
                      ? isActive
                        ? "text-accent"
                        : "text-primary hover:text-accent"
                      : isActive
                        ? "text-white bg-white/15 rounded-md"
                        : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA — Phone */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+971522543903"
              className={`flex items-center gap-3 rounded-full pl-4 pr-6 py-2.5 transition-all duration-500 ${
                isScrolled
                  ? "bg-primary/5 hover:bg-primary/10"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              <span className="flex items-center justify-center w-8 h-8 bg-accent rounded-full">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div className={`transition-colors duration-500 ${isScrolled ? "text-primary" : "text-white"}`}>
                <p className={`text-[10px] uppercase tracking-wider ${isScrolled ? "text-primary/50" : "text-white/60"}`}>
                  Call us now
                </p>
                <p className="text-sm font-semibold">052 254 3903</p>
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-[8px] bg-white"
                  : isScrolled ? "bg-primary" : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${
                isMobileMenuOpen
                  ? "opacity-0"
                  : isScrolled ? "bg-primary" : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-[8px] bg-white"
                  : isScrolled ? "bg-primary" : "bg-white"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-primary-dark transition-all duration-500 lg:hidden flex flex-col items-center justify-center ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.href} className="flex flex-col items-center">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`text-3xl font-bold transition-colors flex items-center gap-2 ${
                      pathname.startsWith("/services")
                        ? "text-accent"
                        : "text-white hover:text-accent"
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileServicesOpen ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-lg text-white/70 hover:text-accent transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl font-bold transition-colors ${
                  pathname === link.href ? "text-accent" : "text-white hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="tel:+971522543903"
            className="flex items-center gap-3 px-6 py-3 bg-accent rounded-full text-white font-semibold"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            052 254 3903
          </a>
        </div>
      </div>
    </header>
  );
}
