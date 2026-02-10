"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeUp from "@/components/animations/FadeUp";

const milestones = [
  {
    year: "1999",
    title: "Founded",
    description:
      "Fermium Designs established in Dubai with a vision to redefine interior fitout standards in the UAE.",
  },
  {
    year: "2005",
    title: "Major Expansion",
    description:
      "Expanded operations to serve commercial, residential, and hospitality sectors across the Emirates.",
  },
  {
    year: "2010",
    title: "DM Approval",
    description:
      "Received Dubai Municipality approval as a certified contractor, cementing our credibility in the market.",
  },
  {
    year: "2020",
    title: "Sustainability Focus",
    description:
      "Adopted sustainable design practices and green building materials across all projects.",
  },
  {
    year: "2025",
    title: "25 Years of Excellence",
    description:
      "Celebrating 150+ projects delivered with 100% client satisfaction and a growing portfolio of landmark transformations.",
  },
];

function MilestoneItem({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-8 ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`flex-1 ${isLeft ? "lg:text-right" : "lg:text-left"}`}
      >
        <span className="text-5xl md:text-6xl font-accent font-bold text-black/[0.03]">
          {milestone.year}
        </span>
        <h3 className="text-xl font-display font-bold text-primary mt-2 mb-3">
          {milestone.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed max-w-sm inline-block">
          {milestone.description}
        </p>
      </motion.div>

      {/* Center dot */}
      <div className="hidden lg:flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-4 h-4 rounded-full bg-accent border-4 border-bg-primary"
        />
      </div>

      {/* Spacer for other side */}
      <div className="hidden lg:block flex-1" />
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeUp className="text-center mb-20">
          <p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-4">
            Our Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
            25 Years of Excellence
          </h2>
        </FadeUp>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border -translate-x-1/2" />

          <div className="space-y-16 lg:space-y-24">
            {milestones.map((milestone, i) => (
              <MilestoneItem key={milestone.year} milestone={milestone} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
