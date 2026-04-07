import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // Service category pages
      { source: "/services/fitout", destination: "/interior-fitout-work-dubai", permanent: true },
      { source: "/services/approvals", destination: "/authority-approvals-dubai", permanent: true },
      { source: "/services/structural", destination: "/structural-solutions-dubai", permanent: true },
      // Approval detail pages
      { source: "/services/approvals/civil-defense", destination: "/dcd-approval-dubai", permanent: true },
      { source: "/services/approvals/dda", destination: "/dda-approval-dubai", permanent: true },
      { source: "/services/approvals/dewa", destination: "/dewa-approval-dubai", permanent: true },
      { source: "/services/approvals/dubai-municipality", destination: "/dm-approval-dubai", permanent: true },
      { source: "/services/approvals/jafza", destination: "/jafza-noc-dubai", permanent: true },
      { source: "/services/approvals/dha", destination: "/dha-approval-dubai", permanent: true },
      { source: "/services/approvals/diez", destination: "/diez-approval-dubai", permanent: true },
      { source: "/services/approvals/rta", destination: "/rta-approval-dubai", permanent: true },
      { source: "/services/approvals/trakhees", destination: "/trakhees-approval-dubai", permanent: true },
      { source: "/services/approvals/nakheel", destination: "/nakheel-noc-dubai", permanent: true },
      { source: "/services/approvals/dhcc", destination: "/dhcc-approval-dubai", permanent: true },
      { source: "/services/approvals/damac", destination: "/damac-noc-dubai", permanent: true },
      { source: "/services/approvals/tecom", destination: "/tecom-noc-dubai", permanent: true },
      { source: "/services/approvals/concordia", destination: "/concordia-approval-dubai", permanent: true },
      // Additional approval pages
      { source: "/services/approvals/emaar", destination: "/emaar-noc-dubai", permanent: true },
      { source: "/services/approvals/dubai-south", destination: "/dubai-south-approval-dubai", permanent: true },
      { source: "/services/approvals/food-control", destination: "/food-control-approval-dubai", permanent: true },
      { source: "/services/approvals/spa", destination: "/spa-approval-dubai", permanent: true },
      { source: "/services/approvals/shisha", destination: "/shisha-cafe-license-dubai", permanent: true },
      { source: "/services/approvals/smoking-permit", destination: "/smoking-permit-dubai", permanent: true },
      { source: "/services/approvals/swimming-pool", destination: "/swimming-pool-approval-dubai", permanent: true },
      { source: "/services/approvals/solar", destination: "/solar-approval-dubai", permanent: true },
      { source: "/services/approvals/signage", destination: "/signage-approval-dubai", permanent: true },
      { source: "/services/approvals/tent", destination: "/tent-approval-dubai", permanent: true },
      { source: "/services/approvals/third-party", destination: "/third-party-consultants-dubai", permanent: true },
      // Structural detail pages
      { source: "/services/structural/design-drafting", destination: "/structural-design-drafting-dubai", permanent: true },
      { source: "/services/structural/analysis", destination: "/structural-analysis-dubai", permanent: true },
      { source: "/services/structural/calculations-reports", destination: "/calculations-reports-dubai", permanent: true },
      { source: "/services/structural/bim-modelling", destination: "/3d-bim-modeling-dubai", permanent: true },
      { source: "/services/structural/site-supervision", destination: "/site-supervision-dubai", permanent: true },
      { source: "/services/structural/authority-approvals", destination: "/structural-authority-approvals-dubai", permanent: true },
    ];
  },
  async headers() {
    const farFuture = "Thu, 31 Dec 2099 23:59:59 GMT";
    const immutable = "public, max-age=31536000, immutable";
    const imageHeaders = [
      { key: "Cache-Control", value: immutable },
      { key: "Expires", value: farFuture },
    ];
    return [
      // Static image assets in /public
      { source: "/Images/:path*", headers: imageHeaders },
      { source: "/logo/:path*",   headers: imageHeaders },
      // Next.js image optimisation endpoint
      { source: "/_next/image(.*)", headers: imageHeaders },
      // Static JS/CSS/font chunks (Next.js sets immutable on these too, this is belt-and-suspenders)
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: immutable }],
      },
      // Security headers for every response
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
    qualities: [60, 75, 90],
  },
  poweredByHeader: false,
};

export default nextConfig;
