"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";

export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-6"
        >
          Blog & Insights
        </motion.p>

        <TextReveal
          text="Design Thinking, Industry Insights"
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary leading-tight mb-6"
          tag="h1"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-text-secondary max-w-xl"
        >
          Expert perspectives on design trends, project stories, and the
          evolving landscape of interior fitout in Dubai.
        </motion.p>
      </div>
    </section>
  );
}
