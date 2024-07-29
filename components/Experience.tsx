'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experience = [
  {
    title: 'Software Engineering Intern @ HitMeUp.ai',
    date: 'May 2024 - PRESENT',
    description: (
      <ul className="list-disc pl-5">
        <li>Developed a web application using Django</li>
        <li>Implemented a chat widget feature using JavaScript that can be embedded on different websites</li>
        <li>Designed and developed the settings page dealing with front end and backend capabilities</li>
      </ul>
    ),
  },
  {
    title: 'Senior Director of Communications @ Western AI',
    date: '2022 - 2024',
    description: (
      <ul className="list-disc pl-5">
        <li>Developed a web application for external and internal members to connect</li>
        <li>Implemented a chat feature using Firebase Cloud Messaging</li>
        <li>Designed and developed a RESTful API using Node.js and Express.js</li>
      </ul>
    ),
  },
  {
    title: 'Python Tutor @ ScratchCoding4Kids',
    date: '2022',
    description: (
      <ul className="list-disc pl-5">
        <li>Developed a mobile application using React Native and Firebase</li>
        <li>Implemented a chat feature using Firebase Cloud Messaging</li>
        <li>Designed and developed a RESTful API using Node.js and Express.js</li>
      </ul>
    ),
  },
];

const skills = [
  { skill: 'Python' },
  { skill: 'JavaScript' },
  { skill: 'Django' },
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'PostgreSQL' },
];

const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export function Experience() {
  return (
    <div id="experience" className="flex flex-col lg:flex-row items-center justify-center h-screen px-4">
      <div className="w-full lg:w-1/2 lg:px-4">
        <h1 className="font-bold text-2xl mb-6 text-center lg:text-left">01. Experience</h1>
        <div>
          {experience.map((item, index) => {
            const { ref, inView } = useInView({
              triggerOnce: false,
              threshold: 0.5,
            });

            return (
              <motion.div
                key={`experience-${index}`}
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="mb-10"
              >
                <h2 className="text-xl text-black">{item.title}</h2>
                <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800">{item.date}</span>
                <div className="mt-2 text-sm text-black">{item.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:px-4 mt-10 lg:mt-0">
        <h1 className="font-bold text-2xl mb-6 text-center lg:text-left">Skills</h1>
        <div className="grid grid-cols-2 gap-4 items-center justify-center">
          {skills.map((item, index) => (
            <div key={`skill-${index}`} className="border-2 border-black rounded-lg p-4 font-bold text-center hover:text-sky-700">
              <h2 className="text-xl text-black">{item.skill}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
