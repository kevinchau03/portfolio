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
      staggerChildren: 0.5
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
        threshold: 0.5,
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

  const projects = [
    {
      title: "AlphaBack",
      description: "a financial model backtester built on amazon web services.",
      image: "/assets/AlphaBack.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
          <path d="M18 14h-8" />
          <path d="M15 18h-5" />
          <path d="M10 6h8v4h-8V6Z" />
        </svg>
      )
    },
    {
      title: "Eleet Bot",
      description: "a discord bot that helps discord users grind leetcode!",
      image: "/assets/EleetBot.JPG",
      link: "https://github.com/kevinchau03/leetcode-bot",
      icon: "/assets/icons/Eleet.webp"
    },
    {
      title: "Northstar Countertops",
      description: "marble countertop company based in toronto, ontario.",
      image: "/assets/Northstar.JPG",
      link: "https://www.northstarcountertops.ca/",
      icon: "/assets/icons/northstar_logo.jpg"
    }
  ];

  return (
    <section id="projects" className="container mx-auto px-4 mb-32 py-20">
      <h1 className="text-2xl font-bold mb-4 lg:text-left lg:text-3xl text-primary"><span className="text-green-400">$</span> cd projects</h1>
      <p className="text-sm text-muted mb-8">a selection of projects I've worked on recently</p>
      <motion.div
        className="grid grid-cols-1 justify-items-center items-stretch md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        ref={ref}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={projectVariants} 
            className="w-full max-w-md"
          >
            <div className="flex rounded-lg h-full flex-col border border-black bg-white dark:bg-card 
                            transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] dark:hover:shadow-white/20
                            transition duration-300 ease-in-out min-h-[280px] overflow-hidden">
              
              {/* Project Image Section - Top */}
              {project.image && (
                <div className="w-full h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={224}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content Section - Bottom */}
              <div className="flex flex-col justify-between flex-grow p-4">
                {/* Title and Icon */}
                <div className="flex items-center mb-3">
                  {project.icon && (
                    <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                      {typeof project.icon === 'string' ? (
                        <Image
                          src={project.icon}
                          alt={project.title}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <div className="text-white">
                          {project.icon}
                        </div>
                      )}
                    </div>
                  )}
                  <h2 className="text-md font-bold leading-tight">{project.title}</h2>
                </div>

                {/* Description */}
                <div className="mb-3">
                  <p className="leading-relaxed text-muted text-xs">
                    {project.description}
                  </p>
                </div>
                
                {/* Link - Fixed at Bottom */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary inline-flex items-center text-sm font-medium"
                >
                  Learn More
                  <svg 
                    fill="none" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    strokeWidth="2" 
                    className="w-4 h-4 ml-2" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
