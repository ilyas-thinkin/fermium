"use client";

import FadeUp from "@/components/animations/FadeUp";

const certifications = [
  "Dubai Municipality",
  "Civil Defense",
  "DEWA",
  "Trakhees",
  "LEED",
  "ISO 9001",
];

export default function CertificationsSection() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeUp className="text-center mb-16">
          <p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-4">
            Certifications & Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
            Trusted & Certified
          </h2>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, i) => (
            <FadeUp key={cert} delay={i * 0.08}>
              <div className="group flex items-center justify-center h-24 bg-white border border-border hover:border-accent/20 transition-all duration-300">
                <span className="text-sm font-accent font-medium text-text-secondary group-hover:text-accent transition-colors">
                  {cert}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
