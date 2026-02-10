"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";

const services = [
  {
    number: "01",
    title: "Interior Fitout",
    description: "Complete interior transformation and construction for commercial, residential, and hospitality spaces.",
    href: "/fitout",
    image: "/Images/Website/Interior Fitout/Interior Fitout 1.jpg",
  },
  {
    number: "02",
    title: "Approvals & Compliance",
    description: "Expert navigation of Dubai Municipality, Civil Defense, and regulatory approvals for seamless project execution.",
    href: "/approvals",
    image: "/Images/Website/Office Fitout/Office Fitout 1.jpg",
  },
  {
    number: "03",
    title: "Structural Works",
    description: "Engineering excellence in structural modifications, false ceilings, partitioning, and MEP integration.",
    href: "/structurals",
    image: "/Images/Website/Warehouse interior fit out/Warehouse interior fit out 1.jpg",
  },
];

export default function ServicesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(services.length - 1) * 60}%`]);
  const trackHeight = 100 + (services.length - 1) * 60;

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 mb-8">
        <FadeUp><p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-4">What We Do</p></FadeUp>
        <FadeUp delay={0.1}><h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary">Our Services</h2></FadeUp>
      </div>

      {/* Mobile stacked cards */}
      <div className="md:hidden space-y-6">
        {services.map((service, i) => (
          <Link
            key={service.number}
            href={service.href}
            className="group block bg-white border border-border rounded-3xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="relative h-44 overflow-hidden">
              <Image src={service.image} alt={service.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
            </div>
            <div className="p-6">
              <p className="text-xs font-accent text-accent tracking-widest uppercase mb-2">{service.number}</p>
              <h3 className="text-2xl font-display font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-text-secondary mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-accent font-semibold text-accent">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop horizontal scroll */}
      <div ref={containerRef} className="relative hidden md:block" style={{ height: `${trackHeight}vh` }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 pl-6 md:pl-10">
            {services.map((service, i) => (
              <Link key={service.number} href={service.href} data-cursor="View" className="group relative flex-shrink-0 w-[80vw] md:w-[60vw] h-[70vh] bg-white/90 border border-border rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_32px_80px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-white via-white/80 to-transparent">
                  <span className="text-7xl md:text-9xl font-accent font-bold text-black/[0.03] absolute top-8 right-8">{service.number}</span>
                  <p className="text-sm font-accent text-accent tracking-widest uppercase mb-3">{service.number}</p>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-text-secondary max-w-md mb-6">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-accent font-semibold text-accent group-hover:gap-4 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
