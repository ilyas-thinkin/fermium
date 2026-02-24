"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import EnquiryModal from "@/components/EnquiryModal";

/* ─── DATA ──────────────────────────────────────────────────── */

interface StructuralService {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  quickViewDescription: string;
  keyFeatures: string[];
  detailHref: string;
}

const servicesData: StructuralService[] = [
  {
    id: "1",
    icon: "design",
    title: "Structural Design & Drafting",
    shortDescription: "Complete structural solutions from concept to construction",
    quickViewDescription:
      "We provide comprehensive structural design services for all types of buildings in Dubai and across the UAE. Our team delivers complete design packages including calculations, drawings, and specifications that meet Dubai Municipality and local authority requirements.",
    keyFeatures: [
      "Reinforced Concrete (RC) Design",
      "Steel Structure Design",
      "Foundation Design & Analysis",
      "Detailed Working Drawings",
      "Bar Bending Schedules (BBS)",
      "Shop Drawings & Fabrication Details",
      "Construction Methodology Support",
      "Value Engineering Solutions",
    ],
    detailHref: "/services/structural/design-drafting",
  },
  {
    id: "2",
    icon: "analysis",
    title: "Structural Analysis",
    shortDescription: "Advanced analysis using latest software and methodologies",
    quickViewDescription:
      "Our structural analysis services utilise industry-leading software like ETABS, SAP2000, and SAFE to ensure your building can withstand all loads safely. We analyse static, dynamic, wind, and seismic forces as per UAE building codes.",
    keyFeatures: [
      "Linear & Non-Linear Analysis",
      "Static & Dynamic Analysis",
      "Wind Load Analysis (UAE Wind Zones)",
      "Seismic Analysis",
      "Foundation Settlement Analysis",
      "Progressive Collapse Analysis",
      "Finite Element Analysis (FEA)",
      "Performance-Based Design",
    ],
    detailHref: "/services/structural/analysis",
  },
  {
    id: "3",
    icon: "document",
    title: "Calculations & Reports",
    shortDescription: "Detailed engineering documentation and compliance reports",
    quickViewDescription:
      "We prepare comprehensive structural calculations and technical reports that meet Dubai Municipality requirements. All calculations are stamped by our licensed engineers and comply with international standards including BS, ACI, and Eurocode.",
    keyFeatures: [
      "Foundation Design Calculations",
      "Column & Beam Design",
      "Slab Design Calculations",
      "Shear Wall & Core Design",
      "Staircase & Ramp Calculations",
      "Retaining Wall Design",
      "Load Analysis Reports",
      "Material Specifications",
    ],
    detailHref: "/services/structural/calculations-reports",
  },
  {
    id: "4",
    icon: "approval",
    title: "Authority Approvals",
    shortDescription: "Streamlined approval process with Dubai Municipality",
    quickViewDescription:
      "We handle all structural approval processes with Dubai Municipality, Civil Defense, and master developers. Our team has extensive experience navigating UAE regulatory requirements and ensures smooth, timely approvals for your project.",
    keyFeatures: [
      "Dubai Municipality Approvals",
      "Civil Defense NOC",
      "DEWA Coordination",
      "Master Developer Approvals (Emaar, Nakheel, etc.)",
      "Building Permit Processing",
      "Regulatory Compliance Review",
      "Technical Query Responses",
      "Amendment & Revision Submissions",
    ],
    detailHref: "/services/structural/authority-approvals",
  },
  {
    id: "5",
    icon: "model",
    title: "3D BIM Modeling",
    shortDescription: "Advanced Building Information Modeling services",
    quickViewDescription:
      "Our BIM services provide detailed 3D structural models that enhance coordination, reduce errors, and streamline construction. We use Revit and Tekla to create intelligent models with embedded structural data and clash detection.",
    keyFeatures: [
      "Detailed 3D Structural Models",
      "Parametric Design Elements",
      "Clash Detection & Resolution",
      "Quantity Takeoffs & Estimating",
      "Construction Sequencing",
      "Shop Drawing Generation",
      "As-Built Documentation",
      "Facility Management Integration",
    ],
    detailHref: "/services/structural/bim-modelling",
  },
  {
    id: "6",
    icon: "supervision",
    title: "Site Supervision",
    shortDescription: "Expert on-site supervision and quality control",
    quickViewDescription:
      "Our structural engineers provide on-site supervision to ensure construction aligns with approved designs. We conduct quality inspections, review material tests, and provide technical solutions to construction challenges.",
    keyFeatures: [
      "Quality Control Inspections",
      "Reinforcement Verification",
      "Concrete Pour Supervision",
      "Formwork Inspection",
      "Material Testing Coordination",
      "Technical Problem Solving",
      "Progress Monitoring",
      "Defect Identification & Resolution",
    ],
    detailHref: "/services/structural/site-supervision",
  },
];

const comprehensiveServices = [
  {
    category: "Design Services",
    items: [
      "New Building Structural Design",
      "Renovation & Retrofit Design",
      "Addition & Extension Design",
      "Structural Strengthening Solutions",
      "Value Engineering",
      "Design-Build Support",
    ],
  },
  {
    category: "Analysis Services",
    items: [
      "Structural Health Assessment",
      "Load Path Analysis",
      "Progressive Collapse Analysis",
      "Vibration Analysis",
      "Blast & Impact Analysis",
      "Connection Design",
    ],
  },
  {
    category: "Documentation Services",
    items: [
      "Architectural to Structural Coordination",
      "Construction Documentation",
      "Specification Writing",
      "Material Submittals Review",
      "RFI Response",
      "Change Order Documentation",
    ],
  },
  {
    category: "Specialized Services",
    items: [
      "Post-Tensioned Slab Design",
      "Precast Concrete Design",
      "Composite Structure Design",
      "Retaining Wall Design",
      "Swimming Pool Structural Design",
      "Façade Structural Support",
    ],
  },
];

/* Per-service accent colors (matching the reference design palette) */
const SERVICE_COLORS: Record<string, string> = {
  "1": "#1FB6B5",
  "2": "#16245C",
  "3": "#1FB6B5",
  "4": "#16245C",
  "5": "#1FB6B5",
  "6": "#16245C",
};

/* ─── ICON RENDERER ─────────────────────────────────────────── */

function ServiceIcon({ icon, size = 32 }: { icon: string; size?: number }) {
  switch (icon) {
    case "design":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </svg>
      );
    case "analysis":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
      );
    case "document":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
      );
    case "approval":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      );
    case "model":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44C3.21 17.21 3 16.88 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z" />
        </svg>
      );
    case "supervision":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
      );
    default:
      return null;
  }
}

/* ─── PAGE COMPONENT ────────────────────────────────────────── */

export default function StructuralPage() {
  const [selectedService, setSelectedService] = useState<StructuralService | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState("");

  const openModal = useCallback((service: string) => {
    setModalService(service);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);
  const quickViewRef = useRef<HTMLDivElement>(null);
  const iconsGridRef = useRef<HTMLDivElement>(null);
  const scrollDirRef = useRef(1);
  const isProgrammaticScrollRef = useRef(false);
  const userInteractionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openQuickView = (service: StructuralService) => {
    if (selectedService?.id === service.id) {
      setSelectedService(null);
    } else {
      setSelectedService(service);
    }
  };

  const closeQuickView = () => {
    setSelectedService(null);
  };

  /* Scroll to quick-view on open */
  useEffect(() => {
    if (selectedService && quickViewRef.current) {
      setTimeout(() => {
        const quickEl = quickViewRef.current;
        if (!quickEl) return;
        const iconsEl = iconsGridRef.current;
        const targetBase =
          iconsEl?.getBoundingClientRect().top ?? quickEl.getBoundingClientRect().top;
        const y = targetBase + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 100);
    }
  }, [selectedService]);

  /* Pause/resume helpers */
  const handleUserInteractionStart = () => {
    setAutoScrollPaused(true);
    if (userInteractionTimeoutRef.current) clearTimeout(userInteractionTimeoutRef.current);
  };

  const handleUserInteractionEnd = () => {
    if (userInteractionTimeoutRef.current) clearTimeout(userInteractionTimeoutRef.current);
    userInteractionTimeoutRef.current = setTimeout(() => {
      if (!selectedService) setAutoScrollPaused(false);
    }, 2000);
  };

  /* Touch/mouse listeners */
  useEffect(() => {
    const el = iconsGridRef.current;
    if (!el) return;
    el.addEventListener("touchstart", handleUserInteractionStart, { passive: true });
    el.addEventListener("touchend", handleUserInteractionEnd, { passive: true });
    el.addEventListener("mousedown", handleUserInteractionStart, { passive: true });
    el.addEventListener("mouseup", handleUserInteractionEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", handleUserInteractionStart);
      el.removeEventListener("touchend", handleUserInteractionEnd);
      el.removeEventListener("mousedown", handleUserInteractionStart);
      el.removeEventListener("mouseup", handleUserInteractionEnd);
      if (userInteractionTimeoutRef.current) clearTimeout(userInteractionTimeoutRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedService]);

  /* Pause auto-scroll when quick-view is open */
  useEffect(() => {
    if (!selectedService) {
      setAutoScrollPaused(false);
    } else {
      setAutoScrollPaused(true);
    }
  }, [selectedService]);

  /* Auto-scroll on mobile only */
  useEffect(() => {
    const el = iconsGridRef.current;
    if (!el || typeof window === "undefined") return;
    const isNarrow = window.matchMedia("(max-width: 900px)").matches;
    if (!isNarrow || autoScrollPaused) return;

    const intervalId = window.setInterval(() => {
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 2) return;
      const dir = scrollDirRef.current;
      const next = el.scrollLeft + dir * 1;
      isProgrammaticScrollRef.current = true;
      if (next >= max) {
        el.scrollLeft = max;
        scrollDirRef.current = -1;
      } else if (next <= 0) {
        el.scrollLeft = 0;
        scrollDirRef.current = 1;
      } else {
        el.scrollLeft = next;
      }
      setTimeout(() => { isProgrammaticScrollRef.current = false; }, 50);
    }, 20);

    return () => window.clearInterval(intervalId);
  }, [autoScrollPaused]);

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
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
            Structural Solutions
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
            Engineering Built to Last
          </h1>
          <p className="mt-5 max-w-2xl text-white/60 text-lg leading-relaxed">
            Precision structural engineering — from concept design and analysis to BIM modeling,
            authority approvals, and on-site supervision — all delivered by our expert team.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {["100% Code Compliant", "UAE Standards Certified", "15+ Years Experience"].map((b) => (
              <div key={b} className="flex items-center gap-2 text-white/70 text-sm">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ICON GRID + INLINE QUICK VIEW ────────────────────── */}
      <section className="bg-white pt-16 pb-0">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <p className="text-sm text-text-secondary mb-8">
            Tap or click an icon below to open its quick view
          </p>

          {/* Icon cards */}
          <div
            ref={iconsGridRef}
            className="flex gap-4 max-w-full justify-center"
            style={{
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              paddingTop: 16,
              paddingBottom: 24,
            } as React.CSSProperties}
          >
            {servicesData.map((service) => {
              const color = SERVICE_COLORS[service.id];
              const isActive = selectedService?.id === service.id;
              const isHovered = hoveredId === service.id && !isActive;
              return (
                <button
                  key={service.id}
                  onClick={() => openQuickView(service)}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="flex flex-col items-center text-center rounded-2xl border-2 transition-all duration-300 cursor-pointer shrink-0"
                  style={{
                    minWidth: 180,
                    maxWidth: 180,
                    padding: "20px 16px",
                    background: isActive
                      ? `${color}10`
                      : isHovered
                      ? "#ffffff"
                      : "linear-gradient(135deg,#f8f9fa 0%,#ffffff 100%)",
                    borderColor: isActive || isHovered ? color : "#e9ecef",
                    boxShadow: isActive
                      ? `0 8px 24px ${color}40`
                      : isHovered
                      ? `0 12px 28px ${color}30`
                      : undefined,
                    transform: isActive
                      ? "scale(1.04)"
                      : isHovered
                      ? "scale(1.06)"
                      : undefined,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 transition-all duration-300"
                    style={{
                      background: color,
                      boxShadow: isHovered
                        ? `0 10px 24px ${color}50`
                        : `0 6px 16px ${color}40`,
                      color: "#ffffff",
                      transform: isHovered ? "scale(1.1) rotate(5deg)" : undefined,
                    }}
                  >
                    <ServiceIcon icon={service.icon} size={28} />
                  </div>
                  <h3
                    className="text-sm font-semibold leading-tight mb-1 transition-colors duration-200"
                    style={{ color: isHovered || isActive ? color : "#16245C" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-snug line-clamp-2">
                    {service.shortDescription}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Inline quick view */}
          {selectedService && (
            <div
              ref={quickViewRef}
              className="relative mt-8 mx-0 rounded-2xl text-left animate-[slideDown_0.35s_ease-out]"
              style={{
                background: "linear-gradient(135deg,#f8f9fa 0%,#e9ecef 100%)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                padding: "35px 40px",
              }}
            >
              {/* Close */}
              <button
                onClick={closeQuickView}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:bg-black/10 transition-all duration-200 hover:rotate-90"
                aria-label="Close"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                {/* Icon */}
                <div
                  className="shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg"
                  style={{ background: SERVICE_COLORS[selectedService.id] }}
                >
                  <ServiceIcon icon={selectedService.icon} size={40} />
                </div>

                {/* Body */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold text-primary mb-3">{selectedService.title}</h2>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">
                    {selectedService.quickViewDescription}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-3">
                    Key Features
                  </p>
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {selectedService.keyFeatures.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-primary">
                        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#1FB6B5" strokeWidth={2.5}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="shrink-0 flex flex-col gap-3 w-full md:w-auto">
                  <Link
                    href={selectedService.detailHref}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
                    style={{
                      background: SERVICE_COLORS[selectedService.id],
                      boxShadow: `0 10px 24px ${SERVICE_COLORS[selectedService.id]}50`,
                    }}
                  >
                    Full Details
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                  <button
                    onClick={() => openModal(selectedService.title)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border-2 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap bg-white"
                    style={{
                      color: SERVICE_COLORS[selectedService.id],
                      borderColor: SERVICE_COLORS[selectedService.id],
                    }}
                  >
                    Send Enquiry
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── SHOWCASE CARDS ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full mb-5">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What We Offer</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Professional structural engineering services tailored to your project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const color = SERVICE_COLORS[service.id];
              return (
                <article
                  key={service.id}
                  className="relative bg-white rounded-3xl border-2 border-[#f0f4f8] p-10 transition-all duration-300 hover:-translate-y-2 group"
                  style={
                    {
                      "--card-color": color,
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = color;
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#f0f4f8";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Number watermark */}
                  <span
                    className="absolute top-6 right-7 text-5xl font-black leading-none opacity-[0.07]"
                    style={{ color }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-[72px] h-[72px] rounded-[20px] flex items-center justify-center text-white mb-6 transition-all duration-300 group-hover:scale-105 group-hover:-rotate-3"
                    style={{
                      background: color,
                      boxShadow: `0 12px 28px ${color}40`,
                    }}
                  >
                    <ServiceIcon icon={service.icon} size={36} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Divider */}
                  <div
                    className="h-px mb-5 opacity-30"
                    style={{
                      background: `linear-gradient(90deg, ${color} 0%, transparent 100%)`,
                    }}
                  />

                  {/* Features */}
                  <ul className="flex flex-col gap-3 mb-7">
                    {service.keyFeatures.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[#444]">
                        <svg
                          className="shrink-0 mt-0.5"
                          width={14}
                          height={14}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={color}
                          strokeWidth={3}
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="flex gap-2.5 flex-wrap">
                    <Link
                      href={service.detailHref}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        background: color,
                        boxShadow: `0 4px 12px ${color}40`,
                      }}
                    >
                      Learn More
                      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                    <button
                      onClick={() => openQuickView(service)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 bg-transparent transition-all duration-200 hover:-translate-y-0.5"
                      style={{ color, borderColor: color }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = color;
                        (e.currentTarget as HTMLElement).style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = color;
                      }}
                    >
                      Quick View
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COMPREHENSIVE PORTFOLIO ──────────────────────────── */}
      <section className="py-24 bg-bg-secondary">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              A complete range of structural engineering expertise for every project requirement
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {comprehensiveServices.map((cat) => (
              <div
                key={cat.category}
                className="bg-white border border-border rounded-2xl p-9 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-accent"
              >
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shrink-0">
                    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-primary text-lg">{cat.category}</h3>
                </div>
                <ul className="flex flex-col gap-3.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                      <svg
                        className="shrink-0 mt-0.5 text-accent"
                        width={15}
                        height={15}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <polyline points="9 11 12 14 22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="relative rounded-3xl overflow-hidden bg-primary px-10 py-16 text-center">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
                Contact us today to discuss how we can help bring your structural engineering vision to life.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-colors"
                >
                  Get in Touch
                </Link>
                <a
                  href="tel:+971522543903"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12.9 19.79 19.79 0 0 1 1.14 4.27 2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
                  </svg>
                  052 254 3903
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={closeModal}
        defaultService={modalService}
        serviceOptions={[
          "Structural Design & Drafting",
          "Structural Analysis",
          "Calculations & Reports",
          "3D BIM Modeling",
          "Site Supervision",
          "Authority Approvals",
        ]}
      />
    </main>
  );
}
