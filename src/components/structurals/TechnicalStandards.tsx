"use client";

import FadeUp from "@/components/animations/FadeUp";

const standards = [
  { code: "BS EN", description: "British & European Standards" },
  { code: "ASTM", description: "American Society for Testing and Materials" },
  { code: "DM Code", description: "Dubai Municipality Building Code" },
  { code: "IBC", description: "International Building Code" },
  { code: "NFPA", description: "National Fire Protection Association" },
  { code: "ASHRAE", description: "Heating, Ventilation & AC Standards" },
];

export default function TechnicalStandards() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeUp className="text-center mb-16">
          <p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-4">
            Compliance
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
            International Standards
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            All our structural work complies with international standards and
            local Dubai building codes.
          </p>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {standards.map((standard, i) => (
            <FadeUp key={standard.code} delay={i * 0.08}>
              <div className="group text-center p-6 border border-border hover:border-accent/20 transition-all duration-300">
                <span className="text-2xl font-accent font-bold text-primary group-hover:text-accent transition-colors">
                  {standard.code}
                </span>
                <p className="text-xs text-text-secondary mt-2 leading-tight">
                  {standard.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
