"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const servicesDropdown = [
  { href: "/fitout", label: "Fitout" },
  { href: "/approvals", label: "Approvals" },
  { href: "/structurals", label: "Structurals" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <Image
              src="/logo/logo.png"
              alt="Fermium Designs"
              width={160}
              height={36}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.label !== "Services") {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative text-sm font-accent font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                );
              }

              return (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="relative text-sm font-accent font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    Services
                    <svg className="w-3 h-3 text-text-secondary group-hover:text-text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  <div className="absolute left-0 top-full pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="w-56 bg-white border border-border rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] overflow-hidden">
                      {servicesDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center justify-between px-4 py-3 text-sm font-accent text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
                        >
                          <span>{item.label}</span>
                          <span className="text-accent">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-accent font-semibold text-white bg-accent rounded-full shadow-[0_10px_24px_rgba(198,164,92,0.35)] hover:bg-accent-secondary transition-colors duration-300"
              >
                Start a Project
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className={`block w-6 h-[2px] ${isMobileMenuOpen ? "bg-white" : "bg-text-primary"}`}
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`block w-6 h-[2px] ${isMobileMenuOpen ? "bg-white" : "bg-text-primary"}`}
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className={`block w-6 h-[2px] ${isMobileMenuOpen ? "bg-white" : "bg-text-primary"}`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay — stays dark for dramatic contrast */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-bg-dark flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl md:text-5xl font-display font-bold text-white hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>

                  {link.label === "Services" && (
                    <div className="mt-4 flex flex-col items-center gap-3">
                      {servicesDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-lg font-accent text-white/70 hover:text-accent transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 flex flex-col items-center gap-4"
            >
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-8 py-4 text-sm font-accent font-semibold text-bg-dark bg-accent"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
