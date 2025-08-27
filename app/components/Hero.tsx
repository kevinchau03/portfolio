'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const fullText = 'Software Engineer at Constant Closer'

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 100) // Typing speed

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section id="hero" className="min-h-[80vh] flex items-center justify-center py-24 lg:py-32">
      <div className="container mx-auto px-4 gap-8 flex items-center text-center max-w-4xl">
        <div className="flex-shrink-0">
          <Image
            src="/portrait.JPG"
            alt="Kevin Chau"
            width={200}
            height={200}
            className="rounded-md shadow-xl mx-auto"
          />
        </div>

        <div className="flex-1">
          {/* Command Line Style Header */}
          <div className="rounded-lg border border-black p-4 text-left font-mono shadow-lg dark:bg-card h-[200px] flex flex-col justify-center" >
            <div className="text-sm md:text-base space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <span className="text-blue-400">cat role.txt</span>
                <span className="text-foreground ml-4">
                  🧑🏽‍💻 {displayedText}
                  <span
                    className={`${showCursor ? 'opacity-100' : 'opacity-0'
                      } transition-opacity`}
                  >
                    |
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <span className="text-blue-400">pwd</span>
                <span className="text-muted-foreground ml-4">
                  📍 /home/newmarket/ontario/canada
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <span className="text-blue-400">ls -la /links</span>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200 underline hover:no-underline ml-4"
                >
                  about-me.md
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <input
                  type="text"
                  className="bg-transparent border-b border-green-400 focus:outline-none"
                  placeholder="Type your command..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
