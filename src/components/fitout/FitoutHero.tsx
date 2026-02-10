"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";

export default function FitoutHero() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="relative min-h-[80vh] flex items-end pb-20 pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video bg-white border border-border overflow-hidden cursor-col-resize"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              setSliderPosition(Math.max(5, Math.min(95, x)));
            }}
          >
            {/* Before */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/20 to-bg-primary">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-text-light text-sm font-accent">Before</span>
              </div>
            </div>

            {/* After */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-accent/20 to-bg-primary"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-text-light text-sm font-accent">After</span>
              </div>
            </div>

            {/* Slider line */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-accent z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/80 text-xs font-accent text-text-secondary">
              Before
            </div>
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/80 text-xs font-accent text-text-secondary">
              After
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-6"
            >
              Interior Fitout
            </motion.p>

            <TextReveal
              text="Transforming Spaces, Elevating Experiences"
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight mb-6"
              tag="h1"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-text-secondary"
            >
              From concept to completion, we deliver world-class interior fitout
              solutions across every sector.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
