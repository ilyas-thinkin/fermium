import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-24 bg-bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Images */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
              <Image
                src="/Images/hero/office-fitout.jpg"
                alt="Fermium Designs — Office Fitout"
                width={600}
                height={420}
                className="w-full h-[420px] object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-primary text-white rounded-xl p-6 shadow-[0_20px_50px_rgba(22,36,92,0.3)]">
              <p className="text-4xl font-bold text-accent">15+</p>
              <p className="text-sm text-white/70 mt-1">Years of Excellence</p>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <span className="inline-block px-5 py-2 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest rounded-sm">
              Who We Are
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-primary leading-tight">
              We Don&apos;t Just Build Spaces,<br />
              We Craft Experiences.
            </h2>

            <p className="mt-6 text-text-secondary leading-relaxed">
              Fermium Designs is a Dubai-based interior fitout and engineering
              firm trusted by leading brands, developers, and businesses. We
              bring together creative design, technical precision, and regulatory
              expertise under one roof — so your project moves from vision to
              reality without the headaches.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-primary">Licensed & Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-primary">500+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-primary">End-to-End Solutions</span>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-accent transition-colors duration-300"
            >
              Discover Our Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
