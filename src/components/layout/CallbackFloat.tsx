"use client";

import { useState, useRef, useEffect } from "react";

const SERVICES = {
  "Fitout": [
    "Interior Fitout",
    "Office Fitout",
    "Retail Fitout",
    "Restaurant Fitout",
    "Villa / Residential Fitout",
  ],
  "Structural": [
    "Structural Analysis",
    "Design & Drafting",
    "Calculations & Reports",
    "BIM Modelling",
    "Site Supervision",
    "Authority Approvals",
  ],
  "Authority Approvals": [
    "Civil Defense",
    "Dubai Municipality",
    "DEWA",
    "Emaar",
    "Trakhees",
    "DHCC",
    "DIEZ",
    "JAFZA",
    "Nakheel",
    "RTA",
    "Other",
  ],
} as const;

type Category = keyof typeof SERVICES;

const CATEGORY_ICONS: Record<Category, React.ReactNode> = {
  "Fitout": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  "Structural": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  "Authority Approvals": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export default function CallbackFloat() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [category, setCategory] = useState<Category | "">("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "" });
  const wrapRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && !sent) setTimeout(() => nameRef.current?.focus(), 200);
  }, [open, sent]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => { setSent(false); setStep(1); setCategory(""); setForm({ name: "", phone: "", email: "", service: "" }); }, 400);
  };

  const handleCategorySelect = (cat: Category) => {
    setCategory(cat);
    setForm((p) => ({ ...p, service: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*Callback Request*\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Email:* ${form.email}\n*Category:* ${category}\n*Service:* ${form.service || "Not specified"}\n\nPlease call me back at your earliest convenience.`
    );
    window.open(`https://wa.me/971522543903?text=${msg}`, "_blank");
    setSent(true);
  };

  const step1Complete = form.name && form.phone && form.email;

  return (
    <div ref={wrapRef} className="fixed left-0 top-1/2 -translate-y-1/2 z-[9997] flex items-stretch">

      {/* ── Panel ── */}
      <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${open ? "w-[288px] opacity-100" : "w-0 opacity-0"}`}>
        <div className="w-[288px] bg-[#1a2f6b] border border-white/[0.15] border-r-0 shadow-[4px_0_48px_rgba(0,0,0,0.35)] relative overflow-hidden">

          {/* Dot texture */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "18px 18px" }} />

          {sent ? (
            /* ── Success ── */
            <div className="flex flex-col items-center justify-center px-7 py-12 text-center relative">
              <div className="w-14 h-14 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm font-bold text-white mb-2">Request Sent!</p>
              <p className="text-xs text-white/60 leading-relaxed mb-7">Our team will reach you shortly.</p>
              <button onClick={handleClose} className="text-[9px] font-black uppercase tracking-[0.22em] text-accent/70 hover:text-accent transition-colors">
                Close
              </button>
            </div>
          ) : (
            <div className="relative">
              {/* ── Header ── */}
              <div className="px-6 pt-6 pb-4 border-b border-white/[0.12]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-accent mb-0.5">Free Callback</p>
                    <h3 className="text-sm font-bold text-white/90 leading-snug">We'll call you right back.</h3>
                  </div>
                  <button onClick={handleClose} aria-label="Close"
                    className="w-6 h-6 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white/60 hover:text-white transition-all duration-200 shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Step indicators */}
                <div className="flex items-center gap-2 mt-4">
                  {[1, 2].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className={`flex items-center justify-center w-5 h-5 rounded-full text-[9px] font-black transition-all duration-300 ${
                        step === s ? "bg-accent text-white" : step > s ? "bg-accent/30 text-accent" : "bg-white/15 text-white/60"
                      }`}>{step > s ? "✓" : s}</div>
                      <span className={`text-[9px] font-bold uppercase tracking-wider transition-colors duration-300 ${step === s ? "text-white/90" : "text-white/45"}`}>
                        {s === 1 ? "Details" : "Service"}
                      </span>
                      {s < 2 && <div className="flex-1 h-px bg-white/20 w-6" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Step 1: Contact details ── */}
              {step === 1 && (
                <div className="px-6 py-5 space-y-3">
                  {[
                    { label: "Your Name", key: "name", type: "text", placeholder: "Your Name" },
                    { label: "Phone Number", key: "phone", type: "tel", placeholder: "Phone Number" },
                    { label: "Email Address", key: "email", type: "email", placeholder: "Email Address" },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key} className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-[0.18em] text-white/60">{label}</label>
                      <input
                        ref={key === "name" ? nameRef : undefined}
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                        className="w-full px-3 py-2.5 bg-white/[0.12] border border-white/[0.2] rounded-lg text-xs text-white placeholder:text-white/35 focus:outline-none focus:border-accent/60 focus:bg-white/[0.16] transition-all duration-200"
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => { if (step1Complete) setStep(2); }}
                    disabled={!step1Complete}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-lg hover:bg-accent/85 disabled:opacity-30 disabled:cursor-not-allowed active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_rgba(31,182,181,0.25)] mt-1"
                  >
                    Next — Choose Service
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}

              {/* ── Step 2: Service ── */}
              {step === 2 && (
                <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
                  {/* Back */}
                  <button type="button" onClick={() => setStep(1)}
                    className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-white/50 hover:text-white/90 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>

                  {/* Category pick */}
                  <div className="space-y-1.5">
                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/60">Service Category</p>
                    <div className="grid grid-cols-3 gap-2">
                      {(Object.keys(SERVICES) as Category[]).map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => handleCategorySelect(cat)}
                          className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl border text-center transition-all duration-200 ${
                            category === cat
                              ? "border-accent bg-accent/15 text-accent"
                              : "border-white/[0.18] bg-white/[0.08] text-white/60 hover:border-white/35 hover:text-white/90"
                          }`}
                        >
                          {CATEGORY_ICONS[cat]}
                          <span className="text-[8px] font-black uppercase tracking-wide leading-tight">{cat}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sub-service pick — slides in once category selected */}
                  {category && (
                    <div className="space-y-1.5">
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/60">Specific Service</p>
                      <div className="flex flex-col gap-1.5">
                        {SERVICES[category].map((svc) => (
                          <button
                            key={svc}
                            type="button"
                            onClick={() => setForm((p) => ({ ...p, service: svc }))}
                            className={`flex items-center justify-between px-3 py-2 rounded-lg border text-left transition-all duration-150 ${
                              form.service === svc
                                ? "border-accent bg-accent/12 text-white"
                                : "border-white/[0.15] bg-white/[0.06] text-white/65 hover:border-white/30 hover:text-white"
                            }`}
                          >
                            <span className="text-[10px] font-semibold">{svc}</span>
                            {form.service === svc && (
                              <span className="w-3.5 h-3.5 rounded-full bg-accent flex items-center justify-center shrink-0">
                                <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!form.service}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-lg hover:bg-accent/85 disabled:opacity-30 disabled:cursor-not-allowed active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_rgba(31,182,181,0.3)]"
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Request Callback
                  </button>
                  <p className="text-[9px] text-white/40 text-center">Sends via WhatsApp · no data stored</p>
                </form>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Tab trigger ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close callback form" : "Request a callback"}
        className={`relative flex flex-col items-center justify-center gap-2 w-8 py-6 rounded-r-xl transition-all duration-300 shrink-0 cursor-pointer ${
          open
            ? "bg-[#1a2f6b] border border-l-0 border-white/[0.15] text-white/70 hover:text-white"
            : "bg-[#1a2f6b] border border-white/[0.15] text-white/60 hover:text-white shadow-[2px_0_16px_rgba(0,0,0,0.18)] hover:shadow-[2px_0_24px_rgba(0,0,0,0.28)]"
        }`}
      >
        {!open && (
          <span className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-transparent via-accent to-transparent rounded-full" />
        )}
        <svg
          className={`w-4 h-4 shrink-0 transition-all duration-300 ${open ? "text-white/70" : "text-accent"}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          )}
        </svg>
        {!open && (
          <span
            className="text-[8px] font-black uppercase tracking-[0.22em] text-white/55"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
          >
            Call Back
          </span>
        )}
      </button>
    </div>
  );
}
