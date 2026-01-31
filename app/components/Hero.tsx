'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Github, Linkedin, FileDown  } from 'lucide-react';

export function Hero() {
  const [inputValue, setInputValue] = useState('')
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const router = useRouter()

  const profilePhotos = [
    '/assets/hero1.jpeg',
    '/assets/hero2.jpeg',
    '/assets/hero3.JPG'
  ]

  const handleCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const command = inputValue.toLowerCase().trim()

    switch (command) {
      case 'cd about':
        router.push('/about')
        break
      case 'cd projects':
        router.push('/#projects')
        break
      case 'cd experience':
        router.push('/#experience')
        break
      default:
        // Optional: handle unknown commands, e.g., show an error message
        console.log(`Command not found: ${command}`)
        setInputValue('') // Clear input after command
        break
    }
  }

  return (
    <section id="hero" className="min-h-[80vh] flex items-center justify-center py-24 lg:py-32">
      <div className="container mx-auto px-4 gap-8 flex flex-col">
        {/* Header Text */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left">
          Hey, I&apos;m Kevin Chau!
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
          I'm a Computer Science graduate from <span className="text-primary">Western University</span>. Take a peek around to learn more about me, my projects, and my experience!
        </p>

        <div className="flex flex-col md:flex-row items-stretch gap-6 w-full">
          <div className="flex-shrink-0">
            <figure className="relative mx-auto w-fit">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/25 via-primary/5 to-transparent blur-lg" />
                <div className="relative h-[250px] w-[250px] md:h-[280px] md:w-[200px]">
                  {profilePhotos.map((photo, index) => {
                    const isActive = index === activePhotoIndex
                    const offset = (index - activePhotoIndex + profilePhotos.length) % profilePhotos.length
                    return (
                      <button
                        key={photo}
                        type="button"
                        onClick={() =>
                          setActivePhotoIndex((prev) => (prev + 1) % profilePhotos.length)
                        }
                        className={[
                          'absolute left-0 top-0 h-full w-full rounded-xl transition-all duration-300',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
                          isActive ? 'z-30 cursor-pointer' : 'z-10 pointer-events-none',
                        ].join(' ')}
                        style={{
                          transform: `translate(${offset * 10}px, ${offset * 8}px) scale(${1 - offset * 0.04})`,
                          opacity: 1 - offset * 0.15,
                        }}
                        aria-label={`Show photo ${index + 1}`}
                      >
                        <Image
                          src={photo}
                          alt={`Kevin Chau photo ${index + 1}`}
                          width={250}
                          height={250}
                          className="h-full w-full rounded-xl object-cover"
                        />
                      </button>
                    )
                  })}
                </div>
            </figure>
          </div>

          <div className="flex-1 w-full">
            {/* Command Line Style Header */}
            <div className="rounded-lg border border-black p-4 md:p-5 text-left shadow-lg bg-white dark:bg-card
                            h-full flex flex-col justify-between">
              <div className="text-xs md:text-sm lg:text-base space-y-3 md:space-y-4">
                <div className="grid grid-cols-[12px_auto_1fr] items-center gap-x-2">
                  <span className="text-green-400">$</span>
                  <span className="text-primary">cat role.txt</span>
                  <span className="text-foreground truncate">
                    🧑🏽‍💻 22 year old full-stack developer
                  </span>
                </div>
                <div className="grid grid-cols-[12px_auto_1fr] items-center gap-x-2">
                  <span className="text-green-400">$</span>
                  <span className="text-primary">pwd</span>
                  <span className="text-muted-foreground truncate">
                    📍 /home/canada/ontario/newmarket
                  </span>
                </div>

                <div className="grid grid-cols-[12px_auto_1fr] items-center gap-x-2">
                  <span className="text-green-400">$</span>
                  <span className="text-primary">ls -la /links</span>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="https://www.github.com/kevinchau03"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-md border border-transparent px-2 py-1 hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-4 w-4 fill-current text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-muted-foreground group-hover:text-primary">github</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kevin-chau03"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-md border border-transparent px-2 py-1 hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-4 w-4 fill-current text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-muted-foreground group-hover:text-primary">linkedin</span>
                    </a>
                    <a
                      href="/Kevin_Chau_Software_Engineer_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-md border border-transparent px-2 py-1 hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                      aria-label="Resume PDF"
                    >
                      <FileDown className="h-4 w-4 fill-current text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-muted-foreground group-hover:text-primary">my resume</span>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-[12px_auto_1fr] items-center gap-x-2">
                  <span className="text-green-400">$</span>
                  <span className="text-primary">cat rank.txt</span>
                  <span className="text-foreground truncate">
                    🎮 hard stuck platinum in tft
                  </span>
                </div>


                <form onSubmit={handleCommand} className="grid grid-cols-[12px_auto_1fr] items-center gap-x-2">
                  <span className="text-green-400">$</span>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="cd about, projects, experience..."
                    className="col-span-2 bg-transparent border-none focus:ring-0 focus:outline-none text-primary min-w-0 placeholder:text-muted-foreground/50"
                    autoFocus
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
