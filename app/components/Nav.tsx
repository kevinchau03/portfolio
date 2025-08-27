'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const pathname = usePathname();

  // avoid hydration mismatch
  useEffect(() => { setMounted(true) }, [])

  if (!mounted) {
    return (
      <nav className="container mx-auto py-3">
        {/* you can leave a minimal placeholder here,
            or even null if you prefer no Nav until mount */}
      </nav>
    )
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const toggleTheme = () => setTheme(currentTheme === 'dark' ? 'light' : 'dark')

  // A helper function to get a nice directory name from the current pathname.
  const getDirectoryName = (): string => {
    // Convert "/" to "kevin@portfolio:~$" and any other pathname to "~/<page>"
    if (pathname === '/') {
      return 'kevin@portfolio:~$';
    }
    // Remove leading/trailing slashes and format as subdirectory
    const formattedPath = pathname.replace(/^\/|\/$/g, '');
    return `kevin@portfolio:/${formattedPath}$`;
  };

  return (
    <nav className="container sticky top-5 z-50 rounded-xl border border-background bg-white dark:border-white py-2 dark:bg-background">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary flex items-center font-mono">
          {getDirectoryName()}
          {/* Blinking cursor */}
          <span className="ml-1 animate-blink">|</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center md:flex space-x-6">
          <Link href="/about" className="hover:text-primary hover:font-bold">
            About
          </Link>
          <a download={true} href="/Resume_KevinChau.pdf" className='bg-primary text-white p-2 items-center justify-center rounded-md hover:bg-white transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]
                  transition duration-300 ease-in-out hover:text-primary transition duration-300 ease-in-out'>
            Resume
          </a>
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="mr-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-5 h-5 text-white-300" />
              ) : (
                <Moon className="w-5 h-5 text-white-800" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="mr-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-5 h-5 text-white-300" />
              ) : (
                <Moon className="w-5 h-5 text-white-800" />
              )}
            </button>
          )}
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <div className="flex flex-col space-y-2">
          <Link
            href="/about"
            className="block py-2 hover:text-primary hover:font-bold"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <a download={true} href="/KevinChau_Resume.pdf" className="bg-primary text-white p-2 items-center justify-center rounded-md hover:bg-white transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]
                  transition duration-300 ease-in-out border-2 border-back-black hover:text-primary transition duration-300 ease-in-out">
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav

