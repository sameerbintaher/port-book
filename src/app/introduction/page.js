"use client";

import { useRouter } from "next/navigation";
import BookLayout from "../../components/BookLayout";

export default function IntroductionPage() {
  const router = useRouter();
  return (
    <BookLayout>
      <div className="space-y-8">
        {/* Decorative Initial */}
        <div className="text-center mb-6">
          <div className="inline-block w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
            <span className="text-xl font-serif font-bold text-gray-100">
              M
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold text-gray-800 leading-tight">
            Hi, I'm Md Obaidullah Bin Taher (Sameer)
          </h1>

          <div className="w-16 h-0.5 bg-gray-300 mx-auto rounded-full" />

          <p className="text-base text-gray-600 font-serif max-w-2xl mx-auto leading-relaxed">
            Master's Student in Computer Science • Computer Vision & Image
            Processing Enthusiast • Full-Stack Developer
          </p>
        </div>

        {/* Introduction */}
        <div className="text-center space-y-3">
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto font-serif">
            Welcome to my digital portfolio. I&apos;m passionate about computer
            vision, image processing, and full-stack development. Explore my
            journey through innovative projects and academic achievements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/projects")}
              className="px-6 py-2 bg-gray-800 text-white rounded-lg font-serif font-medium hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
            >
              View My Projects
            </button>
            <button
              onClick={() => {
                // Download resume functionality - placeholder for now
                alert(
                  "Resume download will be available soon! Please check back later."
                );
                // When you have your resume ready, place it in the public folder as 'resume.pdf'
                // const link = document.createElement('a');
                // link.href = '/resume.pdf';
                // link.download = 'Md_Obaidullah_Bin_Taher_Resume.pdf';
                // link.click();
              }}
              className="px-6 py-2 border border-gray-400 text-gray-700 rounded-lg font-serif font-medium hover:bg-gray-50 transition-colors"
            >
              Download Resume
            </button>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h2 className="text-base font-serif font-bold text-gray-800 text-center mb-3">
            Table of Contents
          </h2>

          <div className="space-y-2 text-gray-700 font-serif">
            {[
              {
                chapter: "1",
                title: "Introduction",
                description: "Welcome and table of contents",
              },
              {
                chapter: "2",
                title: "About Me",
                description: "Personal introduction and background",
              },
              {
                chapter: "3",
                title: "Education",
                description: "Academic journey and qualifications",
              },
              {
                chapter: "4",
                title: "Skills",
                description: "Technical expertise and competencies",
              },
              {
                chapter: "5",
                title: "Projects",
                description: "Portfolio of completed work",
              },
              {
                chapter: "6",
                title: "Experience",
                description: "Professional career timeline",
              },
              {
                chapter: "7",
                title: "Certificates",
                description: "Professional certifications",
              },
              {
                chapter: "8",
                title: "Contact",
                description: "Get in touch and connect",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-2 rounded hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-500 font-serif text-sm w-8">
                  {item.chapter}
                </span>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-serif">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="text-center py-3">
          <p className="text-gray-600 mb-2 font-serif text-sm">
            Use the navigation to explore my portfolio
          </p>
          <div className="text-gray-500 text-lg">👇</div>
        </div>
      </div>
    </BookLayout>
  );
}
