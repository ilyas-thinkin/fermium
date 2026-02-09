import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Start your interior transformation project with Fermium Designs. Get in touch with Dubai's premier fitout agency.",
};

export default function ContactPage() {
  return <ContactHero />;
}
