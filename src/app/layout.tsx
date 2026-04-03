import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import CallbackFloat from "@/components/layout/CallbackFloat";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Fermium | Dubai Fitout approvals project management services",
    template: "%s | Fermium Designs",
  },
  description:
    "Expert fitout approvals in Dubai for construction, renovation, and modification projects. Get fast authority permits & approvals in Dubai. DM, DCD, DDA, & more",
  metadataBase: new URL("https://www.fermiumdesigns.ae"),
  verification: {
    google: "CjE2ifSrrTmcV5jeXwIw4yj5KmkI2A-7c_on4agRtK0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
        <CallbackFloat />
      </body>
    </html>
  );
}
