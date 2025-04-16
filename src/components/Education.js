import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section
      className="mt-8"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-4">🎓 Education</h2>
      <ul className="space-y-4">
        <li>
          <p className="font-medium">Bachelor of Science in Information Technology Major in NETSEC</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">University of the Cordilleras | 2026 (Expected)</p>
        </li>
        <li>
          <p className="font-medium">Northridge Academy Inc.</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">Northridge Academy Inc. | 2012</p>
        </li>
      </ul>
    </motion.section>
  );
};

export default Education;
