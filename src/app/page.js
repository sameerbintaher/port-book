"use client";

import { useRouter } from "next/navigation";
import BookNavigation from "../components/BookNavigation";

export default function BookCover() {
  const router = useRouter();

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Walnut Wood Desk Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 via-emerald-100/20 to-teal-100/30" />
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-green-300/10 via-transparent to-emerald-200/10" />
        </div>
      </div>

      {/* Book Cover */}
      <div className="relative w-full max-w-4xl h-[700px] lg:h-[800px]">
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

        {/* 3D Forest Green Leather Book Cover */}
        <div className="ml-12 bg-gradient-to-br from-green-900 via-green-800 to-emerald-800 shadow-2xl rounded-r-xl overflow-hidden relative border-r-4 border-green-700 transform-gpu">
          {/* Leather Texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-800/50 via-emerald-800/30 to-green-900/50" />

          {/* Cover Grain Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-green-600/20 via-transparent to-emerald-600/20" />
          </div>

          {/* Cover Content */}
          <div
            className="relative z-20 p-16 lg:p-20 text-center min-h-[600px] lg:min-h-[700px] flex flex-col justify-center"
            style={{ pointerEvents: "auto" }}
          >
            {/* Decorative Embossed Border */}
            <div className="absolute inset-6 border-2 border-yellow-600/30 rounded-xl bg-gradient-to-br from-yellow-100/20 via-transparent to-amber-100/20" />

            {/* Main Title with Gold Embossing Effect */}
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold bg-gradient-to-r from-yellow-100 via-amber-200 to-yellow-100 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
                PORTFOLIO
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 mx-auto rounded-full shadow-lg" />
            </div>

            {/* Subtitle with Elegant Typography */}
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-serif font-medium text-yellow-100 mb-3 drop-shadow-lg">
                Md Obaidullah Bin Taher
              </h2>
              <p className="text-xl text-amber-200 font-serif drop-shadow-md">
                Computer Vision & Full-Stack Developer
              </p>
            </div>

            {/* Inspirational Tagline */}
            <div className="mb-8">
              <p className="text-yellow-100 max-w-3xl mx-auto leading-relaxed text-lg font-serif italic drop-shadow-md">
                &ldquo;Where Innovation Meets Imagination - Crafting Digital
                Experiences That Bridge Research and Reality&rdquo;
              </p>
            </div>

            {/* Elegant Call to Action */}
            <div className="mb-8">
              <a
                href="/introduction"
                onClick={() => console.log("Open Portfolio link clicked")}
                className="inline-block px-10 py-4 bg-gradient-to-r from-yellow-600 to-amber-600 text-yellow-50 rounded-xl font-serif font-bold hover:from-yellow-500 hover:to-amber-500 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105 cursor-pointer z-30 relative no-underline border-2 border-yellow-400/50"
                style={{
                  pointerEvents: "auto",
                  textDecoration: "none",
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                Open Portfolio
              </a>
            </div>

            {/* Elegant Decorative Elements */}
            <div className="flex justify-center space-x-6 mt-8">
              <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-pulse shadow-lg" />
              <div
                className="w-4 h-4 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse shadow-lg"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full animate-pulse shadow-lg"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>

          {/* 3D Gold Gilded Edges */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-500" />
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-yellow-600" />
          <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-yellow-600 via-yellow-500 to-amber-500" />

          {/* Cover Shadow Effect */}
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-black/30 via-black/20 to-transparent" />
        </div>
      </div>

      {/* Realistic Forest Green Shadow Effects */}
      <div className="absolute -bottom-8 -right-8 w-full h-full bg-gradient-to-br from-black/50 via-green-900/40 to-emerald-900/30 rounded-xl blur-xl -z-10 transform-gpu" />
      <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-green-900/30 via-emerald-900/25 to-teal-900/20 rounded-xl blur-lg -z-10 transform-gpu" />
      <div className="absolute -bottom-2 -right-2 w-full h-full bg-gradient-to-br from-black/30 via-transparent to-transparent rounded-xl blur-md -z-10" />

      {/* Opening Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-yellow-200 text-sm mb-2 font-serif drop-shadow-md">
          Click &ldquo;Open Portfolio&rdquo; to begin reading
        </p>
        <div className="text-yellow-300 text-lg drop-shadow-lg">📖</div>
      </div>

      {/* Navigation */}
      <BookNavigation
        currentPage="cover"
        onPageChange={(pageId) => {
          const page = pages.find((p) => p.id === pageId);
          if (page) router.push(page.href);
        }}
      />
    </div>
  );
}
