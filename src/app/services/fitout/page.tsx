import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior FitOut Work | Fermium Designs",
  description:
    "Fermium Designs delivers premium interior fitout solutions across Dubai — offices, retail, restaurants, clinics, villas, and more.",
};

const subServices = [
  {
    name: "Office FitOut",
    description:
      "Transform your workspace into a productivity powerhouse. We design and build modern, functional office environments that reflect your brand and inspire your team.",
    image: "/Images/hero/office-fitout.jpg",
  },
  {
    name: "Retail & Showroom",
    description:
      "Create immersive retail experiences that drive footfall and sales. From boutique stores to large-format showrooms, we build spaces that sell.",
    image: "/Images/hero/retail-interior.jpg",
  },
  {
    name: "Restaurant & Café",
    description:
      "From intimate dining rooms to vibrant café spaces, we craft F&B environments that enhance the guest experience and streamline operations.",
    image: "/Images/hero/restaurant-interior.jpg",
  },
  {
    name: "Clinic & Healthcare",
    description:
      "Specialist fitout for medical clinics, dental practices, and healthcare facilities — DHA-compliant with patient comfort in mind.",
    image: "/Images/hero/clinic-fitout.jpg",
  },
  {
    name: "Villa & Apartment",
    description:
      "Luxury residential fitout for villas, apartments, and penthouses across Dubai — blending aesthetics with functionality for your perfect home.",
    image: "/Images/hero/villa-fitout.jpg",
  },
  {
    name: "Custom Furniture",
    description:
      "Bespoke furniture and joinery crafted to exact specifications — reception desks, display units, cabinetry, wardrobes, and more.",
    image: "/Images/hero/custom-furniture.jpg",
  },
  {
    name: "MEP Works",
    description:
      "Comprehensive mechanical, electrical, and plumbing services as part of our complete fitout offering — fully DEWA and Civil Defense compliant.",
    image: "/Images/hero/mep-companies.jpg",
  },
  {
    name: "False Ceiling & Partitions",
    description:
      "High-quality gypsum board ceilings, glass partitions, and acoustic panels tailored for any commercial or residential space.",
    image: "/Images/hero/interior-fitout.jpg",
  },
];

export default function FitoutPage() {
  const whatsappBase = "https://wa.me/971522543903?text=";

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <span className="inline-block px-5 py-2 bg-white/10 text-accent text-xs font-semibold uppercase tracking-widest rounded-sm">
            Interior FitOut Work
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
            Spaces Crafted to Perfection
          </h1>
          <p className="mt-5 max-w-2xl text-white/60 text-lg leading-relaxed">
            From offices and retail to restaurants and villas — we deliver high-quality interior
            fitout solutions that blend creativity with precision across Dubai and the UAE.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {["500+ Projects Completed", "On-Time Delivery Guaranteed", "End-to-End Project Management"].map((b) => (
              <div key={b} className="flex items-center gap-2 text-white/70 text-sm">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards grid */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
              For Fermium Designs Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our FitOut Services</h2>
            <p className="mt-3 text-text-secondary max-w-xl mx-auto">
              Whatever the space, whatever the scale — we have the expertise to deliver it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {subServices.map((service) => (
              <div
                key={service.name}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 flex flex-col"
              >
                {/* Photo */}
                <div className="relative h-52 overflow-hidden rounded-t-3xl">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-primary text-lg mb-2">{service.name}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Contact button */}
                  <a
                    href={`${whatsappBase}${encodeURIComponent(
                      `Hi, I'd like to enquire about: ${service.name} fitout`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors duration-200"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#F5F7FA] group-hover:bg-accent/10 flex items-center justify-center transition-colors duration-200">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </span>
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Transform Your Space?</h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Tell us about your project and our team will get back to you with a tailored proposal.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-secondary transition-colors"
            >
              Start Your Project
            </Link>
            <a
              href="tel:+971522543903"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              052 254 3903
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
