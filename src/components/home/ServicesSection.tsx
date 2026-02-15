import Link from "next/link";

const services = [
  {
    title: "Interior FitOut Work",
    description:
      "Complete interior fit-out solutions from design to execution — offices, retail, restaurants, and residential spaces delivered to perfection.",
    href: "/services/fitout",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="8" y="14" width="48" height="40" rx="2" />
        <path d="M8 24h48" />
        <rect x="16" y="30" width="12" height="18" rx="1" />
        <rect x="36" y="30" width="12" height="10" rx="1" />
        <path d="M32 4v10M28 8h8" />
      </svg>
    ),
  },
  {
    title: "Authority Approvals",
    description:
      "Navigate Dubai's regulatory landscape with ease — we handle all municipality, civil defense, and free zone approvals on your behalf.",
    href: "/services/approvals",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M32 6L8 20v4h48v-4L32 6z" />
        <rect x="14" y="28" width="8" height="22" rx="1" />
        <rect x="28" y="28" width="8" height="22" rx="1" />
        <rect x="42" y="28" width="8" height="22" rx="1" />
        <rect x="6" y="50" width="52" height="6" rx="1" />
        <path d="M32 10v6" />
      </svg>
    ),
  },
  {
    title: "Structural Solutions",
    description:
      "Expert structural engineering and design services — steel, concrete, and composite solutions for buildings of every scale.",
    href: "/services/structural",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 56L28 8h8l16 48" />
        <path d="M18 40h28" />
        <path d="M22 28h20" />
        <path d="M8 56h48" />
        <circle cx="32" cy="18" r="3" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-5 py-2 bg-primary text-white text-xs font-semibold uppercase tracking-widest rounded-sm">
            Our Services
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
            Building The Future
          </h2>
          <p className="mt-5 text-text-secondary leading-relaxed">
            Fermium Designs delivers world-class fitout and engineering solutions
            to clients across a broad range of industry sectors in the UAE.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative bg-white border border-border rounded-xl p-10 text-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-accent/20 transition-all duration-500"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/5 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 text-center">
          <p className="inline-flex items-center gap-1 px-8 py-4 rounded-full border border-border text-sm text-text-secondary">
            Have a project in mind? You&apos;re welcome to send a{" "}
            <Link href="/contact" className="text-accent font-semibold hover:underline">
              message
            </Link>{" "}
            or{" "}
            <a href="tel:+97143994499" className="text-accent font-semibold hover:underline">
              give us a call.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
