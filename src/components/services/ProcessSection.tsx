"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We start by understanding your vision, requirements, and budget. Our team conducts a thorough site assessment and feasibility study.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our design team creates detailed concepts, 3D visualizations, and material boards. We iterate until the design perfectly captures your vision.",
  },
  {
    number: "03",
    title: "Approvals",
    description: "We handle all regulatory approvals — Dubai Municipality, Civil Defense, DEWA, and any other required NOCs — with our 100% approval track record.",
  },
  {
    number: "04",
    title: "Execution",
    description: "Our construction team brings the design to life with precision. Weekly progress reports and quality checks keep you informed every step of the way.",
  },
  {
    number: "05",
    title: "Handover",
    description: "Final inspection, snagging, and a comprehensive walkthrough. We don't consider a project complete until you're completely satisfied.",
  },
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <FadeUp>
              <p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-4">
                How We Work
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
                Our Process
              </h2>
              <p className="text-text-secondary leading-relaxed">
                A proven five-step process refined over 25 years, ensuring every
                project is delivered with precision, on time, and on budget.
              </p>
            </FadeUp>
          </div>

          {/* Right — scrolling steps */}
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border">
              <motion.div
                style={{ height: progressHeight }}
                className="w-full bg-accent origin-top"
              />
            </div>

            <div className="space-y-16 pl-8">
              {steps.map((step, i) => (
                <FadeUp key={step.number} delay={i * 0.1}>
                  <div className="relative">
                    {/* Dot on line */}
                    <div className="absolute -left-8 top-1 w-3 h-3 rounded-full border-2 border-accent bg-bg-primary -translate-x-[5px]" />

                    <span className="text-xs font-accent font-semibold text-accent tracking-widest">
                      STEP {step.number}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-text-primary mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
