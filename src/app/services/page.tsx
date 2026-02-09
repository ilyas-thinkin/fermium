import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ProcessSection from "@/components/services/ProcessSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive fitout solutions — interior fitout, design & build, project management, custom joinery, MEP works, and post-completion support.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
    </>
  );
}
