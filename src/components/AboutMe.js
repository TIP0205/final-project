import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';

const AboutMe = () => {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center gap-8 mt-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img 
        src={profilePic}
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-lg"
      />
      <div className="text-left">
        <h2 className="text-3xl font-semibold mb-4">Hi there! 👋 I'm Tristan Ira</h2>
        <p className="text-lg leading-relaxed max-w-xl">
          I'm an IT student with a strong interest in frontend development and user experience design. I'm currently learning React, Tailwind CSS, and JavaScript, and I love building clean, responsive interfaces.
        </p>
        <p className="mt-4 text-lg leading-relaxed max-w-xl">
          My goal is to grow as a developer through real-world projects, internships, and collaboration. Outside of tech, I enjoy photography, reading about new gadgets, and exploring the creative side of design.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
