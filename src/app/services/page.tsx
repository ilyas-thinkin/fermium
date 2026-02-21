"use client";

import Link from "next/link";
import { useState, useRef, useCallback, useEffect } from "react";
import type { ReactNode } from "react";

/* ─── DATA ──────────────────────────────────────────────────── */

interface SubService {
  name: string;
  description: string;
  icon: ReactNode;
}

interface ServiceCategory {
  id: string;
  label: string;
  href: string;
  tagline: string;
  intro: string;
  color: string;
  subServices: SubService[];
}

const categories: ServiceCategory[] = [
  {
    id: "fitout",
    label: "Interior FitOut Work",
    href: "/services/fitout",
    tagline: "Spaces Crafted to Perfection",
    intro:
      "From concept to completion, we deliver high-quality interior fitout solutions for offices, retail outlets, restaurants, clinics, and more.",
    color: "#1FB6B5",
    subServices: [
      {
        name: "Office FitOut",
        description:
          "Transform your workspace into a productivity powerhouse with modern, functional office environments that reflect your brand.",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        name: "Retail & Showroom",
        description:
          "Create immersive retail experiences that drive footfall and sales — from boutique stores to large-format showrooms.",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        ),
      },
      {
        name: "Restaurant & Café",
        description:
          "Craft F&B environments that enhance the guest experience and streamline operations — from intimate dining rooms to vibrant café spaces.",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        ),
      },
      {
        name: "Clinic & Healthcare",
        description:
          "Specialist fitout for medical clinics, dental practices, and healthcare facilities — DHA-compliant with patient comfort in mind.",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        ),
      },
      {
        name: "Villa & Apartment",
        description:
          "Luxury residential fitout for villas, apartments, and penthouses — blending aesthetics with functionality for your perfect home.",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        ),
      },
      {
        name: "Custom Furniture",
        description:
          "Bespoke furniture and joinery crafted to exact specifications — reception desks, display units, wardrobes, and more.",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        ),
      },
      {
        name: "MEP Works",
        description:
          "Comprehensive mechanical, electrical, and plumbing services — fully DEWA and Civil Defense compliant, integrated into every project.",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        name: "False Ceiling & Partitions",
        description:
          "High-quality gypsum board ceilings, glass partitions, and acoustic panels for any commercial or residential space.",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "approvals",
    label: "Authority Approvals",
    href: "/services/approvals",
    tagline: "Permits Without the Paperwork Headache",
    intro:
      "We handle the complete approval process across 21 Dubai authorities — so you can focus on your business while we handle every stamp and submission.",
    color: "#16245C",
    subServices: [
      {
        name: "Civil Defense Approval",
        description: "Fire safety compliance and Civil Defense permits for all types of commercial and residential fitout projects.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>,
      },
      {
        name: "DEWA Approval",
        description: "Dubai Electricity and Water Authority approvals for electrical, plumbing, and MEP installations.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      },
      {
        name: "Dubai Municipality",
        description: "Comprehensive DM approvals for construction, fitout, and renovation projects across Dubai.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      },
      {
        name: "Emaar Approval",
        description: "Fitout permits and NOC approvals for properties within Emaar-managed communities and developments.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      },
      {
        name: "Nakheel Approval",
        description: "NOC and fitout approvals for Nakheel properties including Palm Jumeirah, Ibn Battuta, and more.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      },
      {
        name: "JAFZA Approval",
        description: "Jebel Ali Free Zone Authority permits and fitout approvals for industrial and commercial units.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      },
      {
        name: "DHA Approval",
        description: "Dubai Health Authority permits for medical clinics, pharmacies, and healthcare-related fitout projects.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      },
      {
        name: "DSO Approval",
        description: "Dubai Silicon Oasis Authority approvals for technology parks, offices, and commercial spaces.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" /></svg>,
      },
      {
        name: "Dubai Development Authority",
        description: "DDA permits for creative economy zones, media cities, and design districts across Dubai.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>,
      },
      {
        name: "Food Control Dept.",
        description: "Food establishment permits and kitchen approvals for restaurants, cafés, and food outlets in Dubai.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
      },
      {
        name: "Spa Approval",
        description: "Full spa licensing and fitout approval services for wellness centers and beauty establishments.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
      },
      {
        name: "Shisha Café License",
        description: "End-to-end shisha café licensing, layout approvals, and compliance documentation.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
      },
      {
        name: "Smoking Permit",
        description: "Designated smoking area approvals and permit processing for compliant hospitality venues.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      },
      {
        name: "Swimming Pool Approval",
        description: "Swimming pool design, safety, and construction approvals from relevant Dubai authorities.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" /></svg>,
      },
      {
        name: "Solar Approval",
        description: "DEWA and authority approvals for solar panel installations on rooftops and commercial buildings.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>,
      },
      {
        name: "Signage Approval",
        description: "Outdoor and indoor signage permits and RTA/DM approvals for storefronts and commercial spaces.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>,
      },
      {
        name: "Tent Approval",
        description: "Temporary structure and event tent permits from Civil Defense and Dubai Municipality.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" /></svg>,
      },
      {
        name: "RTA Permit",
        description: "Roads and Transport Authority permits for roadside projects, signage, and transport-related fitout work.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
      },
      {
        name: "Tecom & DCCA",
        description: "Technology and media free zone approvals including Dubai Internet City and Dubai Media City.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>,
      },
      {
        name: "Third Party Consultants",
        description: "Coordination with approved third-party consultants for peer review, NOC, and technical sign-offs.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      },
      {
        name: "Trakhees Approval",
        description: "PCFC Trakhees approvals for properties in Jebel Ali, Port Zone, and other free zone areas.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
      },
    ],
  },
  {
    id: "structural",
    label: "Structural Solutions",
    href: "/services/structural",
    tagline: "Engineering Built to Last",
    intro:
      "Precision structural engineering — from concept design and analysis to BIM modeling, authority approvals, and on-site supervision.",
    color: "#1FB6B5",
    subServices: [
      {
        name: "Structural Design & Drafting",
        description: "Complete structural solutions from concept to construction-ready drawings — reinforced concrete, steel, and foundations.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>,
      },
      {
        name: "Structural Analysis",
        description: "Advanced analysis using industry-leading software — static, dynamic, seismic, and wind load assessments.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      },
      {
        name: "Calculations & Reports",
        description: "Detailed structural engineering calculations and technical reports prepared in accordance with UAE building codes.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      },
      {
        name: "Authority Approvals",
        description: "Structural document preparation and submission for Dubai Municipality, Civil Defense, and all relevant authorities.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      },
      {
        name: "3D BIM Modeling",
        description: "Advanced Building Information Modeling — clash detection, quantity take-offs, and coordination with MEP and architecture teams.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>,
      },
      {
        name: "Site Supervision",
        description: "Expert on-site structural supervision and quality control to ensure construction faithfully follows approved drawings.",
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
      },
    ],
  },
];

/* ─── CAROUSEL SECTION ──────────────────────────────────────── */

function ServiceCarousel({ category, centered = false }: { category: ServiceCategory; centered?: boolean }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [autoScrollDir, setAutoScrollDir] = useState<1 | -1>(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isScrollPaused = centered || activeIndex !== null || isHovered || isTouching;

  // Auto-scroll: bounce left/right (only for non-centered carousels)
  useEffect(() => {
    if (isScrollPaused) return;
    const el = scrollRef.current;
    if (!el) return;

    const interval = window.setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + autoScrollDir * 1.2;

      if (next <= 0) {
        el.scrollTo({ left: 0, behavior: "smooth" });
        setAutoScrollDir(1);
      } else if (next >= maxScroll) {
        el.scrollTo({ left: maxScroll, behavior: "smooth" });
        setAutoScrollDir(-1);
      } else {
        el.scrollBy({ left: autoScrollDir * 1.2, behavior: "smooth" });
      }
    }, 24);

    return () => window.clearInterval(interval);
  }, [isScrollPaused, autoScrollDir]);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  const handleIconClick = useCallback((i: number) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  }, []);

  const handleClose = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const active = activeIndex !== null ? category.subServices[activeIndex] : null;

  const whatsappText = active
    ? encodeURIComponent(`Hi, I'd like to enquire about: ${active.name} (${category.label})`)
    : "";

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
      {/* Category header */}
      <div className="px-8 md:px-10 pt-10 pb-6 border-b border-border flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            {category.tagline}
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-primary">{category.label}</h2>
          <p className="mt-2 text-sm text-text-secondary max-w-xl">{category.intro}</p>
        </div>
        <Link
          href={category.href}
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-accent transition-colors duration-300"
        >
          View All
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Rail */}
      <div className={`flex items-center gap-4 px-6 py-8 bg-[#F5F7FA] ${centered ? "justify-center" : ""}`}>
        {/* Left arrow — only for scrollable carousels */}
        {!centered && (
          <button
            onClick={scrollLeft}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Scroll left"
            className="shrink-0 w-11 h-11 rounded-full border-2 border-border bg-white text-text-secondary flex items-center justify-center transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white hover:scale-110 hidden md:flex"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {/* Icon rail — scrollable or centered wrap */}
        {centered ? (
          <div className="flex flex-wrap justify-center gap-6 py-3 px-2">
            {category.subServices.map((s, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={s.name}
                  onClick={() => handleIconClick(i)}
                  aria-label={`View ${s.name}`}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "text-white shadow-[0_12px_32px_rgba(22,36,92,0.3)] scale-105"
                        : "bg-white border-2 border-border text-primary shadow-sm group-hover:border-accent group-hover:text-accent group-hover:-translate-y-1 group-hover:shadow-[0_12px_32px_rgba(31,182,181,0.15)]"
                    }`}
                    style={isActive ? { backgroundColor: category.color } : {}}
                  >
                    {s.icon}
                  </div>
                  <span
                    className={`text-xs font-medium text-center leading-tight w-20 transition-colors duration-200 ${
                      isActive ? "text-primary font-semibold" : "text-text-secondary group-hover:text-accent"
                    }`}
                  >
                    {s.name}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex-1 overflow-x-auto overflow-y-visible"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsTouching(true)}
            onTouchEnd={() => setIsTouching(false)}
          >
            <div className="flex gap-5 px-2 py-3 min-w-min">
              {category.subServices.map((s, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={s.name}
                    onClick={() => handleIconClick(i)}
                    aria-label={`View ${s.name}`}
                    className="flex flex-col items-center gap-3 shrink-0 group cursor-pointer"
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "text-white shadow-[0_12px_32px_rgba(22,36,92,0.3)] scale-105"
                          : "bg-white border-2 border-border text-primary shadow-sm group-hover:border-accent group-hover:text-accent group-hover:-translate-y-1 group-hover:shadow-[0_12px_32px_rgba(31,182,181,0.15)]"
                      }`}
                      style={isActive ? { backgroundColor: category.color } : {}}
                    >
                      {s.icon}
                    </div>
                    <span
                      className={`text-xs font-medium text-center leading-tight w-20 transition-colors duration-200 ${
                        isActive ? "text-primary font-semibold" : "text-text-secondary group-hover:text-accent"
                      }`}
                    >
                      {s.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Right arrow — only for scrollable carousels */}
        {!centered && (
          <button
            onClick={scrollRight}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Scroll right"
            className="shrink-0 w-11 h-11 rounded-full border-2 border-border bg-white text-text-secondary flex items-center justify-center transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white hover:scale-110 hidden md:flex"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>

      {/* Detail preview panel */}
      {active && (
        <div
          className="relative overflow-hidden animate-[slideDown_0.35s_ease-out]"
          style={{ backgroundColor: "#16245C" }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Close preview"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative px-8 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            {/* Icon */}
            <div
              className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white border border-white/20"
              style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
            >
              <div className="[&_svg]:w-8 [&_svg]:h-8 text-white">
                {active.icon}
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">
                {category.label}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-white">{active.name}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed max-w-xl">
                {active.description}
              </p>
            </div>

            {/* Action buttons */}
            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
              <a
                href={`https://wa.me/971522543903?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-secondary transition-colors whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send Enquiry
              </a>
              <Link
                href={category.href}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-colors whitespace-nowrap border border-white/20"
              >
                View Service
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default function ServicesPage() {
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
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <span className="inline-block px-5 py-2 bg-white/10 text-accent text-xs font-semibold uppercase tracking-widest rounded-sm">
            What We Do
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Our Services
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-white/60 text-lg leading-relaxed">
            End-to-end fitout, engineering, and approval solutions — all under one roof.
          </p>
        </div>
      </section>

      {/* Carousel sections */}
      <section className="py-16 bg-bg-secondary">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 space-y-10">
          {categories.map((cat) => (
            <ServiceCarousel key={cat.id} category={cat} centered={cat.id !== "approvals"} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Talk to our team and we&apos;ll guide you to the right solution for your project.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-secondary transition-colors"
            >
              Contact Us
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
