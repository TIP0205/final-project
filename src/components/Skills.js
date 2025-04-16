import React from 'react';
import { motion } from 'framer-motion';

const skills = ['JavaScript', 'React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Git'];

const Skills = () => {
  return (
    <motion.section
      className="mt-8"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">🛠️ Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium dark:bg-blue-800 dark:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
