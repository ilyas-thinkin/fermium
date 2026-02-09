import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Design trends, project stories, industry insights, and sustainability — from Dubai's interior design experts.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
    </>
  );
}
