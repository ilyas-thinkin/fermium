import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Timeline from "@/components/about/Timeline";
import TeamSection from "@/components/about/TeamSection";
import ValuesSection from "@/components/about/ValuesSection";
import CertificationsSection from "@/components/about/CertificationsSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Over 25 years of excellence in Dubai's interior design and fitout industry. Learn about our story, team, and values.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <TeamSection />
      <ValuesSection />
      <CertificationsSection />
    </>
  );
}
