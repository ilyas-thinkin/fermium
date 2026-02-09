"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";

const team = [
  {
    name: "Ahmed Al Mahmoud",
    role: "Founder & CEO",
    bio: "With over 25 years of experience in Dubai's construction and design industry, Ahmed founded Fermium Designs with a vision to set new standards in interior fitout excellence.",
  },
  {
    name: "Sara Khan",
    role: "Head of Design",
    bio: "Sara brings a unique blend of architectural precision and artistic vision, having led design teams across luxury residential and hospitality projects throughout the GCC.",
  },
  {
    name: "James Mitchell",
    role: "Project Director",
    bio: "James oversees all project execution, ensuring every fitout is delivered on time, on budget, and beyond expectations. His engineering background ensures structural integrity in every design.",
  },
  {
    name: "Fatima Al-Rashidi",
    role: "Head of Approvals",
    bio: "Fatima's expertise in regulatory compliance and her relationships with Dubai Municipality and Civil Defense ensure smooth approvals for every project we undertake.",
  },
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeUp className="mb-16">
          <p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-4">
            Our Team
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary">
            The People Behind the Vision
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <FadeUp key={member.name} delay={i * 0.1}>
              <div
                className="group relative cursor-pointer"
                onClick={() =>
                  setSelectedMember(selectedMember === i ? null : i)
                }
              >
                {/* Image placeholder */}
                <div className="relative aspect-[3/4] bg-bg-secondary border border-border overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-primary/60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-text-light text-sm font-accent">
                      Portrait
                    </span>
                  </div>

                  {/* Grayscale to color effect placeholder */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />

                  {/* Hover overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-8 h-[2px] bg-accent mb-2" />
                  </div>
                </div>

                <h3 className="text-lg font-display font-bold text-text-primary group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-accent text-text-secondary mt-1">
                  {member.role}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bio Modal */}
        <AnimatePresence>
          {selectedMember !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-10 p-8 bg-white border border-border"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-accent mb-1">
                    {team[selectedMember].name}
                  </h3>
                  <p className="text-sm font-accent text-text-secondary mb-4">
                    {team[selectedMember].role}
                  </p>
                  <p className="text-text-secondary leading-relaxed max-w-2xl">
                    {team[selectedMember].bio}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-text-secondary hover:text-text-primary transition-colors flex-shrink-0"
                  aria-label="Close bio"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
