import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaPython,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "React.js", icon: <FaReact className="text-sky-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-800" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Problem Solving", icon: <FaCode className="text-green-500" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center pt-28 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white border-[0.5px] border-gray-400 rounded-xl p-6 flex flex-col items-center justify-center transition-transform duration-500 transform hover:translate-y-[-4px] hover:shadow-black"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-500 transition-colors">
                {skill.name}
              </h3>
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-500 opacity-0 group-hover:opacity-10 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
