"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import BookNavigation from "./BookNavigation";
import PageTransition from "./PageTransition";

export default function BookLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [direction, setDirection] = useState("forward");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const pages = [
    { id: "cover", path: "/", title: "Cover" },
    { id: "introduction", path: "/introduction", title: "Introduction" },
    { id: "about", path: "/about", title: "About" },
    { id: "education", path: "/education", title: "Education" },
    { id: "skills", path: "/skills", title: "Skills" },
    { id: "projects", path: "/projects", title: "Projects" },
    { id: "experience", path: "/experience", title: "Experience" },
    { id: "certificates", path: "/certificates", title: "Certificates" },
    { id: "contact", path: "/contact", title: "Contact" },
  ];

  const currentPageIndex = pages.findIndex((page) => page.path === pathname);
  const currentPage = pages[currentPageIndex] || pages[0];

  const handlePageChange = (pageId) => {
    if (isTransitioning) return;

    const targetPage = pages.find((page) => page.id === pageId);
    if (!targetPage) return;

    const targetIndex = pages.findIndex((page) => page.id === pageId);
    const currentIndex = currentPageIndex;

    setDirection(targetIndex > currentIndex ? "forward" : "backward");
    setIsTransitioning(true);

    // Quick navigation with smooth transition
    setTimeout(() => {
      router.push(targetPage.path);
      setTimeout(() => setIsTransitioning(false), 200);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Walnut Wood Desk Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 via-emerald-100/20 to-teal-100/30" />
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-green-300/10 via-transparent to-emerald-200/10" />
        </div>
      </div>

      {/* Book Container */}
      <div className="relative w-full max-w-5xl h-[800px] lg:h-[900px] perspective-1000">
        {/* 3D Forest Green Leather Book Spine */}
        <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-green-900 via-green-800 to-emerald-800 shadow-2xl rounded-l-xl z-30 border-l-8 border-green-900 transform-gpu">
          {/* Spine Texture */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/50 via-transparent to-green-900/50" />

          {/* Spine Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-yellow-100 text-sm font-serif font-bold tracking-[0.2em] transform -rotate-90 whitespace-nowrap drop-shadow-lg">
              PORTFOLIO
            </div>
          </div>

          {/* Leather Grain Lines */}
          <div className="absolute top-8 left-3 w-1 h-5/6 bg-gradient-to-b from-yellow-600/40 via-yellow-500/50 to-yellow-600/40 rounded-full" />
          <div className="absolute top-12 right-3 w-1 h-4/5 bg-gradient-to-b from-yellow-500/30 via-yellow-400/45 to-yellow-500/30 rounded-full" />
          <div className="absolute top-16 left-4 w-0.5 h-3/4 bg-yellow-600/35 rounded-full" />

          {/* Spine Shadow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
        </div>

        {/* 3D Antique Parchment Pages */}
        <div className="ml-12 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 shadow-2xl rounded-r-xl overflow-hidden relative border-r-4 border-yellow-300 h-full transform-gpu">
          {/* Antique Parchment Texture */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full bg-gradient-to-br from-yellow-100/50 via-transparent to-amber-100/30" />
          </div>

          {/* Page Shadow Effect */}
          <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-black/10 via-black/5 to-transparent" />

          {/* Page Content */}
          <PageTransition isVisible={!isTransitioning} direction={direction}>
            <div className="h-full flex flex-col overflow-hidden">
              {/* Fixed Page Header */}
              <div className="flex-shrink-0 px-10 lg:px-12 py-6 border-b border-gray-200">
                <div className="text-center">
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-md mb-3">
                    <span className="text-gray-600 text-xs font-serif font-medium tracking-wider uppercase">
                      Chapter {currentPageIndex + 1}
                    </span>
                  </div>
                  <h1 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 mb-2">
                    {currentPage.title}
                  </h1>
                  <div className="w-10 h-0.5 bg-gray-300 mx-auto rounded-full" />
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                <div className="px-10 lg:px-12 py-6">
                  {/* Content Container */}
                  <div className="max-w-4xl mx-auto font-serif leading-relaxed text-gray-700">
                    {children}
                  </div>
                </div>
              </div>

              {/* Fixed Page Footer */}
              <div className="flex-shrink-0 px-10 lg:px-12 py-4 border-t border-gray-200 bg-gray-50/50">
                <div className="text-center">
                  <div className="inline-flex items-center space-x-3 px-4 py-2 bg-gray-50 rounded-md">
                    <span className="text-gray-500 text-sm font-serif">
                      Page
                    </span>
                    <span className="text-gray-700 font-serif font-medium">
                      {currentPageIndex + 1}
                    </span>
                    <span className="text-gray-500 text-sm font-serif">of</span>
                    <span className="text-gray-700 font-serif font-medium">
                      {pages.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </PageTransition>

          {/* 3D Gold Gilded Page Edges */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-300" />
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-amber-300 via-yellow-300 to-yellow-400" />
          <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-yellow-400 via-yellow-300 to-amber-300" />
        </div>

        {/* Realistic Forest Green Book Shadow Effects */}
        <div className="absolute -bottom-8 -right-8 w-full h-full bg-gradient-to-br from-black/40 via-green-900/30 to-emerald-900/20 rounded-xl blur-xl -z-10 transform-gpu" />
        <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-green-900/20 via-emerald-900/15 to-teal-900/10 rounded-xl blur-lg -z-10 transform-gpu" />
        <div className="absolute -bottom-2 -right-2 w-full h-full bg-gradient-to-br from-black/20 via-transparent to-transparent rounded-xl blur-md -z-10" />
      </div>

      {/* Enhanced Navigation */}
      <BookNavigation
        currentPage={currentPage.id}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
