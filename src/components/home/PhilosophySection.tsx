"use client";

import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import TextReveal from "@/components/animations/TextReveal";

export default function PhilosophySection() {
  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <FadeUp className="relative">
            <div className="relative aspect-[4/3] max-h-[360px] md:max-h-[420px] bg-white border border-border rounded-3xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.08)] mx-auto lg:mx-0">
              <Image
                src="/Images/Website/Apartment Interior/Apartment Interior 1.jpg"
                alt="Fermium team workspace"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent" />
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-accent" />
                <div className="absolute top-0 left-0 h-full w-[1px] bg-accent" />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <div className="absolute bottom-0 right-0 w-full h-[1px] bg-accent" />
                <div className="absolute bottom-0 right-0 h-full w-[1px] bg-accent" />
              </div>
            </div>
          </FadeUp>

          <div>
            <FadeUp><p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-4">Our Philosophy</p></FadeUp>
            <TextReveal text="Every space tells a story. We help you write yours." className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary leading-tight mb-6" tag="h2" />
            <FadeUp delay={0.2}><p className="text-text-secondary text-base md:text-lg leading-relaxed mb-5">With over 25 years of experience in Dubai&apos;s interior design and fitout industry, Fermium Designs transforms ordinary spaces into extraordinary environments. We combine precision engineering with artistic vision to deliver projects that exceed expectations.</p></FadeUp>
            <FadeUp delay={0.3}><p className="text-text-secondary leading-relaxed mb-8">From initial concept through to final handover, our team of architects, designers, and craftsmen work in harmony to ensure every detail reflects our commitment to excellence.</p></FadeUp>
            <FadeUp delay={0.4}>
              <a href="/about" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-accent font-semibold text-primary border border-primary/20 rounded-full hover:bg-primary hover:text-white transition-all duration-300 group">
                Learn More About Us
                <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
