"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";

const offerings = [
  {
    title: "Office Design & 3D Visualization",
    description: "Workplace concepts, layouts, and photorealistic renders for confident decisions.",
    image: "/Images/Website/Office Fitout/Office Fitout 2.jpg",
  },
  {
    title: "Luxury Villa Fit-Outs",
    description: "High-end residential transformations with refined materials and detailing.",
    image: "/Images/Website/Villa Fitout/Villa Fitout 1.jpg",
  },
  {
    title: "Structural Drawings",
    description: "Engineering-ready documentation for precise site execution.",
    image: "/Images/Website/Warehouse interior fit out/Warehouse interior fit out 2.jpg",
  },
  {
    title: "Autocad Detailing",
    description: "Accurate CAD packages that align consultants and contractors.",
    image: "/Images/Website/Corporate/Corporate 2.jpg",
  },
  {
    title: "Clinic Fit-Outs",
    description: "Healthcare environments designed for flow, comfort, and compliance.",
    image: "/Images/Website/Clinic Fitout/Clinic Fitout 1.jpg",
  },
  {
    title: "Custom Joinery & Furniture",
    description: "Bespoke fabrication that elevates the craft of every space.",
    image: "/Images/Website/Custom Furniture/Custom Furniture 1.jpg",
  },
];

function OfferingIcon() {
  return (
    <div className="w-10 h-10 rounded-xl border border-border bg-white flex items-center justify-center text-accent">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 6h6v6H4zM14 4h6v6h-6zM14 14h6v6h-6zM4 14h6v6H4z" />
      </svg>
    </div>
  );
}

export default function OfferingsSection() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeUp className="mb-10">
          <p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-3">
            What Fermium Designs Offers
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary">
            Transcending Creative Styles
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.06}>
              <Link
                href="/services"
                className="group block h-full md:aspect-square bg-white border border-border rounded-3xl overflow-hidden shadow-[0_14px_35px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A45]/25 to-transparent" />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-display font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-5">
                    {item.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <OfferingIcon />
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shadow-[0_10px_20px_rgba(31,182,181,0.3)] group-hover:-translate-y-0.5 transition-transform">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
