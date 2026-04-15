import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* 404 number */}
        <p className="text-[120px] font-black leading-none text-primary opacity-10 select-none">
          404
        </p>

        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto -mt-8 mb-6">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-primary mb-3">Page Not Found</h1>
        <p className="text-text-secondary leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-accent transition-colors duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white border border-[#e9ecef] text-primary text-sm font-semibold rounded-lg hover:border-accent/40 hover:text-accent transition-colors duration-300"
          >
            Contact Us
          </Link>
          <Link
            href="/approvals"
            className="px-6 py-3 bg-white border border-[#e9ecef] text-primary text-sm font-semibold rounded-lg hover:border-accent/40 hover:text-accent transition-colors duration-300"
          >
            Our Services
          </Link>
        </div>
      </div>
    </main>
  );
}
