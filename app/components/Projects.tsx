'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5 // Stagger animation for each child
    }
  }
};

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div id="projects" className="mb-12" ref={ref}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <h1 className="text-center text-4xl font-bold mb-4 lg:text-left text-accent">My Project Gallery</h1>
        <p className="text-center mb-8 lg:text-left lg:w-1/2">
          Check out the projects I've been working on recently! I like to build efficient software
          that makes people's lives easier in some capacity. As you can tell, I am really into web
          development. Currently learning Next.js and TypeScript. Looking to learn more about
          artificial intelligence and machine learning.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 justify-center items-center lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Project 1 */}
        <motion.div variants={projectVariants} className="p-4 max-w-md">
          <div className="flex rounded-lg h-full p-8 flex-col
                          hover:bg-gray-700 transform hover:-translate-y-2 
                          transition duration-300 ease-in-out">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 mr-3 inline-flex items-center justify-center text-white flex-shrink-0">
                <Image src="/Milo.jpg" alt="Milo" width={100} height={100} className="rounded-full" />
              </div>
              <h2 className="text-lg font-medium">Milo Financial</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base">
                Your own personal AI financial assistant. Start saving better with Milo.
              </p>
              <a href="https://hack-western11.vercel.app/" target="_blank" className="mt-3 hover:text-accent inline-flex items-center">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
        {/* Repeat for Project 2 and Project 3 */}
        <motion.div variants={projectVariants} className="p-4 max-w-md">
          <div className="flex rounded-lg h-full p-8 flex-col
                          hover:bg-gray-700 transform hover:-translate-y-2 
                          transition duration-300 ease-in-out">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-accent text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clapperboard">
                  <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
                  <path d="m6.2 5.3 3.1 3.9" />
                  <path d="m12.4 3.4 3.1 4" />
                  <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
                </svg>
              </div>
              <h2 className="text-lg font-medium">Uplifted Echoes</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base">
                A real-time news website that provides the latest news from around the world.
              </p>
              <a href="https://news-app-seven-rose.vercel.app/" target="_blank" className="mt-3 hover:text-accent inline-flex items-center">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
        {/* Repeat for Project 3 */}
        <motion.div variants={projectVariants} className="p-4 max-w-md">
          <div className="flex rounded-lg h-full p-8 flex-col
                          hover:bg-gray-700 transform hover:-translate-y-2 
                          transition duration-300 ease-in-out">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-accent text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clapperboard">
                  <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
                  <path d="m6.2 5.3 3.1 3.9" />
                  <path d="m12.4 3.4 3.1 4" />
                  <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
                </svg>
              </div>
              <h2 className="text-lg font-medium">Anime Buddy</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base">
                A chrome extension that lets users keep track of their favourite shows and movies.
              </p>
              <a href="https://github.com/kevinchau03/AnimeBuddy" target="_blank" className="mt-3 hover:text-accent inline-flex items-center">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
