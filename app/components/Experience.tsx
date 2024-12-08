'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      id: 1,
      title: "Western University",
      role: "Work Study Student",
      period: "Sept 2024 - Present",
      duration: "4 Months",
      location: "London, Ontario",
      image: "https://www.uwo.ca/img/homepage/2017/logo/mustangs_logo.svg",
      details: "Working as a research assistant in the department of computer science. Assisting in researching MQTT protocols and how it could be used with our ESP module to track data in harsh environments.",
    },
    {
      id: 2,
      title: "HitMeUp.ai",
      role: "Software Engineering Intern",
      period: "May 2024 - Sept 2024",
      duration: "5 Months",
      location: "Orange County, California",
      image: "/HitMeUp.svg",
      details: "Contributed to the development of the mobile and web app for HitMeUp. An AI gatekeeper used for creators and professionals to capture leads automatically.",
    },
    {
      id: 3,
      title: "Western AI",
      role: "Senior Director of Communications",
      period: "Oct 2022 - Sept 2024",
      duration: "2 years, 3 Months",
      location: "London, Ontario",
      image: "/WesternAI.svg",
      details: "Led communication strategies and organized outreach programs to promote the club. Coordinated events and developed engaging content for the community.",
    },
    {
      id: 4,
      title: "Scratch Coding for Kids",
      role: "Python Tutor",
      period: "May 2022 - Sept 2022",
      duration: "5 Months",
      location: "Remote",
      image: "/SC4K.avif",
      details: "Tutored children grades 5-12 in Python programming basics and logic building through interactive projects and games. Also created curriculum for future tutors.",
    },
  ];

  const handleToggle = (id: number): void => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  },);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger effect
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="experience" className="flex flex-col gap-6 mb-24" ref={ref}>
      <h1 className="text-xl font-bold mb-4 text-accent lg:text-4xl">My Software Engineering Journey</h1>
      <motion.div
        className="flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="flex flex-col rounded-lg bg-card p-3"
            variants={cardVariants}
          >
            <div
              className="flex cursor-pointer"
              onClick={() => handleToggle(exp.id)}
            >
              <Image src={exp.image} alt={exp.title} width={50} height={50} className="rounded-full" />
              <div className="group ml-4 flex-grow flex-col items-center">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2">
                    <h2 className="inline-flex items-center justify-center font-semibold leading-none text-md">
                      {exp.title}
                    </h2>
                    <div className="text-right tabular-nums">
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-x-2">
                    <p className="text-sm">{exp.role}</p>
                    <p className="text-right text-sm">{exp.duration}</p>
                  </div>
                  <p className="text-sm">{exp.location}</p>
                </div>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                expanded === exp.id ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm">{exp.details}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
