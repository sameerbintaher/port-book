"use client";

import { useState, useEffect } from "react";

export default function PageTransition({
  children,
  isVisible = true,
  direction = "forward",
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(isVisible);

  useEffect(() => {
    if (!isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setShowContent(false);
        setIsAnimating(false);
      }, 200); // Reduced from 300ms
      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 200); // Reduced from 300ms
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!showContent) return null;

  return (
    <div
      className={`relative w-full h-full transition-all duration-300 ease-out ${
        isAnimating && !isVisible
          ? direction === "forward"
            ? "transform -translate-x-8 opacity-0"
            : "transform translate-x-8 opacity-0"
          : isAnimating && isVisible
          ? "transform translate-x-0 opacity-100"
          : "transform translate-x-0 opacity-100"
      }`}
    >
      {/* Book Page Shadow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/20 to-slate-400/40 pointer-events-none rounded-lg shadow-inner" />

      {/* Page Texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-slate-200/10 via-transparent to-slate-300/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>

      {/* Realistic Page Curl */}
      <div className="absolute bottom-0 right-0 w-12 h-8 bg-gradient-to-tl from-slate-300/60 to-slate-400/80 rounded-tl-lg shadow-lg pointer-events-none transform translate-x-1 translate-y-1" />

      {/* Page Binding Shadow */}
      <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-r from-slate-600/20 to-transparent pointer-events-none" />
    </div>
  );
}
