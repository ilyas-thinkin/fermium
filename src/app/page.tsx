import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import BelowFoldSections from "@/components/home/BelowFoldSections";

const BASE_URL = "https://www.fermiumdesigns.ae";

export const metadata: Metadata = {
  title: "Fermium | Dubai Fitout approvals project management services",
  description:
    "Expert fitout approvals in Dubai for construction, renovation, and modification projects. Get fast authority permits & approvals in Dubai. DM, DCD, DDA, & more",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Fermium | Dubai Fitout approvals project management services",
    description:
      "Expert fitout approvals in Dubai for construction, renovation, and modification projects. Get fast authority permits & approvals in Dubai. DM, DCD, DDA, & more",
    url: BASE_URL,
    siteName: "Fermium Designs",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fermium | Dubai Fitout approvals project management services",
    description:
      "Expert fitout approvals in Dubai for construction, renovation, and modification projects. Get fast authority permits & approvals in Dubai. DM, DCD, DDA, & more",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#organization`,
      name: "Fermium Designs",
      url: BASE_URL,
      telephone: "+971522543903",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      description:
        "Expert fitout approvals in Dubai for construction, renovation, and modification projects. Get fast authority permits & approvals in Dubai.",
      areaServed: {
        "@type": "City",
        name: "Dubai",
      },
      serviceType: [
        "Fitout Approvals",
        "Authority Permits",
        "Project Management",
        "Structural Design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Fermium Designs",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Fermium | Dubai Fitout approvals project management services",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      description:
        "Expert fitout approvals in Dubai for construction, renovation, and modification projects. Get fast authority permits & approvals in Dubai. DM, DCD, DDA, & more",
    },
  ],
};

export default function Home() {
  return (
    <main>
      {/* Preload hero background images — hoisted to <head> by Next.js, making
          them discoverable in initial HTML before CSS/JS is parsed */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <link
        rel="preload"
        as="image"
        href="/Images/hero/interior-fitout.webp"
        // @ts-expect-error fetchpriority not yet in React types
        fetchpriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/Images/hero/corporate.webp"
        // @ts-expect-error fetchpriority not yet in React types
        fetchpriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <BelowFoldSections />
    </main>
  );
}
