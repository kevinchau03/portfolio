'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const { theme, setTheme, systemTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  // avoid hydration mismatch
  useEffect(() => { setMounted(true) }, [])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    
    return () => clearInterval(cursorInterval)
  }, [])

  if (!mounted) {
    return (
      <nav className="container mx-auto py-3">
        {/* minimal placeholder */}
      </nav>
    )
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleTheme = () => setTheme(currentTheme === 'dark' ? 'light' : 'dark')

  // Get directory name for display
  const getDirectoryName = (): string => {
    if (pathname === '/') {
      return 'kevin@portfolio:~$'
    }
    const formattedPath = pathname.replace(/^\/|\/$/g, '')
    return `kevin@portfolio:~/${formattedPath}$`
  }

  return (
    <nav className="container sticky top-5 z-50 rounded-xl bg-white border border-black dark:bg-card py-2 mx-auto">
      <div className="flex items-center justify-between px-4">
        {/* Desktop: Interactive Command Line */}
        <div className="hidden md:flex items-center flex-1">
          <Link href="/" className="font-bold text-primary mr-2 hover:text-primary/80 transition-colors cursor-pointer">
            {getDirectoryName()}
          </Link>
        </div>

        {/* Mobile: Just Directory Name */}
        <div className="md:hidden flex-1">
          <span className="text-sm font-bold text-primary">
            {getDirectoryName()}
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center md:flex space-x-6">
          <Link href="/about" className="hover:text-primary transition-colors text-sm">
            about-me.md
          </Link>
          <div className="flex gap-2">
            <a
              href="/Kevin-Chau-Software-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/10 text-primary px-3 py-1 rounded-md hover:bg-primary/20 transition-colors text-sm"
            >
              view
            </a>
            <a
              download={true}
              href="/Kevin-Chau-Software-Resume.pdf"
              className="bg-primary text-white px-3 py-1 rounded-md hover:bg-primary/80 transition-colors text-sm"
            >
              download
            </a>
          </div>
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 text-foreground" />
              )}
            </button>
          )}
          <button 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
            className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 pt-4 border-t border-border mt-2">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="block py-2 px-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              🏠 home
            </Link>
            <Link
              href="/about"
              className="block py-2 px-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              📄 about-me.md
            </Link>
            <button
              onClick={() => {
                if (pathname === '/') {
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                } else {
                  router.push('/#projects')
                }
                setIsOpen(false)
              }}
              className="block py-2 px-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors text-sm text-left"
            >
              💼 projects
            </button>
            <button
              onClick={() => {
                if (pathname === '/') {
                  document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })
                } else {
                  router.push('/#experience')
                }
                setIsOpen(false)
              }}
              className="block py-2 px-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors text-sm text-left"
            >
              💻 experience
            </button>
            
            {/* Resume Links */}
            <div className="pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2 px-3">Resume:</p>
              <div className="flex flex-col gap-2">
                <a
                  href="/Kevin-Chau-Software-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 text-primary py-2 px-3 rounded-lg hover:bg-primary/20 transition-colors text-sm text-center"
                  onClick={() => setIsOpen(false)}
                >
                  👁️ view resume
                </a>
                <a
                  download={true}
                  href="/Kevin-Chau-Software-Resume.pdf"
                  className="bg-primary text-white py-2 px-3 rounded-lg hover:bg-primary/80 transition-colors text-sm text-center"
                  onClick={() => setIsOpen(false)}
                >
                  📥 download resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav

