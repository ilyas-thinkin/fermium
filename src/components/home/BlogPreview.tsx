"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";

const posts = [
  {
    id: 1,
    title: "The Future of Sustainable Interior Design in Dubai",
    category: "Design Trends",
    excerpt: "How eco-conscious materials and practices are reshaping luxury interiors in the UAE.",
    date: "Jan 2025",
    readTime: "5 min read",
    featured: true,
    image: "/Images/Website/Jewellery/Jewellery 1.jpg",
  },
  {
    id: 2,
    title: "Navigating DM Approvals: A Complete Guide",
    category: "Industry Insights",
    excerpt: "Everything you need to know about Dubai Municipality approval processes for fitout projects.",
    date: "Dec 2024",
    readTime: "8 min read",
    featured: false,
    image: "/Images/Website/Beauty/Beauty 1.jpg",
  },
  {
    id: 3,
    title: "Commercial Fitout Trends for 2025",
    category: "Design Trends",
    excerpt: "The latest workspace design innovations driving productivity and employee wellbeing.",
    date: "Nov 2024",
    readTime: "6 min read",
    featured: false,
    image: "/Images/Website/Mep Companies/Mep Companies 2.jpg",
  },
];

export default function BlogPreview() {
  const featured = posts.find((p) => p.featured);
  const others = posts.filter((p) => !p.featured);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <FadeUp><p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-4">Insights</p></FadeUp>
            <FadeUp delay={0.1}><h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Latest from Our Blog</h2></FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link href="/blog" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-accent font-semibold text-primary border border-primary/20 rounded-full hover:bg-primary hover:text-white transition-all duration-300 group">
              View All Articles
              <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featured && (
            <FadeUp className="lg:row-span-2">
              <Link href={`/blog/${featured.id}`} className="group block relative h-full min-h-[320px] md:min-h-[400px] bg-white/90 border border-border rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]" data-cursor="Read">
                <Image src={featured.image} alt={featured.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/30" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                  <span className="inline-block px-3 py-1 text-xs font-accent font-semibold text-accent bg-accent-soft rounded-full w-fit mb-4">{featured.category}</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">{featured.title}</h3>
                  <p className="text-text-secondary mb-4 max-w-md">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs font-accent text-text-light"><span>{featured.date}</span><span className="w-1 h-1 rounded-full bg-text-light" /><span>{featured.readTime}</span></div>
                </div>
              </Link>
            </FadeUp>
          )}
          {others.map((post, i) => (
            <FadeUp key={post.id} delay={0.1 * (i + 1)}>
              <Link href={`/blog/${post.id}`} className="group block overflow-hidden bg-white border border-border rounded-2xl hover:border-accent/30 hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all" data-cursor="Read">
                <div className="relative h-40">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-accent font-semibold text-accent bg-accent-soft w-fit mb-4 rounded-full">{post.category}</span>
                  <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
                  <p className="text-sm text-text-secondary mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs font-accent text-text-light"><span>{post.date}</span><span className="w-1 h-1 rounded-full bg-text-light" /><span>{post.readTime}</span></div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
