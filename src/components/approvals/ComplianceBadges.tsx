"use client";

import FadeUp from "@/components/animations/FadeUp";

const badges = [
  { label: "100% Approval Rate", value: "100%" },
  { label: "Years DM Experience", value: "15+" },
  { label: "Approvals Processed", value: "500+" },
  { label: "Average Turnaround", value: "2 Wks" },
];

export default function ComplianceBadges() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeUp className="text-center mb-16">
          <p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-4">
            Track Record
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
            Proven Compliance Excellence
          </h2>
        </FadeUp>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <FadeUp key={badge.label} delay={i * 0.1}>
              <div className="text-center p-8 border border-accent/20 bg-accent/[0.03]">
                <span className="text-4xl md:text-5xl font-accent font-bold text-accent">
                  {badge.value}
                </span>
                <p className="text-sm font-accent text-text-secondary mt-3 tracking-wide uppercase">
                  {badge.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
