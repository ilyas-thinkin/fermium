"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";

export default function StructuralsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end pb-20 pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent" />
        {/* Structural wireframe pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(30deg, rgba(201,169,98,0.2) 1px, transparent 1px), linear-gradient(150deg, rgba(201,169,98,0.2) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-6"
        >
          Structural Works
        </motion.p>

        <TextReveal
          text="Engineering the Foundation of Great Design"
          className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-text-primary leading-tight mb-6"
          tag="h1"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-text-secondary max-w-xl"
        >
          Where engineering precision meets architectural ambition. Our
          structural team ensures every design vision stands on solid ground.
        </motion.p>
      </div>
    </section>
  );
}
