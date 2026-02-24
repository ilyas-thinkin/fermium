"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";

export interface ApprovalStep {
  step: string;
  title: string;
  desc: string;
}

export interface ApprovalDoc {
  category: string;
  items: string[];
}

export interface ApprovalFaq {
  q: string;
  a: string;
}

export interface ApprovalServiceData {
  slug: string;
  title: string;
  authority: string;
  tagline: string;
  description: string;
  icon: ReactNode;
  whoNeeds: { category: string; items: string[] }[];
  steps: ApprovalStep[];
  documents: ApprovalDoc[];
  timeline: string;
  rejections: { reason: string; fix: string }[];
  faqs: ApprovalFaq[];
}

function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[11px] font-bold uppercase tracking-[0.18em] mb-3 ${light ? "text-accent" : "text-accent"}`}>
      {children}
    </p>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
      <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-accent/15 flex items-center justify-center">
        <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {children}
    </li>
  );
}

function FaqItem({ faq, index, isOpen, onToggle }: { faq: ApprovalFaq; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-accent/40 shadow-[0_8px_32px_rgba(31,182,181,0.10)]" : "border-[#e9ecef] hover:border-accent/20"}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-5 px-7 py-5 text-left group"
      >
        {/* Number badge */}
        <span className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black transition-all duration-300 ${isOpen ? "bg-accent text-white" : "bg-[#F5F7FA] text-primary/40 group-hover:bg-accent/10 group-hover:text-accent"}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`flex-1 font-semibold text-sm leading-snug pt-1 transition-colors duration-200 ${isOpen ? "text-primary" : "text-primary/80 group-hover:text-primary"}`}>
          {faq.q}
        </span>
        {/* Chevron */}
        <span className={`shrink-0 w-7 h-7 mt-0.5 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? "border-accent bg-accent text-white rotate-180" : "border-[#e9ecef] text-primary/40 group-hover:border-accent/40 group-hover:text-accent"}`}>
          <svg className="w-3.5 h-3.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {/* Answer */}
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
        <div className="px-7 pb-6 ml-13">
          <div className="ml-[52px] pl-0 border-l-2 border-accent/20 pl-5">
            <p className="text-sm text-text-secondary leading-relaxed pl-5">{faq.a}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const WA_ICON = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ApprovalServicePage({ data }: { data: ApprovalServiceData }) {
  const waText = encodeURIComponent(`Hi, I'd like to enquire about: ${data.title}`);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 bg-primary overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-[60px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <Link
            href="/services/approvals"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 text-xs font-semibold uppercase tracking-widest transition-colors mb-10"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Authority Approvals
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-3xl">
              {/* Authority badge + icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  {data.icon}
                </div>
                <span className="px-4 py-1.5 bg-white/8 border border-white/10 text-accent text-[11px] font-bold uppercase tracking-[0.2em] rounded-full">
                  {data.authority}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                {data.title}
              </h1>
              <p className="mt-5 text-white/55 text-lg leading-relaxed max-w-2xl">
                {data.tagline}
              </p>
            </div>

            {/* CTA card */}
            <div className="lg:shrink-0 flex flex-col gap-3 lg:min-w-[220px]">
              <a
                href={`https://wa.me/971522543903?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white font-bold text-sm rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-[0_8px_24px_rgba(31,182,181,0.35)]"
              >
                {WA_ICON}
                Send Enquiry
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/8 border border-white/15 text-white font-semibold text-sm rounded-xl hover:bg-white/15 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview (full-width split) ───────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#e9ecef]">
            {/* Left — description */}
            <div className="py-16 lg:pr-16">
              <SectionLabel>What Is {data.authority}?</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6 leading-tight">Overview</h2>
              <p className="text-text-secondary leading-[1.85] text-base">{data.description}</p>
            </div>
            {/* Right — accent panel */}
            <div className="py-16 lg:pl-16 flex flex-col justify-center gap-6">
              {[
                { label: "Approval Type", value: data.authority },
                { label: "Steps Involved", value: `${data.steps.length} Steps` },
                { label: "Documents Needed", value: `${data.documents.reduce((a, d) => a + d.items.length, 0)} Documents` },
                { label: "FAQs Answered", value: `${data.faqs.length} Questions` },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between py-4 border-b border-[#f0f2f5] last:border-0">
                  <span className="text-xs font-bold uppercase tracking-widest text-text-light">{stat.label}</span>
                  <span className="text-sm font-bold text-primary">{stat.value}</span>
                </div>
              ))}
              <a
                href={`https://wa.me/971522543903?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-accent transition-all duration-300"
              >
                {WA_ICON}
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who Needs It ─────────────────────────────────── */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-12">
            <SectionLabel>Who Needs It</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight">Who Typically Requires<br className="hidden sm:block" /> This Approval</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.whoNeeds.map((group, i) => (
              <div key={group.category} className="relative bg-white rounded-2xl p-7 border border-[#e9ecef] hover:border-accent/30 hover:shadow-[0_12px_36px_rgba(31,182,181,0.09)] transition-all duration-300 overflow-hidden group">
                {/* Large number watermark */}
                <span className="absolute -top-3 -right-1 text-[80px] font-black text-primary/4 leading-none select-none group-hover:text-accent/6 transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-5">{group.category}</p>
                <ul className="space-y-2.5">
                  {group.items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Step-by-Step Process ──────────────────────────── */}
      <section className="py-20 bg-primary overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/8 blur-[80px] pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-12">
            <SectionLabel light>The Process</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">Step-by-Step<br className="hidden sm:block" /> Approval Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.steps.map((s, i) => (
              <div
                key={s.step}
                className="relative bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 group"
              >
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent text-xs font-black shrink-0 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 h-px bg-white/8" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2 leading-snug">{s.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed group-hover:text-white/65 transition-colors duration-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Documents ────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-12">
            <SectionLabel>Documents Required</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight">Documents Checklist</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.documents.map((doc) => (
              <div key={doc.category} className="bg-white rounded-2xl p-7 border border-[#e9ecef] hover:border-accent/30 hover:shadow-[0_12px_32px_rgba(31,182,181,0.08)] transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">{doc.category}</p>
                </div>
                <ul className="space-y-2.5">
                  {doc.items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline + Rejections ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Timeline */}
            <div>
              <SectionLabel>Timeline</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-black text-primary mb-6 leading-tight">How Long Does It Take?</h2>
              <div className="relative bg-[#F5F7FA] rounded-2xl p-8 border border-[#e9ecef] overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-accent/20 rounded-full" />
                <div className="flex items-start gap-4 pl-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-text-secondary leading-[1.85] text-sm">{data.timeline}</p>
                </div>
              </div>
            </div>

            {/* Rejections */}
            <div>
              <SectionLabel>Common Issues</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-black text-primary mb-6 leading-tight">Rejection Reasons & Fixes</h2>
              <div className="space-y-3">
                {data.rejections.map((r, i) => (
                  <div key={r.reason} className="group bg-[#F5F7FA] rounded-xl border border-[#e9ecef] hover:border-accent/30 hover:bg-white transition-all duration-300 overflow-hidden">
                    <div className="flex items-start gap-4 p-4">
                      <span className="shrink-0 w-6 h-6 rounded-md bg-red-50 border border-red-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-primary mb-1.5 leading-snug">{r.reason}</p>
                        <div className="flex items-start gap-2">
                          <span className="shrink-0 w-4 h-4 rounded-sm bg-accent/10 flex items-center justify-center mt-0.5">
                            <svg className="w-2.5 h-2.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <p className="text-xs text-text-secondary leading-relaxed">{r.fix}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F7FA] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #16245C 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">
            {/* Left sticky label */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionLabel>FAQs</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight mb-5">
                Frequently<br />Asked<br />Questions
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-8">
                Everything you need to know about the {data.authority} approval process in Dubai.
              </p>
              <a
                href={`https://wa.me/971522543903?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-accent transition-all duration-300"
              >
                {WA_ICON}
                Ask Us Anything
              </a>
            </div>

            {/* Right — accordion */}
            <div className="space-y-3">
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

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-[80px] pointer-events-none" />
        <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-accent/8 blur-[60px] pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-accent/15 border border-accent/20 text-accent text-[11px] font-bold uppercase tracking-[0.2em] rounded-full mb-6">
              Get Started Today
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
              Ready to Get Your<br />{data.authority} Approval?
            </h2>
            <p className="text-white/55 max-w-xl mx-auto mb-10 text-base leading-relaxed">
              Our team handles the entire process — from document preparation to submission and final approval. No stress, no delays.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/971522543903?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-white font-bold text-sm rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-[0_12px_32px_rgba(31,182,181,0.4)]"
              >
                {WA_ICON}
                Send Enquiry via WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/8 border border-white/15 text-white font-semibold text-sm rounded-xl hover:bg-white/15 transition-all duration-200"
              >
                Contact Us
                <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
