'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../public/profile.png';

const titles = [
  'Software Engineer',
  'Full Stack Developer',
  'Future Entrepreneur',
  'Life Long Student'
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 1800); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="flex justify-between items-center h-screen">
      <div className="flex flex-col text-left w-1/2">
        <h1 className="text-5xl font-medium">
          Hey! My name's Kevin Chau and I am a(n)...<span className="blinking-cursor">|</span>
        </h1>
        <div className="overflow-hidden h-[60px] relative">
          <div className="flex">
            {titles.map((title, index) => (
              <motion.div
                key={index}
                className="flex w-full absolute"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: currentIndex === index ? 1 : 0, x: currentIndex === index ? 0 : -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-5xl text-sky-700 font-semibold">{title}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <br></br>
        <div className="flex gap-6">
          <button className="border-2 border-black rounded-lg p-2 font-bold hover:text-sky-700">Check Out My Portfolio</button>
          <button className="border-2 border-black rounded-lg p-2 font-bold hover:text-sky-700">Contact Me</button>
        </div>
      </div>
      <img src={profileImage.src} alt="profile" className='w-[380px] rounded-3xl'/>
    </div>
  );
};

