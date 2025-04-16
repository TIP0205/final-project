import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      className="mt-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-4">💼 Experience</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-lg">Virtual Asistant</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">Summit | 2016-2018</p>
          <p>Administrative duties such as managing emails, scheduling appointments, organizing digital files, and booking travel.<br/> Assist with communication tasks like responding to messages, handling customer service, and drafting correspondence. <br/>Support marketing efforts by managing social media accounts, creating content, running email campaigns, and designing basic graphics.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
