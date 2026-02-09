import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import PhilosophySection from "@/components/home/PhilosophySection";
import ServicesScroll from "@/components/home/ServicesScroll";
import ProjectsGrid from "@/components/home/ProjectsGrid";
import TestimonialsMarquee from "@/components/home/TestimonialsMarquee";
import BlogPreview from "@/components/home/BlogPreview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <PhilosophySection />
      <ServicesScroll />
      <ProjectsGrid />
      <TestimonialsMarquee />
      <BlogPreview />
    </>
  );
}
