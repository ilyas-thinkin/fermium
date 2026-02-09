"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface StatItemProps { value: number; suffix: string; label: string; inView: boolean; }

function StatItem({ value, suffix, label, inView }: StatItemProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div className="flex flex-col items-center text-center px-6 py-8">
      <span className="text-4xl md:text-5xl font-accent font-bold text-text-primary">
        {count}<span className="text-accent">{suffix}</span>
      </span>
      <span className="mt-2 text-sm font-accent text-text-secondary tracking-wide uppercase">{label}</span>
    </div>
  );
}

const stats = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 1, suffix: "", label: "DM Approved Contractor" },
];

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section ref={ref} className="relative py-10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white/80 border border-border rounded-3xl p-2 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl">
              <StatItem {...stat} inView={isInView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
