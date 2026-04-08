"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const WhatsAppFloat = dynamic(() => import("@/components/layout/WhatsAppFloat"));
const CallbackFloat = dynamic(() => import("@/components/layout/CallbackFloat"));

export default function FloatWidgets() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const enableWidgets = () => setShouldRender(true);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(enableWidgets, { timeout: 2500 });
      return () => window.cancelIdleCallback(idleId);
    }

    timeoutId = setTimeout(enableWidgets, 1800);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <>
      <WhatsAppFloat />
      <CallbackFloat />
    </>
  );
}
