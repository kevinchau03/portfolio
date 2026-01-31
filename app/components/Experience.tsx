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
      title: "constant closer",
      role: "software engineer",
      period: "march 2025 - august 2025",
      duration: "8 months",
      location: "remote",
      image: "/assets/icons/constantcloser.svg",
      details: "worked on the development of the constant closer platform, an ai email sales assistant that helps sales teams automate and optimize their outreach.",
    },
    {
      id: 2,
      title: "hitmeup.ai",
      role: "software engineering intern",
      period: "may 2024 - sept 2024",
      duration: "5 months",
      location: "remote",
      image: "/assets/icons/HitMeUp.svg",
      details: "contributed to the development of the mobile and web app for hitmeup. an ai gatekeeper used for creators and professionals to capture leads automatically.",
    },
    {
      id: 3,
      title: "western ai club",
      role: "senior director of communications",
      period: "cct 2022 - sept 2024",
      duration: "2 years, 3 months",
      location: "london, ontario",
      image: "/assets/icons/WesternAI.svg",
      details: "led communication strategies and organized outreach programs to promote the club. coordinated events and developed engaging content for the community.",
    },
    {
      id: 4,
      title: "scratch coding for kids",
      role: "python tutor",
      period: "may 2022 - sept 2022",
      duration: "5 months",
      location: "remote",
      image: "/assets/icons/SC4K.avif",
      details: "tutored children grades 5-12 in python programming basics and logic building through interactive projects and games. also created curriculum for future tutors.",
    },
    {
      id: 5,
      title: "magna international",
      role: "assembly line worker",
      period: "may 2023 - september 2023",
      duration: "5 months",
      location: "newmarket, ontario",
      image: "/assets/icons/magna.png",
      details: "worked on the assembly line for a manufacturing company, really really reptitive work.",
    },
    {
      id: 6,
      title: "natures emporium",
      role: "maintenace boy",
      period: "october 2020 - aug 2021",
      duration: "10 months",
      location: "newmarket, ontario",
      image: "/assets/icons/natures-emporium.webp",
      details: "helped to make sure the store was tidy, helped out customers, and pushed lots and lots of carts!",
    }
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
      <h1 className="text-2xl font-bold text-primary lg:text-3xl"><span className="text-green-400">$</span> cd experience</h1>
      <p className="text-md text-muted">my past experiences that have shaped the way I work</p>
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
              flex flex-col rounded-lg border border-black bg-white dark:bg-card p-3 transition-all duration-300
              ${expanded === exp.id
                ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-white/20 transform scale-[1.02]'
                : 'shadow-none hover:shadow-md'}
            `}
            variants={cardVariants}
            onMouseEnter={() => handleMouseEnter(exp.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex cursor-pointer">
              <div className="flex h-12 w-12 items-center justify-center rounded-full p-1">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="group ml-4 flex-grow flex-col items-center">
                <div className="flex flex-col">
                  <div className="flex items-start justify-between gap-x-2">
                    <div className="flex items-start gap-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold leading-tight break-words">
                        {exp.title}
                      </h3>
                      <motion.div
                        animate={{ rotate: expanded === exp.id ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-[2px] flex-shrink-0"
                      >
                        <ChevronRight size={16} />
                      </motion.div>
                    </div>
                    <div className="text-right tabular-nums text-sm md:text-base">
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-x-2">
                    <p className="text-sm md:text-md text-muted">{exp.role}</p>
                    <p className="text-right text-sm md:text-md text-muted">{exp.duration}</p>
                  </div>
                  <p className="text-sm md:text-md text-muted">{exp.location}</p>
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
                <p className="leading-relaxed text-muted text-sm md:text-md">{exp.details}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
