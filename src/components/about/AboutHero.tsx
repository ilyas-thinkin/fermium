"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-end pb-20 pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Left — Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[3/4] bg-white border border-border overflow-hidden hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-text-light text-sm font-accent">Team Photo</span>
            </div>
          </motion.div>

          {/* Right — Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-6"
            >
              About Fermium Designs
            </motion.p>

            <TextReveal
              text="Building Dubai's Future, One Space at a Time"
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight mb-8"
              tag="h1"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-text-secondary leading-relaxed max-w-lg"
            >
              Since 1999, we&apos;ve been at the forefront of Dubai&apos;s interior
              design and fitout industry, transforming visions into exceptional
              spaces that inspire and endure.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
