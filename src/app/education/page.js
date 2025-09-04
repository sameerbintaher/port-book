import BookLayout from "../../components/BookLayout";

export default function EducationPage() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tiangong University",
      period: "2023 – Present",
      location: "Tianjin, China",
      description:
        "Advanced research in computer vision and pattern recognition with focus on deep learning applications.",
      achievements: [
        "CSC Scholarship Recipient",
        "Computer Vision Research Focus",
        "AI & Machine Learning Specialization",
      ],
      status: "In Progress",
      scholarship: "Chinese Government Scholarship (CSC)",
    },
    {
      degree: "Bachelor of Science in Computer Science and Technology",
      institution: "Tiangong University",
      period: "2019 – 2023",
      location: "Tianjin, China",
      description:
        "Comprehensive foundation in computer science fundamentals, algorithms, and software engineering.",
      achievements: [
        "Academic Excellence Award",
        "Dean's List Recognition",
        "Software Development Projects",
      ],
      status: "Completed",
      relevantCourses: [
        "Algorithms",
        "Data Structures",
        "Artificial Intelligence",
        "Image Processing",
        "Computer Vision",
        "Machine Learning",
        "Software Engineering",
      ],
    },
    {
      degree: "High School Certificate",
      institution: "Chittagong Engineering University School and College",
      period: "2015 – 2017",
      location: "Chittagong, Bangladesh",
      description:
        "Strong foundation in science and mathematics with focus on STEM subjects.",
      achievements: [
        "Science Excellence Award",
        "Mathematics Competition Winner",
        "Physics Olympiad Participant",
      ],
      status: "Completed",
    },
    {
      degree: "Secondary School Certificate",
      institution: "Chittagong Engineering University School and College",
      period: "2010 – 2015",
      location: "Chittagong, Bangladesh",
      description:
        "Comprehensive secondary education with strong academic performance and character development.",
      achievements: [
        "Academic Excellence",
        "Leadership Development",
        "Extracurricular Activities",
      ],
      status: "Completed",
    },
    {
      degree: "Primary School Certificate",
      institution: "Nazarer Tilla Abdul Aziz Government Primary School",
      period: "2006 – 2010",
      location: "Rangunia, Chittagong, Bangladesh",
      description:
        "Strong foundational education building essential learning skills and academic excellence.",
      achievements: [
        "Academic Foundation Excellence",
        "Early Learning Recognition",
        "Character Development Award",
      ],
      status: "Completed",
    },
  ];

  return (
    <BookLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="text-center border-b-2 border-yellow-300 pb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-green-800 font-serif mb-2">
            Education
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto rounded-full" />
          <p className="text-green-700 mt-4 max-w-2xl mx-auto font-serif">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline Connector */}
              {index < education.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-yellow-500 to-green-300"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Education Card */}
              <div className="ml-16 bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-lg border border-green-200 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 font-serif">
                      {edu.degree}
                    </h3>
                    <p className="text-green-700 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-green-600 text-sm">{edu.location}</p>
                  </div>
                  <div className="text-right mt-2 lg:mt-0">
                    <span className="text-green-600 text-sm font-medium font-serif">
                      {edu.period}
                    </span>
                    <div
                      className={`text-sm font-semibold mt-1 ${
                        edu.status === "In Progress"
                          ? "text-amber-600"
                          : "text-green-700"
                      } font-serif`}
                    >
                      {edu.status}
                    </div>
                    {edu.scholarship && (
                      <div className="text-yellow-700 font-semibold text-sm mt-1 font-serif">
                        {edu.scholarship}
                      </div>
                    )}
                    {edu.gpa && (
                      <div className="text-green-700 font-semibold text-sm mt-1 font-serif">
                        {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-green-800 mb-4 leading-relaxed font-serif">
                  {edu.description}
                </p>

                {/* Achievements */}
                {edu.achievements && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-800 mb-2 font-serif">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-green-700 text-sm flex items-start font-serif"
                        >
                          <span className="text-yellow-500 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Relevant Courses */}
                {edu.relevantCourses && (
                  <div>
                    <h4 className="text-sm font-semibold text-green-800 mb-2 font-serif">
                      Relevant Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full border border-yellow-300 font-serif"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Journey Summary */}
        <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold text-green-800 font-serif text-center mb-6">
            Academic Journey & Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-serif font-semibold text-green-800 mb-4">
                Research & Specialization
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-serif font-semibold text-green-700 mb-2">
                    Master&apos;s Research Focus
                  </h4>
                  <ul className="text-sm text-green-600 font-serif space-y-1">
                    <li>• Computer Vision & Pattern Recognition</li>
                    <li>• Deep Learning Applications</li>
                    <li>• AI & Machine Learning</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-serif font-semibold text-green-700 mb-2">
                    Undergraduate Foundation
                  </h4>
                  <ul className="text-sm text-green-600 font-serif space-y-1">
                    <li>• Algorithms & Data Structures</li>
                    <li>• Software Engineering</li>
                    <li>• Computer Science Fundamentals</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-lg font-serif font-semibold text-yellow-800 mb-4">
                Notable Achievements
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-serif font-semibold text-yellow-700 mb-2">
                    Scholarships & Awards
                  </h4>
                  <ul className="text-sm text-yellow-600 font-serif space-y-1">
                    <li>• CSC Scholarship Recipient</li>
                    <li>• Academic Excellence Award</li>
                    <li>• Dean&apos;s List Recognition</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-serif font-semibold text-yellow-700 mb-2">
                    Competition & Recognition
                  </h4>
                  <ul className="text-sm text-yellow-600 font-serif space-y-1">
                    <li>• Science Excellence Award</li>
                    <li>• Mathematics Competition Winner</li>
                    <li>• Physics Olympiad Participant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-serif font-semibold text-green-800 mb-2">
                Educational Foundation
              </h4>
              <p className="text-green-700 font-serif text-sm">
                &ldquo;From primary school excellence in Bangladesh to advanced
                research in computer science at Tiangong University, China -
                building a strong foundation for innovation in AI and
                technology.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </BookLayout>
  );
}
