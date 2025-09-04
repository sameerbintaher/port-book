import BookLayout from "../../components/BookLayout";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "sameerbintaher@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+86 159 0221 9914",
      description: "Call me for quick discussions",
    },
    {
      icon: "📍",
      title: "Address",
      value:
        "Tiangong University, No. 399 BinShuiXi Road, XiQing District, Tianjin 300387, P.R. of China",
      description: "Based in Tianjin, China",
    },
    {
      icon: "🕒",
      title: "Response Time",
      value: "Usually within 24 hours",
      description: "I typically respond very quickly",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sameerbintaher",
      icon: "💻",
      description: "Open source projects and code repositories",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sameerbintaher",
      icon: "💼",
      description: "Professional network and career updates",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/sameerbintaher",
      icon: "📷",
      description: "Personal moments and life updates",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/sameerbintaher",
      icon: "🐦",
      description: "Thoughts, insights, and tech discussions",
    },
  ];

  const collaborationOpportunities = [
    {
      title: "AI & Machine Learning",
      description:
        "Research collaborations, ML model development, and AI applications",
      icon: "🤖",
    },
    {
      title: "Software Development",
      description:
        "Web applications, mobile apps, and full-stack development projects",
      icon: "💻",
    },
    {
      title: "Academic Research",
      description:
        "Joint research papers, conference presentations, and academic partnerships",
      icon: "📚",
    },
    {
      title: "Open Source",
      description:
        "Contributing to open source projects and building developer tools",
      icon: "🔓",
    },
    {
      title: "Mentorship",
      description:
        "Guiding students and junior developers in their learning journey",
      icon: "👨‍🏫",
    },
    {
      title: "Consulting",
      description:
        "Technical consulting for startups and established companies",
      icon: "💡",
    },
  ];

  const coreValues = [
    "Innovation",
    "Collaboration",
    "Excellence",
    "Impact",
    "Growth",
    "Learning",
  ];

  return (
    <BookLayout>
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center py-8">
          <div className="inline-block p-6 bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl border-2 border-yellow-300 mb-8">
            <div className="text-6xl mb-4">📞</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-green-800 font-serif mb-4">
              Let&apos;s Connect
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto rounded-full mb-4" />
            <p className="text-green-700 font-serif text-lg max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate, discuss ideas, or just have a conversation?
              I&apos;m always excited to connect with passionate people and
              explore new opportunities.
            </p>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl border-2 border-green-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="font-bold text-green-800 font-serif text-lg mb-2">
                  {info.title}
                </h3>
                <p className="text-green-700 font-medium font-serif text-sm mb-2 leading-tight">
                  {info.value}
                </p>
                <p className="text-green-600 font-serif text-xs">
                  {info.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-2xl border-2 border-green-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-800 font-serif mb-4">
              🌐 Find Me Online
            </h2>
            <p className="text-green-700 font-serif text-lg">
              Explore my digital presence across different platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl border-2 border-green-200 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 font-serif text-lg mb-1">
                      {social.name}
                    </h4>
                    <p className="text-green-600 font-serif text-sm leading-tight">
                      {social.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Collaboration Opportunities */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-800 font-serif mb-4">
              🤝 Collaboration Opportunities
            </h2>
            <p className="text-green-700 font-serif text-lg max-w-2xl mx-auto">
              I&apos;m passionate about working together on meaningful projects.
              Here are areas where I love to collaborate:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborationOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-yellow-50 p-6 rounded-xl border-2 border-yellow-300 hover:border-green-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-green-800 font-serif mb-3">
                    {opportunity.title}
                  </h3>
                  <p className="text-green-700 font-serif text-sm leading-relaxed">
                    {opportunity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values & CTA */}
        <div className="bg-gradient-to-br from-yellow-50 via-green-50 to-yellow-50 p-10 rounded-2xl border-2 border-yellow-300 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-4 left-4 text-yellow-300 text-6xl opacity-20">
            ✨
          </div>
          <div className="absolute bottom-4 right-4 text-green-300 text-6xl opacity-20">
            🚀
          </div>
          <div className="absolute top-1/2 left-1/4 text-amber-300 text-4xl opacity-20">
            💡
          </div>
          <div className="absolute top-1/3 right-1/4 text-green-300 text-4xl opacity-20">
            🎯
          </div>

          <div className="text-center relative z-10">
            <h2 className="text-3xl font-bold text-green-800 font-serif mb-6">
              🎨 Let&apos;s Create Something Amazing
            </h2>
            <p className="text-green-700 font-serif text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              I believe great things happen when passionate people collaborate.
              Whether you have a groundbreaking idea, need technical expertise,
              or want to explore research opportunities, I&apos;m here to help
              bring your vision to life.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-800 font-serif mb-4">
                My Core Values
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {coreValues.map((value, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-full text-sm font-bold font-serif shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl border-2 border-green-200 shadow-lg">
              <p className="text-green-800 font-serif text-lg italic">
                &ldquo;What story shall we write together?&rdquo;
              </p>
              <div className="mt-4 text-4xl">📖✨</div>
            </div>
          </div>
        </div>
      </div>
    </BookLayout>
  );
}
