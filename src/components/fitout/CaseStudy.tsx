"use client";

import FadeUp from "@/components/animations/FadeUp";
import TextReveal from "@/components/animations/TextReveal";

export default function CaseStudy() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeUp>
          <p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-4">
            Case Study
          </p>
        </FadeUp>

        <TextReveal
          text="Marina Bay Executive Offices"
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-16"
          tag="h2"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {[
            {
              label: "Challenge",
              text: "Transform a dated 5,000 sq ft commercial space into a modern executive office that reflects the client's global brand identity while meeting Dubai Municipality requirements.",
            },
            {
              label: "Solution",
              text: "Our team designed a contemporary workspace featuring custom joinery, integrated smart systems, and a material palette of marble, bronze, and warm woods that balance sophistication with warmth.",
            },
            {
              label: "Result",
              text: "Delivered on time and 5% under budget. The space has since been featured in regional design publications and has become a benchmark for the client's office standards globally.",
            },
          ].map((item, i) => (
            <FadeUp key={item.label} delay={i * 0.15}>
              <div className="border-t border-accent/30 pt-6">
                <h3 className="text-sm font-accent font-semibold text-accent tracking-widest uppercase mb-4">
                  {item.label}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Gallery placeholder */}
        <div className="mt-16 flex gap-4 overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className="flex-shrink-0 w-[300px] md:w-[400px] aspect-video bg-white border border-border flex items-center justify-center"
            >
              <span className="text-text-light text-sm font-accent">
                Case Study Image {n}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
