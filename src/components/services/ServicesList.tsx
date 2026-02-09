"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";

const services = [
  {
    number: "01",
    title: "Interior Fitout",
    description:
      "Complete interior transformation and construction for commercial, residential, and hospitality spaces. We handle everything from demolition and structural work to final finishing and furnishing.",
    steps: [
      "Site assessment and feasibility study",
      "Design development and material selection",
      "Construction and installation",
      "Quality inspection and finishing",
      "Client walkthrough and handover",
    ],
    href: "/fitout",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "Turnkey solutions from concept to completion. Our integrated design-build approach ensures seamless coordination between design intent and construction execution.",
    steps: [
      "Concept development and space planning",
      "3D visualization and design approval",
      "Material procurement and scheduling",
      "On-site construction management",
      "Final commissioning and delivery",
    ],
    href: "/services",
  },
  {
    number: "03",
    title: "Project Management",
    description:
      "End-to-end coordination and execution of interior projects. Our project managers ensure timelines, budgets, and quality standards are maintained throughout.",
    steps: [
      "Project planning and scheduling",
      "Vendor and subcontractor coordination",
      "Budget management and reporting",
      "Quality control and site supervision",
      "Progress tracking and client updates",
    ],
    href: "/services",
  },
  {
    number: "04",
    title: "Custom Joinery",
    description:
      "Bespoke carpentry and millwork crafted to perfection. From reception desks to wall paneling, our joinery workshop produces pieces that define spaces.",
    steps: [
      "Design consultation and detailing",
      "Material selection (wood, laminate, veneer)",
      "Workshop fabrication",
      "On-site installation and fitting",
      "Final finishing and quality check",
    ],
    href: "/services",
  },
  {
    number: "05",
    title: "MEP Works",
    description:
      "Mechanical, electrical, and plumbing integration that works seamlessly with your interior design. We coordinate all MEP elements for optimal performance and aesthetics.",
    steps: [
      "MEP design coordination",
      "HVAC and air conditioning",
      "Electrical and lighting systems",
      "Plumbing and fire protection",
      "Testing and commissioning",
    ],
    href: "/services",
  },
  {
    number: "06",
    title: "Post-Completion Support",
    description:
      "Maintenance and warranty services to ensure your space continues to perform and look its best long after project completion.",
    steps: [
      "Defects liability period management",
      "Scheduled maintenance programs",
      "Emergency repair services",
      "Warranty coordination",
      "Space optimization consulting",
    ],
    href: "/services",
  },
];

export default function ServicesList() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="space-y-2">
          {services.map((service, i) => (
            <FadeUp key={service.number} delay={i * 0.05}>
              <div className="border border-border">
                {/* Header — clickable */}
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="group relative w-full flex items-center justify-between p-6 md:p-8 text-left overflow-hidden"
                >
                  {/* Gold fill on hover */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent transition-colors duration-500 -z-0" />

                  <div className="relative z-10 flex items-center gap-6">
                    <span className="text-sm font-accent font-semibold text-accent group-hover:text-white transition-colors">
                      {service.number}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-text-primary group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="relative z-10 flex items-center gap-4">
                    <span className="hidden md:inline text-sm text-text-secondary group-hover:text-white/70 transition-colors max-w-xs truncate">
                      {service.description.substring(0, 60)}...
                    </span>
                    <motion.svg
                      animate={{ rotate: expanded === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6 text-accent group-hover:text-white transition-colors flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </motion.svg>
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 border-t border-border">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-8">
                          <div>
                            <p className="text-text-secondary leading-relaxed mb-6">
                              {service.description}
                            </p>
                            <Link
                              href={service.href}
                              className="inline-flex items-center gap-2 text-sm font-accent font-semibold text-accent hover:text-accent-secondary transition-colors"
                            >
                              Learn More
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </Link>
                          </div>

                          <div>
                            <h4 className="text-sm font-accent font-semibold text-accent tracking-widest uppercase mb-4">
                              Process
                            </h4>
                            <ol className="space-y-3">
                              {service.steps.map((step, j) => (
                                <li
                                  key={j}
                                  className="flex items-start gap-3 text-sm text-text-secondary"
                                >
                                  <span className="text-accent font-accent font-semibold mt-0.5">
                                    {String(j + 1).padStart(2, "0")}
                                  </span>
                                  {step}
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>

                        {/* Image placeholders */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                          {[1, 2, 3].map((n) => (
                            <div
                              key={n}
                              className="aspect-video bg-white border border-border flex items-center justify-center"
                            >
                              <span className="text-text-light text-xs font-accent">
                                Gallery {n}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
