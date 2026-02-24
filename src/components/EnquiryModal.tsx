"use client";

import { useEffect, useRef, useState } from "react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  serviceOptions?: string[];
}

const SERVICE_OPTIONS = [
  "Interior FitOut Work",
  "Authority Approvals",
  "Structural Solutions",
  // Structural sub-services
  "Structural Design & Drafting",
  "Structural Analysis",
  "Calculations & Reports",
  "3D BIM Modeling",
  "Site Supervision",
  // Approval sub-services
  "Civil Defense Approval",
  "DEWA Approval",
  "Dubai Municipality Approval",
  "Emaar Approval",
  "Nakheel Approval",
  "JAFZA Approval",
  "DHA Approval",
  "DSO Approval",
  "Dubai Development Authority (DDA)",
  "DAMAC Approval",
  "Trakhees Approval",
  "Dubai South Approval",
  "DHCC Approval",
  "DIEZ Approval",
  "Concordia Approval",
  "Tecom & DCCA Approval",
  "RTA Permit",
  "Food Control Department",
  "Spa Approval",
  "Shisha Café License",
  "Smoking Permit",
  "Swimming Pool Approval",
  "Solar Approval",
  "Signage Approval",
  "Tent Approval",
  "Third Party Consultants",
  "Other",
];

export default function EnquiryModal({ isOpen, onClose, defaultService = "", serviceOptions }: EnquiryModalProps) {
  const options = serviceOptions ?? SERVICE_OPTIONS;
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Sync service when modal opens with a new defaultService
  useEffect(() => {
    if (isOpen) {
      setForm((prev) => ({ ...prev, service: defaultService }));
      setSubmitted(false);
      // Focus first input after transition
      setTimeout(() => firstInputRef.current?.focus(), 80);
    }
  }, [isOpen, defaultService]);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `*New Enquiry from Website*`,
      ``,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone}`,
      `*Service:* ${form.service || "Not specified"}`,
      ``,
      `*Message:*`,
      form.message || "(No message provided)",
    ];
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/971522543903?text=${text}`, "_blank");
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(10,20,60,0.55)", backdropFilter: "blur(4px)" }}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.22)] overflow-hidden"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        {/* Header */}
        <div className="bg-primary px-7 pt-7 pb-6 relative">
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative">
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest rounded-sm mb-3">
              Quick Enquiry
            </span>
            <h2 className="text-xl font-bold text-white leading-tight">We&apos;d Love to Hear From You</h2>
            <p className="mt-1.5 text-white/60 text-sm">
              Fill in your details and we&apos;ll reply via WhatsApp within the hour.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-7 py-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Enquiry Sent!</h3>
              <p className="text-sm text-text-secondary mb-6">
                Your message has been opened in WhatsApp. Our team will respond promptly.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-accent transition-colors duration-300"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="modal-name" className="block text-xs font-semibold text-primary mb-1.5">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  id="modal-name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#e9ecef] rounded-lg text-sm text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-primary mb-1.5">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#e9ecef] rounded-lg text-sm text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-primary mb-1.5">
                    Phone <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#e9ecef] rounded-lg text-sm text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="modal-service" className="block text-xs font-semibold text-primary mb-1.5">
                  Service Required
                </label>
                <div className="relative">
                  <select
                    id="modal-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#e9ecef] rounded-lg text-sm text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none pr-10"
                  >
                    <option value="">Select a service</option>
                    {options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-light">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="modal-message" className="block text-xs font-semibold text-primary mb-1.5">
                  Message <span className="text-text-light text-[10px] font-normal">(optional)</span>
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#e9ecef] rounded-lg text-sm text-primary placeholder:text-text-light focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-primary text-white text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-accent transition-colors duration-300"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send via WhatsApp
              </button>

              <p className="text-[11px] text-text-light text-center">
                Your details open WhatsApp directly — no data is stored on our servers.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
