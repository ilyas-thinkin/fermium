"use client";

import dynamic from "next/dynamic";

const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "400px" }} />,
});
const AboutSection = dynamic(() => import("@/components/home/AboutSection"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "400px" }} />,
});
const ServiceShowcase = dynamic(() => import("@/components/home/ServiceShowcase"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "500px" }} />,
});
const LogoSlider = dynamic(() => import("@/components/home/LogoSlider"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "300px" }} />,
});
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "400px" }} />,
});
const ContactSection = dynamic(() => import("@/components/home/ContactSection"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "400px" }} />,
});

export default function BelowFoldSections() {
  return (
    <>
      <ServicesSection />
      <AboutSection />
      <ServiceShowcase />
      <LogoSlider />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}
