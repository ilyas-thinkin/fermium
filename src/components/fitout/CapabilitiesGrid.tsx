"use client";

import FadeUp from "@/components/animations/FadeUp";

const capabilities = [
  { title: "Commercial Offices", size: "large" },
  { title: "Retail Spaces", size: "medium" },
  { title: "Restaurants", size: "medium" },
  { title: "Residential", size: "large" },
  { title: "Hospitality", size: "small" },
  { title: "Healthcare", size: "small" },
];

export default function CapabilitiesGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeUp className="mb-16">
          <p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-4">
            Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary">
            Sectors We Serve
          </h2>
        </FadeUp>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {capabilities.map((cap, i) => (
            <FadeUp
              key={cap.title}
              delay={i * 0.08}
              className={`${
                cap.size === "large"
                  ? "lg:col-span-2 lg:row-span-2"
                  : cap.size === "medium"
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              <div
                className="group relative w-full h-full bg-white border border-border hover:border-accent/20 transition-all duration-500 overflow-hidden cursor-pointer"
                data-cursor="View"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <h3
                      className={`font-display font-bold text-text-primary group-hover:text-accent transition-colors ${
                        cap.size === "large" ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                      }`}
                    >
                      {cap.title}
                    </h3>
                    <div className="w-0 group-hover:w-12 h-[2px] bg-accent mt-4 mx-auto transition-all duration-500" />
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
