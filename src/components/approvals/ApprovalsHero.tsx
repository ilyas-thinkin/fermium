"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";

export default function ApprovalsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end pb-20 pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
        {/* Blueprint grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,169,98,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,98,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
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
          Approvals & Compliance
        </motion.p>

        <TextReveal
          text="Navigating Dubai's Regulatory Landscape"
          className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-text-primary leading-tight mb-6"
          tag="h1"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-text-secondary max-w-xl"
        >
          Expert guidance through every regulatory requirement, ensuring your
          project moves forward without delays.
        </motion.p>
      </div>
    </section>
  );
}
