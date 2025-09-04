"use client";

import { useState } from "react";

const pages = [
  { id: "cover", title: "Cover", href: "/" },
  { id: "introduction", title: "Introduction", href: "/introduction" },
  { id: "about", title: "About", href: "/about" },
  { id: "education", title: "Education", href: "/education" },
  { id: "skills", title: "Skills", href: "/skills" },
  { id: "projects", title: "Projects", href: "/projects" },
  { id: "experience", title: "Experience", href: "/experience" },
  { id: "certificates", title: "Certificates", href: "/certificates" },
  { id: "contact", title: "Contact", href: "/contact" },
];

export default function BookNavigation({
  currentPage = "cover",
  onPageChange,
}) {
  const [isNavigating, setIsNavigating] = useState(false);

  const handlePageChange = (pageId) => {
    if (pageId !== currentPage && !isNavigating) {
      setIsNavigating(true);
      // Shorter delay for smoother transitions
      setTimeout(() => {
        onPageChange?.(pageId);
        // Reset navigation state immediately after route change
        setTimeout(() => setIsNavigating(false), 100);
      }, 150); // Reduced delay for quicker response
    }
  };

  const currentIndex = pages.findIndex((page) => page.id === currentPage);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 flex flex-col items-center space-y-2">
      {/* Ultra-Minimal Navigation - Just Dots */}
      {pages.map((page, index) => (
        <button
          key={`nav-${page.id}`}
          onClick={() => handlePageChange(page.id)}
          disabled={isNavigating}
          className={`relative w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 ${
            index === currentIndex
              ? "bg-gradient-to-r from-yellow-600 to-amber-600 scale-125"
              : "bg-green-400 hover:bg-green-500"
          }`}
          title={`Chapter ${index + 1}: ${page.title}`}
        >
          {index === currentIndex && (
            <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-50" />
          )}
        </button>
      ))}
    </div>
  );
}
