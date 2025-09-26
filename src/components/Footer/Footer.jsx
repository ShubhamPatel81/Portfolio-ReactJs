import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode, SiLinktree } from "react-icons/si";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Shubham Patel</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Achivement", id: "achivement" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaTwitter />,
              link: "https://x.com/Shubham07132581",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/shubham-patel-8b296b243/",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/ShubhamPatel81",
            },
            {
              icon: <SiLeetcode />,
              link: "https://leetcode.com/u/Shubham-Patel/",
            },
            {
              icon: <SiLinktree />,
              link: "https://linktr.ee/Shubham_Patel81?utm_source=linktre",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 Shubham Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
