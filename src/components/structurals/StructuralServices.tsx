"use client";

import FadeUp from "@/components/animations/FadeUp";

const services = [
  {
    title: "Structural Modifications",
    description: "Wall removals, openings, reinforcements, and load-bearing alterations executed with precision engineering and full regulatory compliance.",
  },
  {
    title: "False Ceiling & Partitioning",
    description: "Gypsum board, mineral fiber, metal, and specialty ceiling systems. Glass, drywall, and solid partitioning solutions for any space.",
  },
  {
    title: "Flooring Solutions",
    description: "From raised access floors to decorative finishes — marble, porcelain, vinyl, epoxy, and hardwood installations with precision leveling.",
  },
  {
    title: "Wall Treatments",
    description: "Cladding, paneling, wallcoverings, and specialty finishes. We work with stone, wood, fabric, metal, and custom materials.",
  },
  {
    title: "MEP Integration",
    description: "Seamless coordination of mechanical, electrical, and plumbing systems within structural frameworks for optimal performance and aesthetics.",
  },
];

export default function StructuralServices() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeUp className="mb-16">
          <p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-4">
            Our Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary">
            Structural Services
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeUp key={service.title} delay={i * 0.1}>
              <div className="group p-8 h-full bg-white border border-border hover:border-accent/20 transition-all duration-500">
                <span className="text-xs font-accent font-semibold text-accent tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-display font-bold text-text-primary mt-3 mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
