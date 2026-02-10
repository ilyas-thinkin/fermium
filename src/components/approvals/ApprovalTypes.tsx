"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";

const approvalTypes = [
  {
    title: "Dubai Municipality (DM) Approvals",
    timeline: "2-4 weeks",
    description:
      "We handle all DM approval requirements including building permits, interior fit-out permits, and completion certificates.",
    documents: [
      "Tenancy contract / Title deed",
      "Architectural drawings",
      "MEP drawings",
      "Civil defense NOC",
      "DEWA NOC",
    ],
    faq: "DM approvals are required for any interior modification that involves structural changes, MEP alterations, or changes to the approved layout.",
  },
  {
    title: "Civil Defense (CD) Approvals",
    timeline: "1-3 weeks",
    description:
      "Comprehensive fire safety compliance including fire alarm systems, fire suppression, and emergency evacuation plans.",
    documents: [
      "Fire safety drawings",
      "Material fire rating certificates",
      "Emergency evacuation plan",
      "Fire alarm system design",
      "Sprinkler system layout",
    ],
    faq: "Civil Defense approval is mandatory for all commercial and public spaces to ensure fire safety compliance.",
  },
  {
    title: "NOCs from Various Authorities",
    timeline: "1-2 weeks each",
    description:
      "We coordinate No Objection Certificates from building management, community associations, and relevant free zone authorities.",
    documents: [
      "Application forms",
      "Project scope document",
      "Contractor trade license",
      "Insurance certificates",
      "Work schedule",
    ],
    faq: "NOCs are required from building management and relevant authorities before any work can commence on site.",
  },
  {
    title: "DEWA Approvals",
    timeline: "1-2 weeks",
    description:
      "Dubai Electricity and Water Authority approvals for any modifications to electrical or plumbing systems.",
    documents: [
      "Electrical load calculations",
      "Single line diagram",
      "Plumbing layout",
      "DEWA application form",
      "Existing DEWA account details",
    ],
    faq: "DEWA approval is needed for any changes to electrical capacity, new meter installations, or plumbing modifications.",
  },
  {
    title: "Trakhees Approvals (Free Zones)",
    timeline: "2-3 weeks",
    description:
      "Specialized approvals for projects within Dubai's free zones including JAFZA, DAFZA, and Nakheel communities.",
    documents: [
      "Free zone specific forms",
      "Architectural drawings",
      "MEP drawings",
      "Contractor credentials",
      "Project timeline",
    ],
    faq: "Trakhees acts as the regulatory authority for projects within specific free zones and master-planned communities.",
  },
];

export default function ApprovalTypes() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeUp className="mb-16">
          <p className="text-sm font-accent font-medium text-accent tracking-widest uppercase mb-4">
            Approval Services
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
            What We Handle
          </h2>
        </FadeUp>

        <div className="space-y-3">
          {approvalTypes.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.05}>
              <div className={`border bg-white transition-colors duration-300 ${expanded === i ? "border-accent bg-accent-soft" : "border-border"}`}>
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg md:text-xl font-display font-bold text-primary">
                      {item.title}
                    </h3>
                    <span className="hidden md:inline px-3 py-1 text-xs font-accent bg-accent-soft text-accent rounded-full">
                      {item.timeline}
                    </span>
                  </div>
                  <motion.svg
                    animate={{ rotate: expanded === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 text-accent flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 border-t border-border pt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          <div>
                            <p className="text-text-secondary leading-relaxed">
                              {item.description}
                            </p>
                            <p className="md:hidden text-xs font-accent text-accent mt-3">
                              Timeline: {item.timeline}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-accent font-semibold text-accent tracking-widest uppercase mb-3">
                              Required Documents
                            </h4>
                            <ul className="space-y-2">
                              {item.documents.map((doc) => (
                                <li key={doc} className="flex items-start gap-2 text-sm text-text-secondary">
                                  <span className="text-accent mt-1">&#x2022;</span>
                                  {doc}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-accent font-semibold text-accent tracking-widest uppercase mb-3">
                              FAQ
                            </h4>
                            <p className="text-sm text-text-secondary leading-relaxed">
                              {item.faq}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
