"use client";

import { motion } from "framer-motion";

const testimonials = [
  { text: "Fermium Designs transformed our office into a space that truly reflects our brand identity.", author: "Ahmad Al-Rashid", role: "CEO, Nexus Group" },
  { text: "Their attention to detail and commitment to quality is unmatched in Dubai's fitout industry.", author: "Sarah Mitchell", role: "Director, Skyline Properties" },
  { text: "From concept to completion, Fermium delivered beyond our expectations. A truly professional team.", author: "Mohammed Hassan", role: "Owner, Palm Bay Restaurant" },
  { text: "The level of craftsmanship and precision in their work sets them apart from any competitor.", author: "Lisa Chen", role: "VP Operations, Azure Hotels" },
];

function TestimonialCard({ text, author, role }: (typeof testimonials)[0]) {
  return (
    <div className="flex-shrink-0 w-[85vw] sm:w-[500px] md:w-[600px] px-8 py-10 border border-border bg-white/90 rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
      <svg className="w-8 h-8 text-accent/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
      </svg>
      <p className="text-lg md:text-xl font-body text-primary leading-relaxed mb-6">&ldquo;{text}&rdquo;</p>
      <div>
        <p className="text-sm font-accent font-semibold text-accent">{author}</p>
        <p className="text-xs font-accent text-text-light mt-1">{role}</p>
      </div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  const doubled = [...testimonials, ...testimonials];
  return (
    <section className="py-24 md:py-32 bg-bg-secondary overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 mb-16">
        <p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-4">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">What Our Clients Say</h2>
      </div>
      <div className="relative">
        <motion.div animate={{ x: [0, -50 * testimonials.length + "%"] }} transition={{ x: { duration: 30, repeat: Infinity, ease: "linear" } }} className="flex gap-6">
          {doubled.map((t, i) => (<TestimonialCard key={i} {...t} />))}
        </motion.div>
      </div>
    </section>
  );
}
