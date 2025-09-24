// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-2 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-9 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-sm sm:text-3xl font-semibold text-gray-500 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={100}
            scale={1}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3] gap-2 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center space-x-3 
             bg-transparent border-2 border-gray-700 rounded-3xl 
             py-1 px- w-full overflow-hidden"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-2 h-2 sm:w-8 sm:h-8 object-contain flex-shrink-0"
                  />
                  <span className="text-sm sm:text-base text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
