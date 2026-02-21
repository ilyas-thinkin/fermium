"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
      form.message,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/971522543903?text=${text}`, "_blank");
  };

  const contactDetails = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Our Office",
      value: "Al Babtain Building - Office 302,\nPort Saeed, Deira, Dubai",
      href: "https://maps.google.com/?q=Al+Babtain+Building+Port+Saeed+Deira+Dubai",
      external: true,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "052 254 3903",
      href: "tel:+971522543903",
      external: false,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "info@fermiumdesigns.ae",
      href: "mailto:info@fermiumdesigns.ae",
      external: false,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      label: "WhatsApp",
      value: "Chat with us on WhatsApp",
      href: "https://wa.me/971522543903",
      external: true,
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <span className="inline-block px-5 py-2 bg-white/10 text-accent text-xs font-semibold uppercase tracking-widest rounded-sm">
            Contact Us
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
            Let&apos;s Build Something<br />Together
          </h1>
          <p className="mt-5 max-w-2xl text-white/60 text-lg leading-relaxed">
            Reach out to our team for project enquiries, consultations, or any
            questions about our services across Dubai and the UAE.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactDetails.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group bg-white rounded-2xl p-6 border border-[#e9ecef] hover:border-accent/40 hover:shadow-[0_12px_32px_rgba(31,182,181,0.12)] transition-all duration-300 flex flex-col gap-4"
              >
                <span className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{item.label}</p>
                  <p className="text-sm text-primary font-semibold whitespace-pre-line leading-snug">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — Form */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Send Us a Message</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">We&apos;d Love to Hear From You</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Fill in the form below and our team will respond within 24 hours.
                Your enquiry goes straight to our WhatsApp for a fast reply.
              </p>

              <form
                onSubmit={handleSubmit}
                className="bg-[#F5F7FA] rounded-2xl p-8 border border-[#e9ecef] space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white border border-[#e9ecef] rounded-lg text-sm text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white border border-[#e9ecef] rounded-lg text-sm text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white border border-[#e9ecef] rounded-lg text-sm text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-primary mb-2">Service Required</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white border border-[#e9ecef] rounded-lg text-sm text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      backgroundSize: "18px",
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="Interior FitOut Work">Interior FitOut Work</option>
                    <option value="Authority Approvals">Authority Approvals</option>
                    <option value="Structural Solutions">Structural Solutions</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3.5 bg-white border border-[#e9ecef] rounded-lg text-sm text-primary placeholder:text-text-light focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-accent transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </button>

                <p className="text-xs text-text-light text-center">
                  Your details will be sent directly to our WhatsApp for a quick response.
                </p>
              </form>
            </div>

            {/* Right — Map with address overlay */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Find Us</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Visit Our Office</h2>
                <p className="text-text-secondary leading-relaxed">
                  We&apos;re located in the heart of Deira, Dubai — easy to reach from Sheikh Zayed Road, Airport, and across the emirate.
                </p>
              </div>

              {/* Map container */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.10)] border border-[#e9ecef]" style={{ height: "460px" }}>
                {/* Address card — top left overlay */}
                <div className="absolute top-4 left-4 z-10 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.14)] p-4 max-w-[220px]">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-bold text-primary leading-tight">Fermium Designs</p>
                      <p className="text-xs text-text-secondary leading-snug mt-0.5">
                        Al Babtain Building<br />
                        Office 302, Port Saeed<br />
                        Deira, Dubai
                      </p>
                      <a
                        href="https://maps.google.com/?q=Al+Babtain+Building+Port+Saeed+Deira+Dubai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-[11px] font-semibold text-accent hover:underline"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Embedded Google Map — Port Saeed, Deira, Dubai */}
                <iframe
                  title="Fermium Designs Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.9856693!2d55.3284!3d25.2610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc5c1f3f8db%3A0x1234!2sAl+Babtain+Building%2C+Port+Saeed%2C+Deira%2C+Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Working hours */}
              <div className="bg-[#F5F7FA] rounded-2xl p-6 border border-[#e9ecef]">
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Working Hours</p>
                <div className="space-y-2">
                  {[
                    { days: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                    { days: "Saturday", hours: "9:00 AM – 2:00 PM" },
                    { days: "Sunday", hours: "Closed" },
                  ].map((row) => (
                    <div key={row.days} className="flex justify-between text-sm">
                      <span className="text-text-secondary">{row.days}</span>
                      <span className={`font-semibold ${row.hours === "Closed" ? "text-text-light" : "text-primary"}`}>
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <h2 className="text-3xl font-bold text-white">Prefer to Talk Directly?</h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Call or WhatsApp us and our team will assist you right away.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/971522543903"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-secondary transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+971522543903"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              052 254 3903
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
