'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const router = useRouter()

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

  const changeDirectory = (directory: string) => {
    const cleanDir = directory.toLowerCase().trim()
    
    // Map common directory names to sections
    const directionMap: { [key: string]: string } = {
      'cd projects': '#projects',
      'cd project': '#projects',
      'cd work': '#projects',
      'cd experience': '#experience',
      'cd exp': '#experience',
      'cd jobs': '#experience',
      'cd about': '/about',
      'cd contact': '#contact',
      'cd home': '#hero',
      'cd ~': '#hero',
      'cd /': '#hero'
    }

    const targetSection = directionMap[cleanDir]
    
    if (targetSection) {
      if (targetSection.startsWith('#')) {
        // Smooth scroll to section
        const element = document.querySelector(targetSection)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // Use Next.js router for page navigation (will trigger loading)
        router.push(targetSection)
      }
      setInputValue('') // Clear input after navigation
    } else {
      // Show error message briefly
      setInputValue(`bash: cd: ${directory}: No such file or directory`)
      setTimeout(() => setInputValue(''), 2000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      changeDirectory(inputValue)
    }
  }

  return (
    <section id="hero" className="min-h-[80vh] flex items-center justify-center py-24 lg:py-32">
      <div className="container mx-auto px-4 gap-8 flex flex-col md:flex-row items-center text-center max-w-4xl">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <Image
            src="/portrait.JPG"
            alt="Kevin Chau"
            width={150}
            height={150}
            className="rounded-md shadow-xl mx-auto md:w-[200px] md:h-[200px]"
          />
        </div>

        <div className="flex-1 w-full">
          {/* Command Line Style Header */}
          <div className="rounded-lg border border-black p-3 md:p-4 text-left shadow-lg dark:bg-card 
                          h-[180px] md:h-[200px] flex flex-col justify-center">
            <div className="text-xs md:text-sm lg:text-base space-y-2 md:space-y-3">
              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-green-400">$</span>
                <span className="text-blue-400 text-xs md:text-sm">cat role.txt</span>
                <span className="text-foreground ml-2 md:ml-4 text-xs md:text-sm truncate">
                  🧑🏽‍💻 {displayedText}
                  <span
                    className={`${showCursor ? 'opacity-100' : 'opacity-0'
                      } transition-opacity`}
                  >
                    |
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-green-400">$</span>
                <span className="text-blue-400 text-xs md:text-sm">pwd</span>
                <span className="text-muted-foreground ml-2 md:ml-4 text-xs md:text-sm truncate">
                  📍 /home/canada/ontario/newmarket
                </span>
              </div>

              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-green-400">$</span>
                <span className="text-blue-400 text-xs md:text-sm">ls -la /links</span>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 md:gap-2 text-primary font-semibold 
                           hover:gap-2 md:hover:gap-3 transition-all duration-200 underline 
                           hover:no-underline ml-2 md:ml-4 text-xs md:text-sm"
                >
                  about-me.md
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4"
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

              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-green-400">$</span>
                <span className="text-blue-400 text-xs md:text-sm">cd</span>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-transparent border-none focus:outline-none 
                           text-xs md:text-sm ml-2 text-foreground placeholder-muted-foreground
                           flex-1 min-w-0"
                  placeholder="cd projects..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
