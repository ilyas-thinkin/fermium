"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeUp from "@/components/animations/FadeUp";

const values = [
  {
    title: "Precision",
    description: "Every measurement, every material, every detail is executed with meticulous accuracy.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-12 h-12">
        <circle cx="24" cy="24" r="20" />
        <path d="M24 4v40M4 24h40M10 10l28 28M38 10L10 38" />
        <circle cx="24" cy="24" r="8" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We embrace cutting-edge materials, techniques, and technologies to push design boundaries.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-12 h-12">
        <path d="M24 4v8M24 36v8M4 24h8M36 24h8" />
        <path d="M10 10l6 6M32 32l6 6M38 10l-6 6M16 32l-6 6" />
        <circle cx="24" cy="24" r="10" />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    description: "We champion eco-conscious design and responsible material sourcing in every project.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-12 h-12">
        <path d="M24 44V20" />
        <path d="M24 20C24 12 16 4 8 4c0 8 4 16 16 16z" />
        <path d="M24 28C24 20 32 12 40 12c0 8-4 16-16 16z" />
      </svg>
    ),
  },
  {
    title: "Client-First",
    description: "Your vision drives everything we do. We listen, collaborate, and deliver beyond expectations.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-12 h-12">
        <path d="M24 44c-8-6-16-12-16-20a8 8 0 0116 0 8 8 0 0116 0c0 8-8 14-16 20z" />
      </svg>
    ),
  },
];

function ValueCard({ value, index }: { value: (typeof values)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group p-8 bg-card border border-border hover:border-accent/20 transition-all duration-500"
    >
      <motion.div
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.5, delay: index * 0.15 + 0.3 }}
        className="text-accent mb-6"
      >
        {value.icon}
      </motion.div>
      <h3 className="text-xl font-display font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
        {value.title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed">
        {value.description}
      </p>
    </motion.div>
  );
}

export default function ValuesSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeUp className="text-center mb-16">
          <p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-4">
            Our Values
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary">
            What Drives Us
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <ValueCard key={value.title} value={value} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
