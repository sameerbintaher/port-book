import BookLayout from "../../components/BookLayout";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Java", level: 75 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "MERN Stack", level: 85 },
        { name: "Django", level: 80 },
        { name: "Flask", level: 75 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Data & AI",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Image Quality Assessment", level: 80 },
        { name: "Contrastive Learning", level: 75 },
        { name: "Computer Vision", level: 85 },
      ],
    },
    {
      title: "Tools & Software",
      skills: [
        { name: "MATLAB", level: 85 },
        { name: "AutoCAD", level: 80 },
        { name: "Origin", level: 75 },
        { name: "VESTA", level: 70 },
        { name: "Git/GitHub", level: 85 },
      ],
    },
  ];

  return (
    <BookLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="text-center border-b-2 border-yellow-300 pb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-green-800 font-serif mb-2">
            Skills & Expertise
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto rounded-full" />
          <p className="text-green-700 mt-4 max-w-2xl mx-auto font-serif">
            A comprehensive overview of my technical expertise and proficiency
            levels in programming, web development, and AI research
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-lg border border-green-200"
            >
              <h2 className="text-xl font-semibold text-green-800 mb-4 font-serif text-center">
                {category.title}
              </h2>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-green-800 font-medium font-serif">
                        {skill.name}
                      </span>
                      <span className="text-yellow-600 text-sm font-semibold font-serif">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-yellow-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-yellow-500 to-amber-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Leadership */}
        <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold text-green-800 mb-4 font-serif text-center">
            Leadership & Soft Skills
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Team Leadership",
              "Event Hosting",
              "Technical Writing",
              "Problem Solving",
              "Project Management",
              "Research & Analysis",
              "Communication",
              "Cultural Programs",
            ].map((skill, index) => (
              <div key={index} className="text-center">
                <div className="bg-white border border-yellow-300 rounded-lg p-3 hover:bg-yellow-50 transition-colors">
                  <span className="text-yellow-800 text-sm font-medium font-serif">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research & Learning Focus */}
        <div className="text-center py-8 border-t-2 border-yellow-300">
          <h3 className="text-xl font-semibold text-green-800 mb-4 font-serif">
            Current Research & Development Focus
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Advanced Computer Vision",
              "Deep Learning Models",
              "Image Processing Algorithms",
              "AI System Integration",
              "Research Publication",
              "International Collaboration",
            ].map((focus, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-full text-sm font-medium font-serif"
              >
                {focus}
              </span>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-green-700 font-serif text-sm italic">
              &ldquo;Bridging cutting-edge AI research with practical
              applications for global impact&rdquo;
            </p>
          </div>
        </div>
      </div>
    </BookLayout>
  );
}
