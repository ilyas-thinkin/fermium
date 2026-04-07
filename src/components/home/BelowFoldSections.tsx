import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ServiceShowcase from "@/components/home/ServiceShowcase";
import LogoSlider from "@/components/home/LogoSlider";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactSection from "@/components/home/ContactSection";

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
