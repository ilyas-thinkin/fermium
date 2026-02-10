"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";

const filters = ["All", "Residential", "Commercial", "Hospitality"];
const projects = [
  {
    id: 1,
    title: "Marina Bay Penthouse",
    category: "Residential",
    size: "large",
    image: "/Images/Website/Apartment Interior/Apartment Interior 2.jpg",
  },
  {
    id: 2,
    title: "DIFC Office Tower",
    category: "Commercial",
    size: "medium",
    image: "/Images/Website/Corporate/Corporate 1.jpg",
  },
  {
    id: 3,
    title: "Palm Jumeirah Villa",
    category: "Residential",
    size: "medium",
    image: "/Images/Website/Villa Fitout/Villa Fitout 2.jpg",
  },
  {
    id: 4,
    title: "Downtown Restaurant",
    category: "Hospitality",
    size: "large",
    image: "/Images/Website/Restuarant Interior/Restuarant Interior 1.jpg",
  },
  {
    id: 5,
    title: "JBR Retail Space",
    category: "Commercial",
    size: "small",
    image: "/Images/Website/Retail Interior/Retail Interior 1.jpg",
  },
  {
    id: 6,
    title: "Business Bay Hotel Lobby",
    category: "Hospitality",
    size: "small",
    image: "/Images/Website/Cafe Interior/Cafe Interior 2.jpg",
  },
];

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <FadeUp><p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-4">Portfolio</p></FadeUp>
            <FadeUp delay={0.1}><h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary">Featured Projects</h2></FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <div className="flex gap-2 flex-wrap">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-xs font-accent font-semibold tracking-wide uppercase rounded-full transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-accent text-white shadow-[0_10px_20px_rgba(31,182,181,0.3)]"
                      : "text-text-secondary border border-border hover:text-primary hover:border-primary/30"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProjects.map((project, i) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className={`group relative overflow-hidden cursor-pointer rounded-2xl bg-white border border-border shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1 ${project.size === "large" ? "md:col-span-2 aspect-[16/9]" : project.size === "medium" ? "aspect-[4/3]" : "aspect-square"}`} data-cursor="View">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/30" />
                <div className="absolute inset-0 bg-bg-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs font-accent text-accent tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.category}</p>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.title}</h3>
                    <div className="w-0 group-hover:w-12 h-[2px] bg-accent mt-3 transition-all duration-500 delay-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
