import BookLayout from "../../components/BookLayout";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Color Picker - Image Color Analysis Tool",
      description:
        "A Python application that allows users to analyze and pick colors from images with professional-grade features. Built with Tkinter, this tool provides real-time color magnification, smooth zoom capabilities, and precise color selection.",
      image: "/color-picker.jpg",
      technologies: [
        "Python",
        "Tkinter",
        "Image Processing",
        "Color Analysis",
        "OpenCV",
      ],
      features: [
        "Real-time Color Magnification",
        "Smooth Zoom Capabilities",
        "Precise Color Selection",
        "Professional-grade Features",
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Desktop Application",
      year: "2023",
    },
    {
      title: "To-Do with PySide6",
      description:
        "A modern task management application built with Python and PySide6, featuring a clean user interface and efficient task organization capabilities.",
      image: "/todo-app.jpg",
      technologies: ["Python", "PySide6", "SQLite"],
      features: [
        "Clean User Interface",
        "Efficient Task Organization",
        "Modern Design",
        "Task Management",
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Desktop Application",
      year: "2023",
    },
    {
      title: "Document Scanner",
      description:
        "Python-based document scanning application with image processing capabilities for enhanced document digitization and computer vision features.",
      image: "/document-scanner.jpg",
      technologies: ["Python", "OpenCV", "Image Processing"],
      features: [
        "Document Digitization",
        "Image Processing",
        "Computer Vision",
        "Enhanced Scanning",
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Computer Vision",
      year: "2023",
    },
    {
      title: "Sam Motors",
      description:
        "Full-stack MERN application for a car dealership with user authentication, product management, and order processing capabilities.",
      image: "/sam-motors.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        "User Authentication",
        "Product Management",
        "Order Processing",
        "Car Dealership Platform",
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Application",
      year: "2022",
    },
  ];

  const categories = [
    "All",
    "Desktop Application",
    "Computer Vision",
    "Web Application",
  ];

  return (
    <BookLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="text-center border-b-2 border-yellow-300 pb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-green-800 font-serif mb-2">
            My Projects
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto rounded-full" />
          <p className="text-green-700 mt-4 max-w-2xl mx-auto font-serif">
            A showcase of my research projects and technical solutions in AI and
            software development
          </p>
        </div>

        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium font-serif transition-colors ${
                index === 0
                  ? "bg-yellow-600 text-white"
                  : "bg-green-100 text-green-800 hover:bg-green-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-lg border border-green-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-green-200 to-yellow-200 flex items-center justify-center relative">
                <div className="text-yellow-600 text-6xl">
                  <svg
                    className="w-16 h-16"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium font-serif">
                  {project.year}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-green-800 font-serif">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-serif">
                    {project.category}
                  </span>
                </div>

                <p className="text-green-700 mb-4 leading-relaxed font-serif">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-800 mb-2 font-serif">
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-white text-green-700 text-xs rounded border border-green-300 font-serif"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-800 mb-2 font-serif">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-serif"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-yellow-600 to-amber-600 text-white text-sm rounded-lg hover:from-yellow-700 hover:to-amber-700 transition-colors font-serif">
                    View Live
                  </button>
                  <button className="flex-1 px-4 py-2 border border-yellow-600 text-yellow-600 text-sm rounded-lg hover:bg-yellow-50 transition-colors font-serif">
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center py-8 border-t-2 border-yellow-300">
          <h3 className="text-xl font-semibold text-green-800 mb-4 font-serif">
            Interested in Collaboration?
          </h3>
          <p className="text-green-700 mb-6 max-w-2xl mx-auto font-serif">
            I&apos;m passionate about AI research and software development.
            Let&apos;s collaborate on innovative projects that make a
            difference!
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-full font-medium hover:from-yellow-700 hover:to-amber-700 transition-colors shadow-lg hover:shadow-xl font-serif">
            Get In Touch
          </button>
        </div>
      </div>
    </BookLayout>
  );
}
