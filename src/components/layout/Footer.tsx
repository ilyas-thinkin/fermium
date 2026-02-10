"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const footerLinks = {
  services: [
    { href: "/fitout", label: "Interior Fitout" },
    { href: "/services", label: "Design & Build" },
    { href: "/approvals", label: "Approvals" },
    { href: "/structurals", label: "Structurals" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="relative bg-bg-secondary text-text-primary">
      {/* Large CTA Section */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-6">
            Ready to Transform Your Space?
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary leading-tight mb-10">
            Let&apos;s Create Something
            <br />
            <span className="text-gradient">Exceptional</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 text-base font-accent font-semibold text-white bg-accent hover:bg-accent-secondary transition-colors duration-300 rounded-full shadow-[0_12px_24px_rgba(31,182,181,0.3)]"
          >
            Start Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Accent divider */}
      <div className="accent-line mx-6 md:mx-10" />

      {/* Footer Grid */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo/logo.png"
              alt="Fermium Designs"
              width={160}
              height={36}
              className="h-9 w-auto"
            />
            <p className="mt-4 text-sm text-text-secondary leading-relaxed max-w-xs">
              Where Vision Meets Precision. Every Detail is a Promise.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-accent font-semibold text-primary tracking-wider uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-accent transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-accent font-semibold text-primary tracking-wider uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-accent transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-accent font-semibold text-primary tracking-wider uppercase mb-6">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-text-secondary">
              <p>Dubai, United Arab Emirates</p>
              <a href="mailto:info@fermiumdesigns.com" className="block hover:text-accent transition-colors">
                info@fermiumdesigns.com
              </a>
              <a href="tel:+971000000000" className="block hover:text-accent transition-colors">
                +971 00 000 0000
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar — Dark Navy */}
      <div className="bg-bg-dark">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Fermium Designs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/50 hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="text-xs text-white/50 hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="text-xs text-white/50 hover:text-accent transition-colors">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
