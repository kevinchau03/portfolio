'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function Hero() {
  const [showCursor, setShowCursor] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const router = useRouter()

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
      <div className="container mx-auto px-4 gap-8 flex flex-col md:flex-row items-center text-center max-w-4xl">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <Image
            src="/assets/portrait.JPG"
            alt="Kevin Chau"
            width={150}
            height={150}
            className="rounded-md shadow-xl mx-auto md:w-[200px] md:h-[200px]"
          />
        </div>

        <div className="flex-1 w-full">
          {/* Command Line Style Header */}
          <div className="rounded-lg border border-black p-3 md:p-4 text-left shadow-lg bg-white dark:bg-card
                          h-[180px] md:h-[200px] flex flex-col">
            <div className="text-xs md:text-sm lg:text-base space-y-2 md:space-y-3">
              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-green-400">$</span>
                <span className="text-primary text-xs md:text-sm">cat role.txt</span>
                <span className="text-foreground ml-2 md:ml-4 text-xs md:text-sm truncate">
                  🧑🏽‍💻 Full-Stack/Back-end Developer
                </span>
              </div>

              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-green-400">$</span>
                <span className="text-primary text-xs md:text-sm">pwd</span>
                <span className="text-muted-foreground ml-2 md:ml-4 text-xs md:text-sm truncate">
                  📍 /home/canada/ontario/newmarket
                </span>
              </div>

              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-green-400">$</span>
                <span className="text-primary text-xs md:text-sm">ls -la /links</span>
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

              <form onSubmit={handleCommand} className="flex items-center gap-1 md:gap-2">
                <span className="text-green-400">$</span>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="cd about, projects, experience..."
                  className="bg-transparent border-none focus:ring-0 focus:outline-none text-primary text-xs md:text-sm flex-1 min-w-0 placeholder:text-muted-foreground/50"
                  autoFocus
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
