import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      className="mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">📬 Contact</h2>
      <p className="mb-2">Feel free to reach out to me through the following channels:</p>
      <ul className="space-y-2 text-blue-600 dark:text-blue-300">
        <li>Email: <a href="mailto:tipulido0829@gmail.com" className="underline">tipulido0829@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/TIP0205" className="underline">github.com/TIP0205</a></li>
      </ul>
    </motion.section>
  );
};

export default Contact;
