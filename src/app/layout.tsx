import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fermium Designs",
  description: "Interior Fitout & Design Company in Dubai",
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
      </body>
    </html>
  );
}
