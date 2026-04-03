"use client";

import { useState, useEffect } from "react";

const flippingTexts = [
  "Fit Out Services",
  "Authority Approvals",
  "Structural Designs",
];

export default function HeroFlipText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % flippingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="block mt-3 h-[36px] sm:h-[42px] md:h-[50px] lg:h-[58px] relative overflow-hidden flip-container">
      <span
        key={currentIndex}
        className="absolute inset-0 flex items-center pl-1 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold italic text-accent whitespace-nowrap animate-flip-in"
      >
        {flippingTexts[currentIndex]}
      </span>
    </span>
  );
}
