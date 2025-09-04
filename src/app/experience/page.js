import BookLayout from "../../components/BookLayout";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Researcher",
      company: "AILAB",
      institution: "Tiangong University",
      period: "2023 – Present",
      type: "Research",
      status: "Current",
      description:
        "Leading advanced research in Computer Vision and Pattern Recognition (CVPR), focusing on cutting-edge image processing and contrastive learning methodologies.",
      responsibilities: [
        "Conducting research in Computer Vision and Pattern Recognition",
        "Developing AI models for image processing applications",
        "Implementing contrastive learning algorithms",
        "Optimizing model efficiency and accuracy",
        "Collaborating on AI deployment projects",
      ],
      achievements: [
        "Improved model accuracy by 15% through algorithm optimization",
        "Published research findings in computer vision domain",
        "Developed novel contrastive learning approaches",
      ],
      technologies: ["Python", "PyTorch", "OpenCV", "TensorFlow", "CVPR"],
    },
    {
      title: "Manager",
      company: "Tiangong University International Dormitory",
      institution: "Tiangong University",
      period: "2023 – Present",
      type: "Management",
      status: "Current",
      description:
        "Managing comprehensive operations for international student accommodation, ensuring optimal living conditions and seamless administrative processes.",
      responsibilities: [
        "Managing daily operations for 400+ international students",
        "Implementing Student Management System for efficient operations",
        "Maintaining safe and productive living environment",
        "Coordinating with faculty for regular reporting",
        "Overseeing maintenance and facility management",
      ],
      achievements: [
        "Successfully managed 400+ international students",
        "Implemented digital management system",
        "Maintained 99% student satisfaction rate",
      ],
      technologies: [
        "Management Systems",
        "Database Management",
        "Process Optimization",
      ],
    },
    {
      title: "Admissions Assistant",
      company: "Tiangong University Admission Office",
      institution: "Tiangong University",
      period: "2023 – Present",
      type: "Education Support",
      status: "Current",
      description:
        "Supporting international student recruitment and admissions processes, facilitating smooth transitions for prospective students.",
      responsibilities: [
        "Assisting prospective international students with applications",
        "Providing comprehensive admission requirement information",
        "Facilitating communication between applicants and administration",
        "Supporting documentation and verification processes",
        "Conducting orientation sessions for new students",
      ],
      achievements: [
        "Processed 200+ international applications",
        "Maintained 95% application completion rate",
        "Streamlined admission communication process",
      ],
      technologies: [
        "Documentation Systems",
        "Communication Platforms",
        "Process Management",
      ],
    },
    {
      title: "Program Host and Coordinator",
      company: "Event Coordination",
      institution: "Various Venues",
      period: "Ongoing",
      type: "Event Management",
      status: "Active",
      description:
        "Organizing and hosting cultural and academic events, fostering community engagement and cross-cultural understanding.",
      responsibilities: [
        "Organizing cultural events (Mid-Autumn Festival, Spring Festival)",
        "Hosting academic and social gatherings",
        "Coordinating with diverse student groups",
        "Managing event logistics and planning",
        "Facilitating community building initiatives",
      ],
      achievements: [
        "Successfully organized 10+ major events",
        "Engaged 500+ participants across events",
        "Built strong community connections",
      ],
      technologies: ["Event Planning", "Public Speaking", "Team Coordination"],
    },
  ];

  return (
    <BookLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="text-center border-b-2 border-yellow-300 pb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-green-800 font-serif mb-2">
            Professional Experience
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto rounded-full" />
          <p className="text-green-700 mt-4 max-w-2xl mx-auto font-serif">
            A journey through my research, management, and community leadership
            roles
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-yellow-500 to-green-300"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Experience Card */}
              <div className="ml-16 bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-lg border border-green-200 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 font-serif">
                      {exp.title}
                    </h3>
                    <p className="text-green-700 font-medium font-serif">
                      {exp.company}
                    </p>
                    {exp.institution && (
                      <p className="text-green-600 text-sm font-serif">
                        {exp.institution}
                      </p>
                    )}
                  </div>
                  <div className="text-right mt-2 lg:mt-0">
                    <span className="text-green-600 text-sm font-medium font-serif">
                      {exp.period}
                    </span>
                    <div className="mt-1">
                      <span
                        className={`px-2 py-1 text-xs rounded-full font-serif ${
                          exp.status === "Current"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {exp.status}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-green-800 mb-4 leading-relaxed font-serif">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                {exp.responsibilities && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-800 mb-2 font-serif">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li
                          key={respIndex}
                          className="text-green-700 text-sm flex items-start font-serif"
                        >
                          <span className="text-yellow-500 mr-2">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-800 mb-2 font-serif">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
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

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-green-800 mb-2 font-serif">
                    Technologies & Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full border border-yellow-300 font-serif"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Impact Summary */}
        <div className="mt-12 pt-8 border-t-2 border-yellow-300">
          <h2 className="text-xl font-semibold text-green-800 font-serif mb-6 text-center">
            Professional Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-serif font-semibold text-green-800 mb-4">
                Research Excellence
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-green-700 font-serif text-sm">
                    Model Accuracy Improvement
                  </span>
                  <span className="text-yellow-700 font-semibold font-serif">
                    15%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700 font-serif text-sm">
                    Published Research
                  </span>
                  <span className="text-yellow-700 font-semibold font-serif">
                    Computer Vision Domain
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-serif font-semibold text-green-800 mb-4">
                Leadership & Management
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-green-700 font-serif text-sm">
                    Students Managed
                  </span>
                  <span className="text-yellow-700 font-semibold font-serif">
                    400+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700 font-serif text-sm">
                    Student Satisfaction
                  </span>
                  <span className="text-yellow-700 font-semibold font-serif">
                    99%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-4 rounded-lg border border-green-200">
              <p className="text-green-700 font-serif text-sm">
                &ldquo;Bridging cutting-edge AI research with practical
                leadership and community building to create meaningful impact in
                education and technology.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </BookLayout>
  );
}
