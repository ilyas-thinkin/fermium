import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import BelowFoldSections from "@/components/home/BelowFoldSections";
import { SITE_URL, absoluteUrl, buildAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Fitout Approvals Dubai | Authority Approvals & Project Management",
  description:
    "Fitout approvals Dubai specialists for authority approvals, interior fitout, and project management.",
  alternates: buildAlternates("/"),
  openGraph: {
    title: "Fitout Approvals Dubai | Authority Approvals & Project Management",
    description:
      "Fitout approvals Dubai specialists for authority approvals, interior fitout, and project management.",
    url: SITE_URL,
    siteName: "Fermium Designs",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: absoluteUrl("/Images/hero/corporate.webp"),
        width: 1200,
        height: 630,
        alt: "Fitout approvals Dubai by Fermium Designs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitout Approvals Dubai | Authority Approvals & Project Management",
    description:
      "Fitout approvals Dubai specialists for authority approvals, interior fitout, and project management.",
    images: [absoluteUrl("/Images/hero/corporate.webp")],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Fermium Designs",
      url: `${SITE_URL}/`,
      telephone: "+971522543903",
      email: "info@fermiumdesigns.ae",
      priceRange: "$$",
      image: {
        "@type": "ImageObject",
        url: absoluteUrl("/Images/hero/corporate.webp"),
        width: 1200,
        height: 630,
      },
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo/logo.webp"),
        width: 180,
        height: 40,
      },
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
        "Expert fitout approvals in Dubai for construction and renovation projects. Fast authority permits - DM, DCD, DDA, DEWA and more.",
      areaServed: {
        "@type": "City",
        name: "Dubai",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        "https://maps.app.goo.gl/TF9RHGfP3QQrpZaF7",
        "https://www.instagram.com/all_dubai_authority_approvals/",
        "https://www.linkedin.com/company/fermium-designs/",
        "https://www.facebook.com/FermiumDesigns",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Fermium Designs",
      publisher: { "@id": `${SITE_URL}/#localbusiness` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: "Fitout Approvals Dubai | Authority Approvals & Project Management",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#localbusiness` },
      description:
        "Fitout approvals Dubai specialists for authority approvals, interior fitout coordination, and project management.",
      inLanguage: "en-AE",
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
