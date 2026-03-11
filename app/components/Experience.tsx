'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      id: 1,
      title: 'constant closer',
      role: 'software engineer',
      period: 'march 2025 - august 2025',
      duration: '8 months',
      location: 'remote',
      image: '/assets/icons/constantcloser.svg',
      details: 'Worked on the Constant Closer platform, an AI email sales assistant for teams automating and optimizing outreach.',
    },
    {
      id: 2,
      title: 'hitmeup.ai',
      role: 'software engineering intern',
      period: 'may 2024 - sept 2024',
      duration: '5 months',
      location: 'remote',
      image: '/assets/icons/HitMeUp.svg',
      details: 'Contributed to the mobile and web app for HitMeUp, an AI gatekeeper used by creators and professionals to capture leads automatically.',
    },
    {
      id: 3,
      title: 'western ai club',
      role: 'senior director of communications',
      period: 'oct 2022 - sept 2024',
      duration: '2 years, 3 months',
      location: 'london, ontario',
      image: '/assets/icons/WesternAI.svg',
      details: 'Led communications, organized outreach programs, and built event promotion that grew visibility for the club community.',
    },
    {
      id: 4,
      title: 'magna international',
      role: 'assembly line worker',
      period: 'may 2023 - september 2023',
      duration: '5 months',
      location: 'newmarket, ontario',
      image: '/assets/icons/magna.png',
      details: 'Worked on the assembly line in a manufacturing plant and learned what repetitive, process-heavy work actually feels like.',
    },
    {
      id: 5,
      title: 'scratch coding for kids',
      role: 'python tutor',
      period: 'may 2022 - sept 2022',
      duration: '5 months',
      location: 'remote',
      image: '/assets/icons/SC4K.avif',
      details: 'Tutored students in Python fundamentals and logic building through interactive projects, then created curriculum for future tutors.',
    },
    {
      id: 6,
      title: 'natures emporium',
      role: 'maintenance boy',
      period: 'october 2020 - aug 2021',
      duration: '10 months',
      location: 'newmarket, ontario',
      image: '/assets/icons/natures-emporium.webp',
      details: 'Kept the store tidy, helped customers, and moved a lot of carts. Useful work ethic training, no glamour involved.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
  };

  return (
    <section id="experience" className="container mx-auto mb-24 flex flex-col gap-6 px-4 py-10">
      <div className="flex flex-col gap-3">
        <span className="section-kicker w-fit">portfolio/experiences</span>
        <h2 className="text-2xl font-black uppercase md:text-4xl">Jobs that shaped how I work.</h2>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          Startup work, community leadership, and a few very grounded roles.
        </p>
      </div>
      <motion.div
        className="flex flex-col gap-5"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        ref={ref}
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="section-shell overflow-hidden p-4 md:p-5"
            variants={cardVariants}
            onMouseEnter={() => setExpanded(exp.id)}
            onMouseLeave={() => setExpanded(null)}
          >
            <div className="flex cursor-pointer flex-col gap-4 md:flex-row md:items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border-2 border-border bg-background-light p-2">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-2">
                    <div>
                      <h3 className="text-lg font-black uppercase leading-tight md:text-xl">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">{exp.role}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expanded === exp.id ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1 rounded-full border-2 border-border bg-accent p-1"
                    >
                      <ChevronRight size={16} />
                    </motion.div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.12em] md:justify-end">
                    <span className="brutal-chip bg-background-light">{exp.period}</span>
                    <span className="brutal-chip bg-primary">{exp.duration}</span>
                    <span className="brutal-chip bg-accent">{exp.location}</span>
                  </div>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: expanded === exp.id ? 'auto' : 0,
                    opacity: expanded === exp.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="text-sm leading-7 text-muted-foreground md:text-base">{exp.details}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
