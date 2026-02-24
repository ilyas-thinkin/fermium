"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ── Intersection observer hook ────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Animated section wrapper ───────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── Data ───────────────────────────────────────────────────── */
const services = [
  {
    number: "01",
    title: "Interior Fit-Out",
    tagline: "UAE-wide execution",
    color: "#1FB6B5",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12h6v10" />
      </svg>
    ),
    description:
      "Functional, well-coordinated fit-out works for commercial and residential spaces. From planning to site execution, we focus on quality, safety, and smooth trade coordination.",
    bullets: [
      "Offices, retail, F&B, clinics, warehouses & residential",
      "Site supervision, coordination & progress control",
      "Snagging, handover support & close-out documentation",
      "Fit-out execution aligned with project specifications",
    ],
  },
  {
    number: "02",
    title: "Authority Approvals",
    tagline: "Dubai-wide submissions",
    color: "#16245C",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description:
      "Submission-ready drawings, document preparation, application coordination and authority comment closure—helping reduce resubmissions and delays for fit-outs, renovations and technical works.",
    bullets: [
      "Pre-check and requirement assessment",
      "Drawings coordination & submission preparation",
      "Handling authority comments and revisions",
      "Inspection coordination & final NOC support",
    ],
  },
  {
    number: "03",
    title: "Structural Design",
    tagline: "Code-compliant solutions",
    color: "#1FB6B5",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    description:
      "Safe, code-compliant, buildable structural solutions for new work, modifications, or existing structure verification. Calculations, reports and design deliverables that support both approvals and execution.",
    bullets: [
      "Structural analysis & design (UAE codes/standards)",
      "Structural calculation packages & reports",
      "Design review / verification support",
      "Site support for structural clarifications",
    ],
  },
];

const process = [
  { step: "01", title: "Scope Review", desc: "Project requirements, site constraints, and authority needs." },
  { step: "02", title: "Site & Document Check", desc: "Validate existing drawings and identify compliance gaps." },
  { step: "03", title: "Design & Documentation", desc: "Drawings and calculations prepared to approval and execution standards." },
  { step: "04", title: "Coordination & Submissions", desc: "Manage revisions, comments, and stakeholder alignment." },
  { step: "05", title: "Execution & Close-Out", desc: "Inspections, snagging, and handover documentation." },
];

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "One Team, Three Disciplines",
    desc: "Fit-out + approvals + structural under one roof — reducing coordination issues and keeping your project coherent.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Compliance-First Documentation",
    desc: "Structured submissions that avoid common rejection reasons and help you get approvals first time.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Practical, Buildable Solutions",
    desc: "Solutions aligned with site conditions — not just on paper. Engineering that works in the real world.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Clear Communication",
    desc: "Responsive coordination with all project stakeholders — so nothing falls through the cracks.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Timeline Focus",
    desc: "Structured tracking from submission to final approval and handover, keeping your schedule intact.",
  },
];

const clients = [
  { title: "Business Owners & Tenants", icon: "🏢" },
  { title: "Property Managers", icon: "🏗️" },
  { title: "Fit-Out & MEP Contractors", icon: "🔧" },
  { title: "Consultants & Project Managers", icon: "📋" },
  { title: "Design Teams", icon: "✏️" },
  { title: "Facility Management", icon: "⚙️" },
];

/* ── Page ───────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Decorative accent blobs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full bg-accent/5 blur-2xl pointer-events-none" />

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <span className="inline-block px-5 py-2 bg-white/10 text-accent text-xs font-semibold uppercase tracking-widest rounded-sm animate-fade-in-up">
            About Us
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl animate-fade-in-up animation-delay-200">
            Technical Services<br />
            <span className="text-accent">Built for the UAE</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/65 text-lg leading-relaxed animate-fade-in-up animation-delay-400">
            Fermium Designs is a UAE-based technical services company supporting projects through
            three connected areas: interior fit-out, Dubai authority approvals, and structural
            design & analysis.
          </p>

          <div className="mt-10 flex flex-wrap gap-8 animate-fade-in-up animation-delay-400">
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Authorities Covered", value: "21+" },
              { label: "Years in UAE", value: "10+" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-3xl font-bold text-accent">{s.value}</span>
                <span className="mt-1 text-sm text-white/50 font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Are ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                About Fermium Designs
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight mb-6">
                From Planning to Handover—<br />Without the Delays
              </h2>
              <p className="text-text-secondary leading-relaxed mb-5">
                We help business owners, tenants, contractors, consultants, and facility teams
                move from planning to handover with fewer delays—by combining practical site
                execution with clear, compliance-ready documentation.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Our approach is straightforward: understand the project requirement, prepare
                the right drawings and submissions, coordinate with stakeholders, and ensure
                the work meets UAE regulations and on-site realities.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-accent transition-colors duration-300"
                >
                  Our Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary text-sm font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </Reveal>

            {/* Right — decorative cards */}
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Interior Fit-Out", sub: "UAE-wide execution", color: "bg-accent/10 text-accent" },
                  { label: "Authority Approvals", sub: "21+ Dubai authorities", color: "bg-primary/5 text-primary" },
                  { label: "Structural Design", sub: "Code-compliant solutions", color: "bg-primary/5 text-primary" },
                  { label: "One Team", sub: "For all three disciplines", color: "bg-accent/10 text-accent" },
                ].map((c, i) => (
                  <div
                    key={c.label}
                    className={`rounded-2xl p-6 border border-[#e9ecef] flex flex-col gap-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(31,182,181,0.12)] ${i % 2 === 0 ? "mt-0" : "mt-6"}`}
                  >
                    <span className={`text-xs font-bold uppercase tracking-widest ${c.color.split(" ")[1]}`}>
                      {c.sub}
                    </span>
                    <p className="text-sm font-bold text-primary leading-snug">{c.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What We Do ───────────────────────────────────────── */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Three Connected Services</h2>
            <p className="mt-3 text-text-secondary max-w-xl mx-auto leading-relaxed">
              Each service is designed to work independently or together, depending on what your project needs.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-[#e9ecef] p-8 flex flex-col h-full group hover:shadow-[0_20px_48px_rgba(22,36,92,0.10)] hover:-translate-y-1 transition-all duration-400">
                  {/* Number + icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-black text-[#F0F4FF]">{s.number}</span>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: s.color }}
                    >
                      {s.icon}
                    </div>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2">{s.tagline}</span>
                  <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">{s.description}</p>

                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-text-secondary">
                        <span className="mt-1 w-4 h-4 shrink-0 rounded-full bg-accent/15 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ──────────────────────────────────────── */}
      <section className="py-24 bg-primary overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">A Clear, Controlled Process</h2>
            <p className="mt-3 text-white/55 max-w-xl mx-auto leading-relaxed">
              Designed to keep projects predictable from first review through to final handover.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80}>
                <div className="flex flex-col items-center text-center px-4">
                  {/* Circle + connector row */}
                  <div className="flex items-center w-full mb-5">
                    {/* Left connector — hidden for first item */}
                    <div className={`flex-1 h-px bg-white/20 ${i === 0 ? "invisible" : ""}`} />
                    {/* Circle */}
                    <div className="w-16 h-16 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-accent font-black text-lg">
                      {p.step}
                    </div>
                    {/* Right connector — hidden for last item */}
                    <div className={`flex-1 h-px bg-white/20 ${i === process.length - 1 ? "invisible" : ""}`} />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">{p.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Why Clients Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">What Sets Us Apart</h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 70}>
                <div className="group bg-[#F5F7FA] rounded-2xl p-6 border border-[#e9ecef] hover:bg-primary hover:border-primary hover:shadow-[0_20px_48px_rgba(22,36,92,0.18)] transition-all duration-400 flex flex-col gap-4 h-full">
                  <span className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-white/10 group-hover:text-white transition-all duration-300 shrink-0">
                    {r.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-primary group-hover:text-white text-sm leading-snug mb-2 transition-colors duration-300">{r.title}</h3>
                    <p className="text-xs text-text-secondary group-hover:text-white/65 leading-relaxed transition-colors duration-300">{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Support ───────────────────────────────────── */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Who We Support</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight mb-5">
                Built for the People<br />Who Build Dubai
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Whether you&apos;re fitting out a new space, navigating a complex approval, or need
                structural validation—we have the expertise to support your project from day one.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {clients.map((c, i) => (
                  <div
                    key={c.title}
                    className="bg-white rounded-2xl p-5 border border-[#e9ecef] flex flex-col items-center text-center gap-3 hover:border-accent/40 hover:shadow-[0_12px_32px_rgba(31,182,181,0.10)] transition-all duration-300 hover:-translate-y-0.5"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <span className="text-2xl">{c.icon}</span>
                    <p className="text-xs font-semibold text-primary leading-snug">{c.title}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Our Foundation</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Mission & Vision</h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <Reveal delay={0}>
              <div className="relative rounded-2xl overflow-hidden border border-[#e9ecef] p-8 flex flex-col gap-5 h-full group hover:shadow-[0_20px_48px_rgba(31,182,181,0.12)] transition-shadow duration-400">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Mission</h3>
                  <p className="text-text-secondary leading-relaxed">
                    To provide reliable fit-out, approvals, and structural engineering support through
                    clear documentation, code-compliant solutions, and disciplined execution—helping
                    clients complete projects smoothly and safely.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal delay={120}>
              <div className="relative rounded-2xl overflow-hidden border border-[#e9ecef] p-8 flex flex-col gap-5 h-full group hover:shadow-[0_20px_48px_rgba(22,36,92,0.10)] transition-shadow duration-400">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Vision</h3>
                  <p className="text-text-secondary leading-relaxed">
                    To be a trusted UAE partner for fit-out and technical approvals, known for
                    accuracy, speed, compliance, and practical engineering that works on site—not
                    just on paper.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Commitment + CTA ─────────────────────────────────── */}
      <section className="py-24 bg-primary overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Our Commitment</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight mb-5">
              Clear Documents. Safe Design.<br />Disciplined Execution.
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
              At Fermium Designs, we believe successful projects depend on these three things.
              Our goal is to make your fit-out and technical approvals process simpler—so your
              project stays compliant, coordinated, and ready for completion.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-secondary transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                Explore Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
