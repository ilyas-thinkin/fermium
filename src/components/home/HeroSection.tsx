import Image from "next/image";
import Link from "next/link";
import HeroFlipText from "./HeroFlipText";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay — Next.js Image for LCP optimization */}
      <div className="absolute inset-0">
        <Image
          src="/Images/hero/corporate.webp"
          alt="Modern corporate office interior fitout in Dubai"
          fill
          priority
          fetchPriority="high"
          quality={80}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Right-side decorative image */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block">
        <Image
          src="/Images/hero/interior-fitout.webp"
          alt="Interior fitout work in Dubai — office and commercial space design"
          fill
          priority
          quality={80}
          sizes="45vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/40" />
        {/* Diagonal clip from left */}
        <div
          className="absolute inset-0 bg-primary/85"
          style={{
            clipPath: "polygon(0 0, 15% 0, 0 100%, 0 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 md:px-10 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* SEO H1 — visually hidden, descriptive for search engines */}
          <h1 className="sr-only">
            Fermium | Dubai Fitout approvals project management services
          </h1>

          {/* Visual heading — decorative, not the SEO H1 */}
          <div className="text-white" aria-hidden="true">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
              Specialist in
            </span>

            {/* Line 2 — 3D Flipping text (client island) */}
            <HeroFlipText />
          </div>

          {/* Subtitle */}
          <p className="mt-8 text-white/70 text-base sm:text-lg max-w-lg leading-relaxed animate-fade-in-up animation-delay-200">
            From concept to completion — we turn bold ideas into
            beautifully crafted spaces across Dubai and the UAE.
          </p>

          {/* CTA Row */}
          <div className="mt-10 flex flex-wrap items-center gap-6 animate-fade-in-up animation-delay-400">
            {/* Contact Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent text-sm font-semibold uppercase tracking-wider hover:bg-accent hover:text-white transition-all duration-300 rounded-sm"
            >
              Contact Us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            {/* Phone CTA */}
            <a
              href="tel:+971522543903"
              className="flex items-center gap-3 group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-accent">
                  Call us now
                </p>
                <p className="text-white font-semibold text-sm">
                  052 254 3903
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Play Button */}
      <div className="absolute right-[22%] top-1/2 -translate-y-1/2 z-10 hidden lg:flex">
        <button
          className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-white/60 hover:scale-110 transition-all duration-300 group"
          aria-label="Play video"
        >
          <svg
            className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
