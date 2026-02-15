"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ───────────────────────── INTERIOR FITOUT ───────────────────────── */

const fitoutProjects = [
  { src: "/Images/Website/Office Fitout/Office Fitout 1.jpg", label: "Office Fitout" },
  { src: "/Images/Website/Cafe Interior/Cafe Interior 1.jpg", label: "Cafe Interior" },
  { src: "/Images/Website/Retail Interior/Retail Interior 1.jpg", label: "Retail Interior" },
  { src: "/Images/Website/Villa Fitout/Villa Fitout 1.jpg", label: "Villa Fitout" },
  { src: "/Images/Website/Clinic Fitout/Clinic Fitout 1.jpg", label: "Clinic Fitout" },
  { src: "/Images/Website/Restuarant Interior/Restuarant Interior 1.jpg", label: "Restaurant Interior" },
];

function FitoutSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-12 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Left content — 2 cols */}
          <div className="lg:col-span-2">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest rounded-sm">
              01 — Fitout
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
              Interior<br />FitOut Work
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              We transform empty shells into stunning, functional spaces.
              From concept design through furniture installation, our in-house
              team handles every detail — on time and on budget.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Commercial", "Residential", "Hospitality", "Healthcare"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-primary font-medium">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <Link
                href="/services/fitout"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-semibold rounded-sm hover:bg-accent transition-colors duration-300"
              >
                Explore Fitout
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              {/* Scroll arrows */}
              <div className="hidden md:flex items-center gap-2">
                <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all" aria-label="Scroll left">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all" aria-label="Scroll right">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right — scrollable gallery — 3 cols */}
          <div className="lg:col-span-3 -mr-6 md:-mr-10">
            <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {fitoutProjects.map((project) => (
                <div key={project.label} className="group relative shrink-0 w-[280px] sm:w-[320px] snap-start rounded-xl overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.label}
                    width={320}
                    height={400}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-semibold text-lg">{project.label}</p>
                    <div className="w-8 h-0.5 bg-accent mt-2 group-hover:w-16 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── AUTHORITY APPROVALS ───────────────────────── */

const approvalLogos = [
  { src: "/Images/Approvals Logo PNG 1-1/DM.png", name: "Dubai Municipality" },
  { src: "/Images/Approvals Logo PNG 1-1/DCD.png", name: "Dubai Civil Defense" },
  { src: "/Images/Approvals Logo PNG 1-1/DEWA.png", name: "DEWA" },
  { src: "/Images/Approvals Logo PNG 1-1/DHA 1.png", name: "DHA" },
  { src: "/Images/Approvals Logo PNG 1-1/Trakhees.png", name: "Trakhees" },
  { src: "/Images/Approvals Logo PNG 1-1/Jafza.png", name: "JAFZA" },
  { src: "/Images/Approvals Logo PNG 1-1/Emaar.png", name: "Emaar" },
  { src: "/Images/Approvals Logo PNG 1-1/Nakheel.png", name: "Nakheel" },
  { src: "/Images/Approvals Logo PNG 1-1/DAMAC.png", name: "DAMAC" },
  { src: "/Images/Approvals Logo PNG 1-1/DIEZ.png", name: "DIEZ" },
  { src: "/Images/Approvals Logo PNG 1-1/DSO.png", name: "DSO" },
  { src: "/Images/Approvals Logo PNG 1-1/Dubai South.png", name: "Dubai South" },
  { src: "/Images/Approvals Logo PNG 1-1/DDA.png", name: "DDA" },
  { src: "/Images/Approvals Logo PNG 1-1/DHCA.png", name: "DHCA" },
  { src: "/Images/Approvals Logo PNG 1-1/Concordia.png", name: "Concordia" },
];

function ApprovalsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Top — split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — content */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest rounded-sm">
                02 — Approvals
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
                Authority<br />Approvals
              </h2>
              <p className="mt-5 text-text-secondary leading-relaxed">
                We navigate Dubai&apos;s complex regulatory landscape so you don&apos;t
                have to. From municipality permits to free zone NOCs — our
                dedicated approvals team handles every submission, follow-up,
                and amendment until your project is cleared.
              </p>

              {/* Inline stats */}
              <div className="mt-8 flex gap-10">
                <div>
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="text-xs text-text-secondary mt-1">First-pass Approval Rate</p>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-xs text-text-secondary mt-1">Authorities Covered</p>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-xs text-text-secondary mt-1">Permits Secured</p>
                </div>
              </div>

              <Link
                href="/services/approvals"
                className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-semibold rounded-sm hover:bg-accent transition-colors duration-300"
              >
                Explore Approvals
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right — process timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

              <div className="space-y-0">
                {[
                  { step: "01", title: "Project Assessment", desc: "We review scope and identify every permit your project needs." },
                  { step: "02", title: "Drawing Preparation", desc: "Our team produces authority-compliant drawings and documentation." },
                  { step: "03", title: "Direct Submission", desc: "We submit to all relevant bodies and manage the entire dialogue." },
                  { step: "04", title: "Permit Secured", desc: "Approvals in hand — your project is cleared to begin." },
                ].map((item, i) => (
                  <div key={item.step} className="relative flex gap-5 sm:gap-8 group py-6">
                    {/* Dot on timeline */}
                    <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-white border-2 border-border flex items-center justify-center text-sm font-bold text-primary group-hover:border-accent group-hover:text-accent transition-colors duration-300">
                      {item.step}
                    </div>
                    <div className={`flex-1 pb-6 ${i < 3 ? "border-b border-border/50" : ""}`}>
                      <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── STRUCTURAL SOLUTIONS ───────────────────────── */

const structuralFeatures = [
  {
    title: "Structural Design",
    desc: "Full structural engineering for steel, concrete, and composite buildings.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 22l10-18 10 18M6 14h12" />
      </svg>
    ),
  },
  {
    title: "Load Calculations",
    desc: "Precise structural analysis and load-bearing calculations for safety compliance.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 4h6m-6 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: "Site Supervision",
    desc: "On-ground engineering oversight during construction to ensure structural integrity.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Retrofit & Reinforcement",
    desc: "Strengthening existing structures for renovations, extensions, and load changes.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

function StructuralSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-bg-secondary overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Left — Image stack */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
              <Image
                src="/Images/Website/Warehouse interior fit out/Warehouse interior fit out 1.jpg"
                alt="Structural Solutions"
                width={640}
                height={480}
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating secondary image */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
              <Image
                src="/Images/Website/Mep Companies/Mep Companies 1.jpg"
                alt="MEP Engineering"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stat */}
            <div className="absolute top-6 -left-4 lg:-left-8 bg-white rounded-xl p-5 shadow-[0_16px_40px_rgba(0,0,0,0.1)]">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                <div>
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-xs text-text-secondary">Code Compliant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest rounded-sm">
              03 — Structural
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
              Structural<br />Solutions
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              Our structural engineering team delivers safe, efficient, and
              code-compliant designs for every project scale — from villa
              modifications to commercial high-rises.
            </p>

            {/* Feature grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {structuralFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex gap-4 p-4 rounded-xl bg-white border border-border hover:border-accent/20 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-400"
                >
                  <span className="shrink-0 w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-400">
                    {feature.icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-primary">{feature.title}</h3>
                    <p className="mt-1 text-xs text-text-secondary leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/services/structural"
              className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-semibold rounded-sm hover:bg-accent transition-colors duration-300"
            >
              Explore Structural Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── COMBINED EXPORT ───────────────────────── */

export default function ServiceShowcase() {
  return (
    <>
      <FitoutSection />
      <ApprovalsSection />
      <StructuralSection />
    </>
  );
}
