import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // Service category pages (old /services/... paths → new short paths)
      { source: "/services/fitout", destination: "/fitout", permanent: true },
      { source: "/services/approvals", destination: "/approvals", permanent: true },
      { source: "/services/structural", destination: "/structural", permanent: true },
      // Approval detail pages (old /services/approvals/... paths → new nested paths)
      { source: "/services/approvals/civil-defense", destination: "/approvals/dcd-approval-dubai", permanent: true },
      { source: "/services/approvals/dda", destination: "/approvals/dda-approval-dubai", permanent: true },
      { source: "/services/approvals/dewa", destination: "/approvals/dewa-approval-dubai", permanent: true },
      { source: "/services/approvals/dubai-municipality", destination: "/approvals/dm-approval-dubai", permanent: true },
      { source: "/services/approvals/jafza", destination: "/approvals/jafza-noc-dubai", permanent: true },
      { source: "/services/approvals/dha", destination: "/approvals/dha-approval-dubai", permanent: true },
      { source: "/services/approvals/diez", destination: "/approvals/diez-approval-dubai", permanent: true },
      { source: "/services/approvals/rta", destination: "/approvals/rta-approval-dubai", permanent: true },
      { source: "/services/approvals/trakhees", destination: "/approvals/trakhees-approval-dubai", permanent: true },
      { source: "/services/approvals/nakheel", destination: "/approvals/nakheel-noc-dubai", permanent: true },
      { source: "/services/approvals/dhcc", destination: "/approvals/dhcc-approval-dubai", permanent: true },
      { source: "/services/approvals/damac", destination: "/approvals/damac-noc-dubai", permanent: true },
      { source: "/services/approvals/tecom", destination: "/approvals/tecom-noc-dubai", permanent: true },
      { source: "/services/approvals/concordia", destination: "/approvals/concordia-approval-dubai", permanent: true },
      { source: "/services/approvals/emaar", destination: "/approvals/emaar-noc-dubai", permanent: true },
      { source: "/services/approvals/dubai-south", destination: "/approvals/dubai-south-approval-dubai", permanent: true },
      { source: "/services/approvals/food-control", destination: "/approvals/food-control-approval-dubai", permanent: true },
      { source: "/services/approvals/spa", destination: "/approvals/spa-approval-dubai", permanent: true },
      { source: "/services/approvals/shisha", destination: "/approvals/shisha-cafe-license-dubai", permanent: true },
      { source: "/services/approvals/smoking-permit", destination: "/approvals/smoking-permit-dubai", permanent: true },
      { source: "/services/approvals/swimming-pool", destination: "/approvals/swimming-pool-approval-dubai", permanent: true },
      { source: "/services/approvals/solar", destination: "/approvals/solar-approval-dubai", permanent: true },
      { source: "/services/approvals/signage", destination: "/approvals/signage-approval-dubai", permanent: true },
      { source: "/services/approvals/tent", destination: "/approvals/tent-approval-dubai", permanent: true },
      { source: "/services/approvals/third-party", destination: "/approvals/third-party-consultants-dubai", permanent: true },
      // Structural detail pages (old /services/structural/... paths → new nested paths)
      { source: "/services/structural/design-drafting", destination: "/structural/structural-design-drafting-dubai", permanent: true },
      { source: "/services/structural/analysis", destination: "/structural/structural-analysis-dubai", permanent: true },
      { source: "/services/structural/calculations-reports", destination: "/structural/calculations-reports-dubai", permanent: true },
      { source: "/services/structural/bim-modelling", destination: "/structural/3d-bim-modeling-dubai", permanent: true },
      { source: "/services/structural/site-supervision", destination: "/structural/site-supervision-dubai", permanent: true },
      { source: "/services/structural/authority-approvals", destination: "/structural/structural-authority-approvals-dubai", permanent: true },
      // Old flat slugs → new nested paths (for SEO preservation)
      { source: "/interior-fitout-work-dubai", destination: "/fitout", permanent: true },
      { source: "/authority-approvals-dubai", destination: "/approvals", permanent: true },
      { source: "/structural-solutions-dubai", destination: "/structural", permanent: true },
      { source: "/dcd-approval-dubai", destination: "/approvals/dcd-approval-dubai", permanent: true },
      { source: "/dda-approval-dubai", destination: "/approvals/dda-approval-dubai", permanent: true },
      { source: "/dewa-approval-dubai", destination: "/approvals/dewa-approval-dubai", permanent: true },
      { source: "/dm-approval-dubai", destination: "/approvals/dm-approval-dubai", permanent: true },
      { source: "/jafza-noc-dubai", destination: "/approvals/jafza-noc-dubai", permanent: true },
      { source: "/dha-approval-dubai", destination: "/approvals/dha-approval-dubai", permanent: true },
      { source: "/diez-approval-dubai", destination: "/approvals/diez-approval-dubai", permanent: true },
      { source: "/rta-approval-dubai", destination: "/approvals/rta-approval-dubai", permanent: true },
      { source: "/trakhees-approval-dubai", destination: "/approvals/trakhees-approval-dubai", permanent: true },
      { source: "/nakheel-noc-dubai", destination: "/approvals/nakheel-noc-dubai", permanent: true },
      { source: "/dhcc-approval-dubai", destination: "/approvals/dhcc-approval-dubai", permanent: true },
      { source: "/damac-noc-dubai", destination: "/approvals/damac-noc-dubai", permanent: true },
      { source: "/tecom-noc-dubai", destination: "/approvals/tecom-noc-dubai", permanent: true },
      { source: "/concordia-approval-dubai", destination: "/approvals/concordia-approval-dubai", permanent: true },
      { source: "/emaar-noc-dubai", destination: "/approvals/emaar-noc-dubai", permanent: true },
      { source: "/dubai-south-approval-dubai", destination: "/approvals/dubai-south-approval-dubai", permanent: true },
      { source: "/food-control-approval-dubai", destination: "/approvals/food-control-approval-dubai", permanent: true },
      { source: "/spa-approval-dubai", destination: "/approvals/spa-approval-dubai", permanent: true },
      { source: "/shisha-cafe-license-dubai", destination: "/approvals/shisha-cafe-license-dubai", permanent: true },
      { source: "/smoking-permit-dubai", destination: "/approvals/smoking-permit-dubai", permanent: true },
      { source: "/swimming-pool-approval-dubai", destination: "/approvals/swimming-pool-approval-dubai", permanent: true },
      { source: "/solar-approval-dubai", destination: "/approvals/solar-approval-dubai", permanent: true },
      { source: "/signage-approval-dubai", destination: "/approvals/signage-approval-dubai", permanent: true },
      { source: "/tent-approval-dubai", destination: "/approvals/tent-approval-dubai", permanent: true },
      { source: "/third-party-consultants-dubai", destination: "/approvals/third-party-consultants-dubai", permanent: true },
      { source: "/structural-design-drafting-dubai", destination: "/structural/structural-design-drafting-dubai", permanent: true },
      { source: "/structural-analysis-dubai", destination: "/structural/structural-analysis-dubai", permanent: true },
      { source: "/calculations-reports-dubai", destination: "/structural/calculations-reports-dubai", permanent: true },
      { source: "/3d-bim-modeling-dubai", destination: "/structural/3d-bim-modeling-dubai", permanent: true },
      { source: "/site-supervision-dubai", destination: "/structural/site-supervision-dubai", permanent: true },
      { source: "/structural-authority-approvals-dubai", destination: "/structural/structural-authority-approvals-dubai", permanent: true },
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
