'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.25,
      }
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const projects = [
    {
      title: 'AlphaBack',
      description: 'A financial model backtester built on Amazon Web Services.',
      image: '/assets/AlphaBack.png',
      technologies: ['AWS', 'Python', 'Lambda', 'DynamoDB', 'API Gateway', 'S3'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
          <path d="M18 14h-8" />
          <path d="M15 18h-5" />
          <path d="M10 6h8v4h-8V6Z" />
        </svg>
      ),
    },
    {
      title: 'Eleet Bot',
      description: 'A Discord bot that helps users grind LeetCode with less friction.',
      image: '/assets/EleetBot.JPG',
      link: 'https://github.com/kevinchau03/leetcode-bot',
      technologies: ['Node.js', 'Discord.js', 'TypeScript'],
      icon: '/assets/icons/Eleet.webp',
    },
    {
      title: 'Hair Salon Queue Manager',
      description: 'A salon queue management system built to reduce stress for my auntie.',
      image: '/assets/salon-queue.JPG',
      link: 'https://salon-queue.vercel.app/',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
      icon: '/assets/icons/salon.png',
    },
  ]

  return (
    <section id="projects" className="container mx-auto mb-32 px-4 py-16">
      <div className="mb-8 flex flex-col gap-3">
        <span className="section-kicker w-fit">portfolio/projects</span>
        <h2 className="text-2xl font-black uppercase md:text-4xl">
          Built with purpose and no boring UI.
        </h2>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          Building tools that solve real problems.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        ref={ref}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={projectVariants} className="w-full">
            <div className="brutal-card flex h-full flex-col overflow-hidden">
              {project.image && (
                <div className="relative h-56 w-full overflow-hidden border-b-2 border-border bg-muted">
                  <div className="absolute left-4 top-4 brutal-chip bg-accent">featured</div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={224}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-grow flex-col justify-between gap-4 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[18px] border-2 border-border bg-primary text-foreground">
                    {typeof project.icon === 'string' ? (
                      <Image
                        src={project.icon}
                        alt={project.title}
                        width={48}
                        height={48}
                        className="h-full w-full rounded-[16px] object-cover"
                      />
                    ) : (
                      project.icon
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-md font-black uppercase leading-tight">{project.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="brutal-chip bg-background-light text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-brutal w-fit text-sm"
                  >
                    Learn more
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
