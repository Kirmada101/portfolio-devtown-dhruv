import { useState } from "react";

export default function Skills() {
  const [skill, setSkill] = useState("technical");
  const skills = {
    technical: [
      { name: "Javascript", prof: 90 },
      { name: "React", prof: 85 },
      { name: "Nodejs", prof: 55 },
      { name: "Tailwindcss", prof: 89 },
    ],
    soft: [
      { name: "Communication", prof: 66 },
      { name: "Team player", prof: 74 },
      { name: "Adaptable", prof: 83 },
      { name: "Creative", prof: 95 },
    ],
  };

  const getProfLabel = (prof) => {
    if (prof >= 90) return "Expert";
    if (prof >= 75) return "Advanced";
    if (prof >= 60) return "Intermediate";
    return "Beginner";
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 via-gray-600 to-black bg-clip-text text-transparent p-2">
            My Skills
          </h2>
          <p className="mt-5 text-xl text-gray-600">
            A comprehensive overview of my technical expertise and professional
            capabilities
          </p>
        </div>

        {/* toggle button */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setSkill("technical")}
            className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
              skill == "technical"
                ? "bg-gradient-to-r from-teal-600 to-black text-white shadow-lg"
                : "text-gray-600 hover:gray-800"
            }`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setSkill("soft")}
            className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
              skill == "soft"
                ? "bg-gradient-to-r from-teal-600 to-black text-white shadow-lg"
                : "text-gray-600 hover:gray-800"
            }`}
          >
            Soft Skills
          </button>
        </div>

        {/* map to show output */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills[skill].map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-600">
                  {skill.name}
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gary-700">
                    {getProfLabel(skill.prof)}
                  </span>
                  <span className="text-sm font-semibold text-teal-600">
                    {skill.prof}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-teal-600 via-gray-600 to-black rounded-full transition-all duration-500"
                    style={{ width: `${skill.prof}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
