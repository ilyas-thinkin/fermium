"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";

/* ─── TYPES ─────────────────────────────────────────────────── */

export interface StructuralServiceData {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  icon: ReactNode;
  features: { title: string; desc: string }[];
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  deliverables: string[];
  suitableFor: { label: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

/* ─── HELPERS ───────────────────────────────────────────────── */

const WA_ICON = (
  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block px-4 py-1.5 bg-accent/15 border border-accent/20 text-accent text-[11px] font-bold uppercase tracking-[0.2em] rounded-full">
      {children}
    </span>
  );
}

function FaqItem({ faq, index, isOpen, onToggle }: { faq: { q: string; a: string }; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border-b border-[#e9ecef] last:border-0 transition-all duration-200 ${isOpen ? "" : "hover:bg-[#fafafa]"}`}>
      <button onClick={onToggle} className="w-full flex items-center gap-4 py-5 px-6 text-left group">
        <span className={`shrink-0 text-xs font-black w-6 transition-colors duration-200 ${isOpen ? "text-accent" : "text-primary/25 group-hover:text-accent/60"}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`flex-1 font-semibold text-sm leading-snug transition-colors duration-200 ${isOpen ? "text-primary" : "text-primary/75 group-hover:text-primary"}`}>
          {faq.q}
        </span>
        <span className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-accent border-accent text-white rotate-180" : "border-[#ddd] text-primary/30 group-hover:border-accent/40 group-hover:text-accent"}`}>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64" : "max-h-0"}`}>
        <p className="pb-5 px-6 pl-16 text-sm text-text-secondary leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default function StructuralServicePage({ data }: { data: StructuralServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const waText = encodeURIComponent(`Hi, I'd like to enquire about: ${data.title}`);

  return (
    <main>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-[#0D1A3A] pt-40 pb-0 overflow-hidden">
        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-accent/8 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-accent/5 blur-[80px] pointer-events-none rounded-full" />

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <Link href="/services/structural" className="inline-flex items-center gap-2 text-white/35 hover:text-white/70 text-xs font-bold uppercase tracking-widest transition-colors mb-12">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Structural Solutions
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 pb-0">
            {/* Left */}
            <div className="pb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  {data.icon}
                </div>
                <Tag>{data.category}</Tag>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
                {data.title}
              </h1>
              <p className="text-white/50 text-lg leading-relaxed max-w-xl">{data.tagline}</p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/971522543903?text=${waText}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-bold text-sm rounded-xl hover:bg-accent/90 transition-all shadow-[0_8px_24px_rgba(31,182,181,0.35)]"
                >
                  {WA_ICON} Send Enquiry
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/6 border border-white/12 text-white/80 font-semibold text-sm rounded-xl hover:bg-white/12 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right — floating stats card */}
            <div className="hidden lg:flex flex-col justify-end pb-20">
              <div className="bg-white/5 backdrop-blur border border-white/8 rounded-2xl p-6 space-y-4">
                {[
                  { label: "Features", value: `${data.features.length}` },
                  { label: "Process Steps", value: `${data.process.length}` },
                  { label: "Deliverables", value: `${data.deliverables.length}` },
                  { label: "FAQs", value: `${data.faqs.length}` },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between items-center py-3 border-b border-white/8 last:border-0">
                    <span className="text-xs font-semibold text-white/35 uppercase tracking-widest">{s.label}</span>
                    <span className="text-2xl font-black text-accent">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom angled cut */}
          <div className="relative h-16">
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 64" preserveAspectRatio="none" fill="white">
              <path d="M0,64 L1440,0 L1440,64 Z" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] divide-y lg:divide-y-0 lg:divide-x divide-[#e9ecef]">
            <div className="py-16 lg:pr-16">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent mb-3">Overview</p>
              <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6 leading-tight">What Is {data.title}?</h2>
              <p className="text-text-secondary leading-[1.9] text-base">{data.description}</p>
            </div>
            <div className="py-16 lg:pl-16 flex flex-col justify-center gap-3">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary/40 mb-2">Quick Facts</p>
              {[
                { label: "Service Category", value: data.category },
                { label: "Key Features", value: `${data.features.length} Focus Areas` },
                { label: "Deliverables", value: `${data.deliverables.length} Documents` },
                { label: "FAQs Answered", value: `${data.faqs.length} Questions` },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between py-3.5 border-b border-[#f0f2f5] last:border-0">
                  <span className="text-xs font-semibold text-text-light uppercase tracking-wider">{row.label}</span>
                  <span className="text-sm font-bold text-primary">{row.value}</span>
                </div>
              ))}
              <a
                href={`https://wa.me/971522543903?text=${waText}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-accent transition-all duration-300"
              >
                {WA_ICON} Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ─────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent mb-3">Key Features</p>
            <h2 className="text-3xl sm:text-4xl font-black text-primary">What's Included</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.features.map((f, i) => (
              <div key={f.title} className="group bg-white rounded-2xl p-7 border border-[#e9ecef] hover:border-accent/30 hover:shadow-[0_12px_36px_rgba(31,182,181,0.08)] transition-all duration-300 relative overflow-hidden">
                <span className="absolute -top-2 -right-1 text-[72px] font-black text-primary/[0.035] leading-none select-none group-hover:text-accent/[0.055] transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <svg className="w-4.5 h-4.5 w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-black text-primary text-sm mb-2 leading-snug">{f.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS + DELIVERABLES ───────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Benefits */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent mb-3">Benefits</p>
              <h2 className="text-2xl sm:text-3xl font-black text-primary mb-8 leading-tight">Why It Matters</h2>
              <div className="space-y-3">
                {data.benefits.map((b, i) => (
                  <div key={b} className="flex items-start gap-4 p-5 bg-[#F5F7FA] rounded-2xl border border-[#e9ecef] hover:border-accent/25 transition-colors duration-200">
                    <span className="shrink-0 w-8 h-8 rounded-xl bg-accent flex items-center justify-center text-white text-xs font-black">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-text-secondary leading-relaxed pt-1">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent mb-3">Deliverables</p>
              <h2 className="text-2xl sm:text-3xl font-black text-primary mb-8 leading-tight">What You Receive</h2>
              <div className="bg-[#0D1A3A] rounded-2xl p-7">
                <ul className="space-y-3.5">
                  {data.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-md bg-accent/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-white/60 leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#0D1A3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/8 blur-[80px] pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent mb-3">Our Process</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.process.map((step, i) => (
              <div key={step.step} className="group flex gap-5 bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 hover:bg-white/[0.08] hover:border-accent/30 transition-all duration-300">
                <span className="shrink-0 w-10 h-10 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent text-xs font-black group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1.5 leading-snug">{step.title}</h3>
                  <p className="text-xs text-white/45 leading-relaxed group-hover:text-white/60 transition-colors duration-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUITABLE FOR ─────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent mb-3">Suitable For</p>
            <h2 className="text-3xl sm:text-4xl font-black text-primary">Projects We Work On</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.suitableFor.map((item, i) => (
              <div key={item.label} className="group bg-white rounded-2xl p-6 border border-[#e9ecef] hover:border-accent/30 hover:shadow-[0_8px_24px_rgba(31,182,181,0.08)] transition-all duration-300 flex gap-4">
                <span className="shrink-0 w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary/30 text-xs font-black group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-black text-primary text-sm mb-1 leading-snug">{item.label}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16">
            {/* Left */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent mb-3">FAQs</p>
              <h2 className="text-3xl font-black text-primary leading-tight mb-5">
                Frequently<br />Asked<br />Questions
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-8">
                Common questions about {data.title} in Dubai and the UAE.
              </p>
              <a
                href={`https://wa.me/971522543903?text=${waText}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-accent transition-all duration-300"
              >
                {WA_ICON} Ask Us Anything
              </a>
            </div>

            {/* Accordion */}
            <div className="bg-[#F8F9FB] rounded-2xl border border-[#e9ecef] overflow-hidden divide-y divide-[#e9ecef]">
              {data.faqs.map((faq, i) => (
                <FaqItem
                  key={faq.q}
                  faq={faq}
                  index={i}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-[80px] pointer-events-none" />
        <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-accent/8 blur-[60px] pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <Tag>Get Started</Tag>
          <h2 className="mt-6 text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
            Ready to Start Your<br />{data.title} Project?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-10 text-base leading-relaxed">
            Our team handles everything — from initial review and design through calculations, drawings, and authority submissions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/971522543903?text=${waText}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-white font-bold text-sm rounded-xl hover:bg-accent/90 transition-all shadow-[0_12px_32px_rgba(31,182,181,0.4)]"
            >
              {WA_ICON} Send Enquiry via WhatsApp
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white/8 border border-white/15 text-white font-semibold text-sm rounded-xl hover:bg-white/15 transition-all">
              Contact Us
              <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
