import BookLayout from "../../components/BookLayout";

export default function AboutPage() {
  return (
    <BookLayout>
      <div className="space-y-8">
        {/* Introduction Section */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-xl font-serif font-bold text-green-800 mb-4">
            Introduction
          </h2>
          <p className="text-green-700 leading-relaxed font-serif">
            I am a Bangladeshi computer scientist currently pursuing a Masters
            degree at Tiangong University, China. My academic and professional
            journey combines research in computer vision, AI, and image
            processing with practical experience in full-stack web development.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-xl font-serif font-bold text-green-800 mb-4">
            My Mission
          </h2>
          <p className="text-green-700 leading-relaxed font-serif">
            My goal is to bridge the gap between AI research and real-world
            applications while contributing to projects that improve human life
            and global connectivity.
          </p>
        </div>

        {/* Personal Note Section */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-xl font-serif font-bold text-green-800 mb-4">
            Personal Note
          </h2>
          <p className="text-green-700 leading-relaxed font-serif">
            Outside of research, I actively participate in university
            leadership, dormitory management, and student cultural programs,
            which help me grow as both a professional and a community leader.
          </p>
        </div>

        {/* Skills Overview */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-xl font-serif font-bold text-green-800 mb-4">
            Expertise Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-serif font-semibold text-green-800 mb-2">
                Research Focus
              </h3>
              <ul className="space-y-1 text-green-700 font-serif text-sm">
                <li>• Computer Vision & Image Processing</li>
                <li>• Artificial Intelligence (AI)</li>
                <li>• Machine Learning Algorithms</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-green-800 mb-2">
                Technical Skills
              </h3>
              <ul className="space-y-1 text-green-700 font-serif text-sm">
                <li>• Full-Stack Web Development</li>
                <li>• Python Programming</li>
                <li>• Data Analysis & Visualization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education & Location */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-xl font-serif font-bold text-green-800 mb-4">
            Education & Background
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-serif font-semibold text-green-800">
                  Masters in Computer Science
                </div>
                <div className="text-sm text-green-600 font-serif">
                  Tiangong University, China
                </div>
              </div>
              <div className="text-sm text-green-500 font-serif">Current</div>
            </div>
            <div className="border-t border-green-300 pt-3">
              <div className="font-serif font-semibold text-green-800">
                Nationality
              </div>
              <div className="text-sm text-green-600 font-serif">
                Bangladeshi
              </div>
            </div>
          </div>
        </div>
      </div>
    </BookLayout>
  );
}
