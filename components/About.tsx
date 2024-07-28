'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.5 // Trigger when 10% of the component is in view
  });

  return (
      <div id="about" className="flex justify-between items-center h-screen">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Initial state: invisible and moved down
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Animate to visible and move up
          transition={{ duration: 0.5 }} // Duration of the animation
          className="flex flex-col"
        >
          <h1 className="text-3xl font-medium">02. About Me</h1>
          <div className="text-left">
            <div className="text-md">
              I currently work at <a href="hitmeup.ai" className="text-sky-800">HitMeUp.ai</a> as a Software Engineering Intern. Previously, I was a Director of Communications for my university's AI club, <a href="hitmeup.ai" className="text-sky-800">Western AI</a>. 
              I have experience working on various freelance projects, building websites and web applications on my own. I am passionate about technology and enjoy learning new things.
            </div>
          </div>
          <ul className="grid grid-cols-2">
              <li className="text-sky-800 text-sm font-bold">React</li>
              <li className="text-sky-800 text-sm font-bold">JavaScript</li>
              <li className="text-sky-800 text-sm font-bold">Express</li>
              <li className="text-sky-800 text-sm font-bold">Python</li>
              <li className="text-sky-800 text-sm font-bold">HTML</li>
              <li className="text-sky-800 text-sm font-bold">CSS</li>
            </ul>
        </motion.div>
      </div>
  );
};
