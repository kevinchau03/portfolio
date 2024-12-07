'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      title: "Western University",
      role: "Work Study Student",
      period: "September 2024 - Present",
      duration: "4 Months",
      location: "London, Ontario",
      image: "/Western.png",
      details: "Working as a research assistant in the department of computer science. Assisting in researching MQTT protocols and how it could be used with our ESP module to track data in harsh environments.",
    },
    {
      id: 2,
      title: "HitMeUp.ai",
      role: "Software Engineering Intern",
      period: "May 2024 - September 2024",
      duration: "5 Months",
      location: "Orange County, California",
      image: "/HitMeUp.svg",
      details: "Contributed to the development of the mobile and web app for HitMeUp. An AI gatekeeper used for creators and professionals to capture leads automatically.",
    },
    {
      id: 3,
      title: "Western AI",
      role: "Senior Director of Communications",
      period: "October 2022 - September 2024",
      duration: "2 years, 3 Months",
      location: "London, Ontario",
      image: "/WesternAI.svg",
      details: "Led communication strategies and organized outreach programs to promote the club. Coordinated events and developed engaging content for the community.",
    },
    {
      id: 4,
      title: "Scratch Coding for Kids",
      role: "Python Tutor",
      period: "May 2022 - September 2022",
      duration: "5 Months",
      location: "Remote",
      image: "/SC4K.avif",
      details: "Tutored children grades 5-12 in Python programming basics and logic building through interactive projects and games. Also created curriculum for future tutors.",
    },
  ];

  interface Experience {
    id: number;
    title: string;
    role: string;
    period: string;
    duration: string;
    location: string;
    image: string;
    details: string;
  }

  const handleToggle = (id: number): void => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div id="experience" className="flex flex-col gap-6 mb-12">
      <h1 className="text-4xl font-bold mb-4 text-accent">My Software Engineering Journey</h1>
      <div className="flex flex-col gap-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex flex-col rounded-lg bg-card p-3">
            <div
              className="flex cursor-pointer"
              onClick={() => handleToggle(exp.id)}
            >
              <Image src={exp.image} alt={exp.title} width={50} height={50} className="rounded-full" />
              <div className="group ml-4 flex-grow flex-col items-center">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none">
                      {exp.title}
                    </h3>
                    <div className="text-right tabular-nums text-muted-foreground">
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="text-sm">{exp.role}</div>
                    <div className="text-right text-sm">{exp.duration}</div>
                  </div>
                  <div className="text-sm">{exp.location}</div>
                </div>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                expanded === exp.id ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm">{exp.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
