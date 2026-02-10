"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const heroImages = [
  "/Images/hero/interior-fitout.jpg",
  "/Images/hero/corporate.jpg",
  "/Images/hero/office-fitout.jpg",
  "/Images/hero/villa-fitout.jpg",
  "/Images/hero/restaurant-interior.jpg",
  "/Images/hero/cafe-interior.jpg",
  "/Images/hero/apartment-interior.jpg",
  "/Images/hero/beauty.jpg",
  "/Images/hero/jewellery.jpg",
  "/Images/hero/retail-interior.jpg",
  "/Images/hero/clinic-fitout.jpg",
  "/Images/hero/warehouse-fitout.jpg",
  "/Images/hero/custom-furniture.jpg",
  "/Images/hero/mep-companies.jpg",
];

function getRandomHero() {
  return heroImages[Math.floor(Math.random() * heroImages.length)];
}

export default function HeroSection() {
  const ref = useRef(null);
  const heroImage = useRef(getRandomHero()).current;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.75], [1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 0.75], [0, 40]);

  const wordVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3 + i * 0.15,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section ref={ref} className="relative h-[100svh] flex items-center overflow-hidden pt-24 md:pt-28 pb-10">
      <div className="absolute inset-0" suppressHydrationWarning>
        <Image src={heroImage} alt="" fill priority className="object-cover" suppressHydrationWarning />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A45]/70 via-[#16245C]/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(31,182,181,0.15),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.15),transparent_50%)]" />
      </div>

      <motion.div style={{ opacity, scale, y }} className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 w-full">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-accent font-semibold tracking-[0.35em] uppercase text-white/80 border border-white/30 rounded-full mb-6">
            Luxury Fitout & Design
          </div>

          <div className="mb-6">
            {["CRAFTING", "EXCEPTIONAL", "SPACES"].map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.h1
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`text-4xl sm:text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight ${
                    i === 1 ? "font-display italic text-white/90" : "font-accent text-white"
                  }`}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.div variants={lineVariants} initial="hidden" animate="visible" className="accent-line w-full max-w-sm origin-left mb-6" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-white/80 text-base md:text-lg max-w-lg font-body mb-8"
          >
            Where Vision Meets Precision. Every Detail is a Promise.
            <br />
            <span className="text-white/60">Dubai&apos;s Premier Interior Fitout Agency.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.4 }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-accent font-semibold text-white bg-accent rounded-full shadow-[0_10px_22px_rgba(31,182,181,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-secondary hover:shadow-[0_16px_30px_rgba(31,182,181,0.45)]"
            >
              Explore Our Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <span className="text-xs font-accent text-text-light tracking-widest uppercase">Scroll to discover</span>
        <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} className="w-8 h-[1px] bg-gradient-to-r from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
