import type { Metadata } from "next";
import StructuralsHero from "@/components/structurals/StructuralsHero";
import StructuralServices from "@/components/structurals/StructuralServices";
import TechnicalStandards from "@/components/structurals/TechnicalStandards";

export const metadata: Metadata = {
  title: "Structural Works",
  description:
    "Engineering excellence in structural modifications, false ceilings, partitioning, flooring, wall treatments, and MEP integration.",
};

export default function StructuralsPage() {
  return (
    <>
      <StructuralsHero />
      <StructuralServices />
      <TechnicalStandards />
    </>
  );
}
