import React from "react";

export default function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 p-6">
      <div className="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8 py-16">
        {/* Hero section */}
        <div className="text-center space-y-8 mb-40">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-black via-gray-600">
            Hi, I'm Dhruv Batham
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-600">
            I’m a passionate and detail-oriented frontend developer with a
            strong foundation in React, Vite, and modern JavaScript ecosystems.
            I enjoy building intuitive, performant, and user-centric web
            applications that solve real-world problems.
          </p>
        </div>
        {/* profile image */}
        <div className="relative flex items-center justify-center mb-16 ">
          <div className="absolute insert-0 bg-gradient-to-r from-teal-500 via-gray-700 to-black rounded-full blur-sm opacity-50 hover:opacity-90 hover:blur-none transition duration-300">
            <img
              className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white  w-48 h-48 object-cover"
              src="https://images.pexels.com/photos/29500254/pexels-photo-29500254/free-photo-of-classic-station-clock-in-indoor-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="profile image"
            />
          </div>
        </div>
        {/* professional bg */}
        <div className="bg-white shadow-md mb-16 mt-40 p-6 rounded-md">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Professional Journey
          </h1>
          <div className="space-y-6 text-left max-w-4xl mx-auto">
            <p className="text-lg text-gray-600">
              My journey into web development began with a strong curiosity for
              how things work on the web — from simple landing pages to dynamic,
              data-driven applications.
            </p>
            <p className="text-lg text-gray-600">
              Over time, I honed my skills in HTML, CSS, JavaScript, and
              eventually progressed into modern frameworks like React, powered
              by tools such as Vite, Tailwind CSS, and component-driven
              architecture.
            </p>
          </div>
        </div>
        {/* skills section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h1 className="text-2xl text-teal-500 font-semibold mb-4">
              Frontend Development
            </h1>
            <p className="text-lg text-gray-600">
              Crafting responsive and performant user interfaces using React,
              Vite, Tailwind CSS, and modern component-driven architecture. I
              specialize in building scalable, interactive web apps with smooth
              user experiences.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h1 className="text-2xl text-cyan-500  font-semibold mb-4">
              AI-Powered Tools
            </h1>
            <p className="text-lg text-gray-600">
              Integrating AI technologies like Gemini API, OpenAI, and LLMs into
              practical apps — such as the AI Resume Builder — to enhance user
              productivity and automate smart suggestions with real-world
              impact.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h1 className="text-2xl text-blue-500 font-semibold mb-4">
              Backend & APIs
            </h1>
            <p className="text-lg text-gray-600">
              Experienced in building RESTful APIs and backend services using
              Node.js, Express, and Firebase. I focus on clean architecture,
              secure data flow, and efficient database communication.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h1 className="text-2xl text-indigo-500 font-semibold mb-4">
              UI/UX Design
            </h1>
            <p className="text-lg text-gray-600">
              Designing intuitive and accessible interfaces with a user-first
              mindset. I blend visual clarity with usability principles to
              ensure every feature not only works but feels seamless.
            </p>
          </div>
        </div>

        {/* professionl interest */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl text-teal-600 font-semibold">
                Open Source Contribution
              </h3>
              <p className="text-lg text-gray-800 ">
                I enjoy collaborating on tools, components, and utilities that
                help developers build faster and better.
              </p>
            </div>
            <div className="space-y-3 ">
              <h3 className="text-2xl text-cyan-600 font-semibold">
                Tech Community
              </h3>
              <p className="text-lg text-gray-800 ">
                Actively involved in developer communities and forums — whether
                it's sharing code snippets or helping others troubleshoot.
              </p>
            </div>
            <div className="space-y-3 ">
              <h3 className="text-2xl text-blue-600 font-semibold">
                Mentorship
              </h3>
              <p className="text-lg text-gray-800 ">
                I love helping fellow developers, especially those just starting
                their journey.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-600">
                Always exploring new technologies and methodologies to stay at
                the forefront of web development
              </p>
            </div>
          </div>
        </div>
        {/* call to action      */}
        <div className="bg-gradient-to-r from-teal-600 via-gray-600 to-black py-12 px-5 text-white rounded-xl text-center">
          <h1 className="text-4xl font-semibold mb-6">Let's Work Together</h1>
          <p className="text-xl mx-auto mb-8 max-w-2xl mb-5">
            Let’s connect and create something meaningful together.
          </p>
          <a
            href="#contact"
            className="inline-block border-2 px-8 py-3 rounded-xl font-semibold hover:opacity-80 hover:bg-white hover:text-teal-600 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
