import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import BelowFoldSections from "@/components/home/BelowFoldSections";

const BASE_URL = "https://www.fermiumdesigns.ae";

export const metadata: Metadata = {
  title: "Fermium | Dubai Fitout approvals project management services",
  description:
    "Expert fitout approvals in Dubai for construction & renovation projects. Fast authority permits — DM, DCD, DDA, DEWA & more.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Fermium | Dubai Fitout approvals project management services",
    description:
      "Expert fitout approvals in Dubai for construction & renovation projects. Fast authority permits — DM, DCD, DDA, DEWA & more.",
    url: BASE_URL,
    siteName: "Fermium Designs",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fermium | Dubai Fitout approvals project management services",
    description:
      "Expert fitout approvals in Dubai for construction & renovation projects. Fast authority permits — DM, DCD, DDA, DEWA & more.",
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
      email: "info@fermiumdesigns.ae",
      image: `${BASE_URL}/logo/logo.webp`,
      logo: `${BASE_URL}/logo/logo.webp`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Al Babtain Building, Office 302, Port Saeed",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.260651,
        longitude: 55.328215,
      },
      description:
        "Expert fitout approvals in Dubai for construction & renovation projects. Fast authority permits — DM, DCD, DDA, DEWA & more.",
      areaServed: {
        "@type": "City",
        name: "Dubai",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday","Monday","Tuesday","Wednesday","Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
      sameAs: [
        "https://www.instagram.com/all_dubai_authority_approvals/",
        "https://www.linkedin.com/company/fermium-designs/",
        "https://www.facebook.com/FermiumDesigns",
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
        "Expert fitout approvals in Dubai for construction & renovation projects. Fast authority permits — DM, DCD, DDA, DEWA & more.",
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <BelowFoldSections />
    </main>
  );
}
