"use client";

import dynamic from "next/dynamic";

const WhatsAppFloat = dynamic(() => import("@/components/layout/WhatsAppFloat"));
const CallbackFloat = dynamic(() => import("@/components/layout/CallbackFloat"));

export default function FloatWidgets() {
  return (
    <>
      <WhatsAppFloat />
      <CallbackFloat />
    </>
  );
}
