'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      id: 1,
      title: "Constant Closer",
      role: "Software Engineer",
      period: "March 2025 - August 2025",
      duration: "8 Months",
      location: "Remote",
      image: "/constantcloser.svg",
      details: "Currently developing an AI Sales Agent for users who want to close more leads from their email lists.",
    },
    {
      id: 2,
      title: "HitMeUp.ai",
      role: "Software Engineering Intern",
      period: "May 2024 - Sept 2024",
      duration: "5 Months",
      location: "Remote",
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

  const handleMouseEnter = (id: number): void => {
    setExpanded(id);
  };

  const handleMouseLeave = (): void => {
    setExpanded(null);
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
      { threshold: 0.5 }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="container mx-auto px-4 flex flex-col gap-6 mb-24 py-10">
      <h1 className="text-2xl font-bold text-blue-400 lg:text-3xl"><span className="text-green-400">$</span> cd experience</h1>
      <motion.div
        className="flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        ref={ref}
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className={`
              flex flex-col rounded-lg border border-black dark:bg-card p-3 transition-all duration-300
              ${expanded === exp.id
                ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-white/20 transform scale-[1.02]'
                : 'shadow-none hover:shadow-md'}
            `}
            variants={cardVariants}
            onMouseEnter={() => handleMouseEnter(exp.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex cursor-pointer">
              <Image src={exp.image} alt={exp.title} width={50} height={50} className="rounded-full" />
              <div className="group ml-4 flex-grow flex-col items-center">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2">
                    <h3 className="inline-flex items-center justify-center text-lg font-bold leading-tight">
                      {exp.title}
                      <motion.div
                        animate={{ rotate: expanded === exp.id ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-1"
                      >
                        <ChevronRight size={16} />
                      </motion.div>
                    </h3>
                    <div className="text-right tabular-nums">
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-x-2">
                    <p className="text-sm text-muted">{exp.role}</p>
                    <p className="text-right text-sm text-muted">{exp.duration}</p>
                  </div>
                  <p className="text-sm text-muted">{exp.location}</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={false}
              animate={{
                height: expanded === exp.id ? 'auto' : 0,
                opacity: expanded === exp.id ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-4 p-4 rounded-lg">
                <p className="leading-relaxed text-muted text-sm">{exp.details}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
