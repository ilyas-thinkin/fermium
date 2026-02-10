"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";

const categories = ["All", "Design Trends", "Project Stories", "Industry Insights", "Sustainability"];

const posts = [
  {
    id: 1,
    title: "The Future of Sustainable Interior Design in Dubai",
    category: "Sustainability",
    excerpt: "How eco-conscious materials and practices are reshaping luxury interiors in the UAE.",
    date: "Jan 2025",
    readTime: "5 min",
    featured: true,
  },
  {
    id: 2,
    title: "Navigating DM Approvals: A Complete Guide",
    category: "Industry Insights",
    excerpt: "Everything you need to know about Dubai Municipality approval processes for fitout projects.",
    date: "Dec 2024",
    readTime: "8 min",
    featured: false,
  },
  {
    id: 3,
    title: "Commercial Fitout Trends for 2025",
    category: "Design Trends",
    excerpt: "The latest workspace design innovations driving productivity and employee wellbeing.",
    date: "Nov 2024",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 4,
    title: "Behind the Build: Palm Jumeirah Villa Transformation",
    category: "Project Stories",
    excerpt: "An inside look at the challenges and triumphs of transforming a 10,000 sq ft waterfront villa.",
    date: "Oct 2024",
    readTime: "7 min",
    featured: false,
  },
  {
    id: 5,
    title: "Biophilic Design: Bringing Nature Indoors",
    category: "Design Trends",
    excerpt: "The science and art of incorporating natural elements into interior spaces for health and wellbeing.",
    date: "Sep 2024",
    readTime: "5 min",
    featured: false,
  },
  {
    id: 6,
    title: "The Rise of Smart Offices in the Middle East",
    category: "Industry Insights",
    excerpt: "How IoT and smart systems are revolutionizing commercial interiors across the GCC region.",
    date: "Aug 2024",
    readTime: "6 min",
    featured: false,
  },
];

export default function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? posts
      : posts.filter((p) => p.category === activeFilter);

  return (
    <section className="pb-24 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Filter pills */}
        <FadeUp className="mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm font-accent font-medium rounded-full transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-accent text-white"
                    : "text-text-secondary border border-border hover:border-primary/20 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={post.featured ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <Link
                  href={`/blog/${post.id}`}
                  className="group block h-full bg-white border border-border hover:border-accent/20 transition-all duration-300 overflow-hidden"
                  data-cursor="Read"
                >
                  {/* Image placeholder */}
                  <div
                    className={`relative bg-gradient-to-br from-accent/10 to-transparent ${
                      post.featured ? "aspect-[21/9]" : "aspect-video"
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-text-light text-sm font-accent">
                        Blog Image
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-accent font-semibold bg-accent-soft text-accent rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-display font-bold text-primary group-hover:text-accent transition-colors mb-3">
                      {post.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-accent text-text-secondary">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-text-secondary" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
