import React from "react";
import { ExternalLink } from "lucide-react";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "AI-Resume Builder",
      description:
        "ZenRes is a React + Vite web application that helps users build clean, professional resumes. Users fill out forms for personal details, experience, skills, and more, then choose from multiple templates. An AI assistant (powered by Google Gemini) can analyze your inputs and suggest improvements—like a summary, additional skills, or bullet-point experiences—which you can review and merge into your resume before downloading as a PDF.",
      link: "https://github.com/Kirmada101",
      technologies: ["React", "Tailwindcss", "Responsive Design"],
    },
    {
      id: 2,
      title: "Music Player",
      description:
        "Developed a basic audio player with play/pause controls and song switching. Focused on media handling and user-friendly UI. Practiced event handling and dynamic updates in JavaScript.",
      link: "https://github.com/Kirmada101",
      technologies: ["JavaScript", "CSS", "HTML"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS.",
      link: "https://github.com/Kirmada101",
      technologies: ["React", "Tailwind CSS", "Responsive Design"],
    },
    {
      id: 4,
      title: "Pinterest-Clone",
      description:
        "Built a responsive Pinterest-style image gallery. Implemented search functionality to filter images based on user input. Practiced DOM manipulation, layout structuring, and JavaScript interactivity",
      link: "https://github.com/Kirmada101",
      technologies: ["JavaScript", "CSS", "HTML"],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 ">
          <h2 className="text-4xl p-2 font-bold bg-gradient-to-r from-teal-600 via-gray-500 to-black bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
            All projects that I have made
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((projects, index) => (
            <div
              key={projects.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-2 hover:border-teal-500 transition-all duration-200 p-5"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-5 ">
                {projects.title}
              </h2>
              <p className="text-gray-600 mb-5">{projects.description}</p>
              <div className="flex flex-wrap gap-4 mb-2">
                {projects.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div>
                <a
                  href={projects.link}
                  target="_blank"
                  className="inline-flex items-center text-teal-600 font-semibold transition-all duration-200"
                >
                  View Project
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
