"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import FadeUp from "@/components/animations/FadeUp";
import MagneticButton from "@/components/ui/MagneticButton";

const projectTypes = [
  { value: "", label: "Select Project Type" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "hospitality", label: "Hospitality" },
  { value: "other", label: "Other" },
];

const budgetRanges = [
  { value: "", label: "Select Budget Range" },
  { value: "under-500k", label: "Under AED 500K" },
  { value: "500k-1m", label: "AED 500K - 1M" },
  { value: "1m-5m", label: "AED 1M - 5M" },
  { value: "above-5m", label: "Above AED 5M" },
];

export default function ContactHero() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend
    setIsSubmitted(true);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24">
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Form */}
          <FadeUp>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-2">
                  Get in Touch
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
                  Tell Us About Your Project
                </h2>

                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-border focus:border-accent py-4 text-text-primary outline-none transition-colors placeholder-transparent"
                  />
                  <label className="absolute top-4 left-0 text-text-secondary text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">
                    Full Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-border focus:border-accent py-4 text-text-primary outline-none transition-colors placeholder-transparent"
                  />
                  <label className="absolute top-4 left-0 text-text-secondary text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">
                    Email Address
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-border focus:border-accent py-4 text-text-primary outline-none transition-colors placeholder-transparent"
                  />
                  <label className="absolute top-4 left-0 text-text-secondary text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">
                    Phone Number
                  </label>
                </div>

                {/* Project Type */}
                <div>
                  <select
                    name="projectType"
                    value={formState.projectType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border focus:border-accent py-4 text-text-secondary outline-none transition-colors appearance-none cursor-pointer"
                  >
                    {projectTypes.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-white text-text-primary">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <select
                    name="budget"
                    value={formState.budget}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border focus:border-accent py-4 text-text-secondary outline-none transition-colors appearance-none cursor-pointer"
                  >
                    {budgetRanges.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-white text-text-primary">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-border focus:border-accent py-4 text-text-primary outline-none transition-colors resize-none placeholder-transparent"
                  />
                  <label className="absolute top-4 left-0 text-text-secondary text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">
                    Tell Us About Your Vision
                  </label>
                </div>

                {/* Submit */}
                <MagneticButton>
                  <button
                    type="submit"
                    className="w-full py-5 bg-accent text-white font-accent font-semibold text-sm tracking-wider uppercase hover:bg-accent-secondary rounded-full shadow-[0_10px_22px_rgba(31,182,181,0.3)] transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </MagneticButton>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-3">
                  Message Sent!
                </h3>
                <p className="text-text-secondary">
                  Thank you for reaching out. Our team will be in touch within 24 hours.
                </p>
              </motion.div>
            )}
          </FadeUp>

          {/* Right — Info */}
          <div className="lg:pt-20">
            <TextReveal
              text="Let's Create Something Exceptional"
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary leading-tight mb-12"
              tag="h1"
            />

            <div className="space-y-10">
              <FadeUp delay={0.2}>
                <h4 className="text-sm font-accent font-semibold text-accent tracking-widest uppercase mb-3">
                  Visit Us
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  Fermium Designs Office
                  <br />
                  Dubai, United Arab Emirates
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-secondary transition-colors mt-2"
                >
                  Get Directions
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </FadeUp>

              <FadeUp delay={0.3}>
                <h4 className="text-sm font-accent font-semibold text-accent tracking-widest uppercase mb-3">
                  Call Us
                </h4>
                <a
                  href="tel:+971000000000"
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  +971 00 000 0000
                </a>
              </FadeUp>

              <FadeUp delay={0.4}>
                <h4 className="text-sm font-accent font-semibold text-accent tracking-widest uppercase mb-3">
                  Email Us
                </h4>
                <a
                  href="mailto:info@fermiumdesigns.com"
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  info@fermiumdesigns.com
                </a>
              </FadeUp>

              <FadeUp delay={0.5}>
                <h4 className="text-sm font-accent font-semibold text-accent tracking-widest uppercase mb-3">
                  Business Hours
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Sunday - Thursday: 9:00 AM - 6:00 PM
                  <br />
                  Friday - Saturday: Closed
                </p>
              </FadeUp>
            </div>

            {/* Map placeholder */}
            <FadeUp delay={0.6} className="mt-12">
              <div className="aspect-video bg-white border border-border flex items-center justify-center">
                <span className="text-text-light text-sm font-accent">
                  Map Embed
                </span>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/971000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </section>
  );
}
