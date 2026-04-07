import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Structural Solutions in Dubai | Structural Design by Expert Engineers",
  description:
    "Professional structural solutions in Dubai for civil engineering companies and construction companies. Expert structural design and structural engineer support for safe, efficient, and compliant projects.",
};

export default function StructuralLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
