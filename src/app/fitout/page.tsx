import type { Metadata } from "next";
import FitoutHero from "@/components/fitout/FitoutHero";
import CapabilitiesGrid from "@/components/fitout/CapabilitiesGrid";
import CaseStudy from "@/components/fitout/CaseStudy";

export const metadata: Metadata = {
  title: "Interior Fitout",
  description:
    "Complete interior transformation for commercial offices, retail spaces, restaurants, residences, hospitality, and healthcare facilities in Dubai.",
};

export default function FitoutPage() {
  return (
    <>
      <FitoutHero />
      <CapabilitiesGrid />
      <CaseStudy />
    </>
  );
}
