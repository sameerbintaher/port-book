import BookLayout from "../../components/BookLayout";

export default function CertificatesPage() {
  const certificates = [
    {
      title: "Shanghai-Lingang Cup AI Global Innovation Competition",
      issuer: "Fudan University",
      date: "December 2023",
      recognitionLevel: "International",
      category: "Professional Achievement",
      description:
        "Recognized for participating in this prestigious AI-focused global innovation event, demonstrating excellence in artificial intelligence and innovation.",
      skills: [
        "AI Innovation",
        "Global Competition",
        "Research Excellence",
        "Technology Leadership",
      ],
      verificationUrl: "#",
      badgeColor: "from-yellow-400 to-amber-500",
    },
    {
      title: "Certificate of Honor for CSC",
      issuer: "China Scholarship Council",
      date: "2023",
      recognitionLevel: "National",
      category: "Professional Achievement",
      description:
        "Awarded for exceptional performance as a CSC Scholarship recipient, recognizing academic excellence and research potential.",
      skills: [
        "Academic Excellence",
        "Research Potential",
        "Scholarship Achievement",
        "International Recognition",
      ],
      verificationUrl: "#",
      badgeColor: "from-green-400 to-emerald-500",
    },
    {
      title: "Director of Office of Student Life",
      issuer: "Tiangong University",
      date: "2023",
      recognitionLevel: "Institutional",
      category: "Leadership",
      description:
        "Acknowledged for outstanding leadership and organizational skills as part of the International Student Union, under the School of International Education.",
      skills: [
        "Leadership",
        "Student Union Management",
        "Organizational Skills",
        "Community Building",
      ],
      verificationUrl: "#",
      badgeColor: "from-blue-400 to-blue-600",
    },
    {
      title: "Best Room in the Dormitory",
      issuer: "Tiangong University",
      date: "2023",
      recognitionLevel: "Institutional",
      category: "Special Recognition",
      description:
        "Honored for maintaining excellence and community spirit in dormitory life, setting an example for fellow students.",
      skills: [
        "Community Spirit",
        "Dormitory Excellence",
        "Leadership by Example",
        "Student Life",
      ],
      verificationUrl: "#",
      badgeColor: "from-purple-400 to-purple-600",
    },
  ];

  const categories = [
    {
      name: "Professional Achievement",
      count: 2,
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      name: "Leadership",
      count: 1,
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Special Recognition",
      count: 1,
      color: "bg-purple-100 text-purple-800",
    },
  ];

  return (
    <BookLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="text-center border-b-2 border-yellow-300 pb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-green-800 font-serif mb-2">
            Certificates & Achievements
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto rounded-full" />
          <p className="text-green-700 mt-4 max-w-2xl mx-auto font-serif">
            Professional achievements, recognitions, and leadership awards
            showcasing my excellence
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "4", label: "Achievements" },
            { number: "3", label: "Recognition Levels" },
            { number: "2023", label: "Achievement Year" },
            { number: "100%", label: "Commitment" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-lg border border-green-200">
                <div className="text-3xl font-bold text-yellow-600 mb-2 font-serif">
                  {stat.number}
                </div>
                <div className="text-green-700 text-sm font-serif">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold text-green-800 font-serif text-center mb-6">
            Achievement Categories
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium font-serif ${category.color}`}
              >
                {category.name} ({category.count})
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-lg border border-green-200 hover:shadow-md transition-shadow"
            >
              {/* Certificate Badge */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${cert.badgeColor} rounded-full flex items-center justify-center mb-4 mx-auto`}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Certificate Details */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-green-800 font-serif mb-2">
                  {cert.title}
                </h3>
                <p className="text-green-700 font-medium font-serif mb-1">
                  {cert.issuer}
                </p>
                <p className="text-green-600 text-sm font-serif">
                  Date: {cert.date}
                </p>
                <div className="flex justify-center gap-2 mt-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-serif ${
                      cert.recognitionLevel === "International"
                        ? "bg-yellow-100 text-yellow-800"
                        : cert.recognitionLevel === "National"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {cert.recognitionLevel}
                  </span>
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-serif ${
                      cert.category === "Professional Achievement"
                        ? "bg-purple-100 text-purple-800"
                        : cert.category === "Leadership"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {cert.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-green-800 text-sm mb-4 leading-relaxed text-center font-serif">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-green-800 mb-2 text-center font-serif">
                  Demonstrated Skills:
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded border border-yellow-300 font-serif"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="text-center">
                <button className="w-full px-4 py-2 bg-gradient-to-r from-yellow-600 to-amber-600 text-white text-sm rounded-lg hover:from-yellow-700 hover:to-amber-700 transition-colors font-serif">
                  View Achievement
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Impact */}
        <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold text-green-800 font-serif text-center mb-6">
            Achievement Impact & Recognition
          </h2>

          <div className="grid lg:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2 font-serif">
                International
              </div>
              <div className="text-green-700 font-serif">AI Competition</div>
              <div className="text-green-600 text-sm mt-1 font-serif">
                Global Recognition
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2 font-serif">
                CSC Honor
              </div>
              <div className="text-green-700 font-serif">
                Scholarship Excellence
              </div>
              <div className="text-green-600 text-sm mt-1 font-serif">
                National Award
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2 font-serif">
                Leadership
              </div>
              <div className="text-green-700 font-serif">
                Student Union Director
              </div>
              <div className="text-green-600 text-sm mt-1 font-serif">
                Institutional Excellence
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-4 rounded-lg border border-green-200">
              <p className="text-green-700 font-serif text-sm">
                "From international AI competitions to leadership excellence,
                these achievements reflect my commitment to academic and
                professional growth in research and technology."
              </p>
            </div>
          </div>
        </div>
      </div>
    </BookLayout>
  );
}
