'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react' // Importing Lucide icons

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname();

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // A helper function to get a nice directory name from the current pathname.
  const getDirectoryName = (): string => {
    // Convert "/" to "~/home" and any other pathname to "~/<page>"
    if (pathname === '/') {
      return '~/home';
    }
    // Remove any leading/trailing slashes and add the "~/" prefix.
    const formattedPath = pathname.replace(/^\/|\/$/g, '');
    return `~/${formattedPath}`;
  };

  return (
    <nav className="sticky top-3 inset-x-0 w-full mx-auto z-50 rounded-2xl border-2 border-back-black bg-white px-4 py-3 transition-all duration-300">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-accent flex items-center">
          {getDirectoryName()}
          {/* Blinking cursor */}
          <span className="ml-2 animate-blink">|</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center md:flex space-x-6">
          <Link href="/#projects" className="hover:text-accent hover:font-bold hover:translate-y-[-3px] transition-transform duration-300">
            Projects
          </Link>
          <Link href="/#experience" className="hover:text-accent hover:font-bold hover:translate-y-[-3px] transition-transform duration-300">
            Experience
          </Link>
          <Link href="/about" className="hover:text-accent hover:font-bold hover:translate-y-[-3px] transition-transform duration-300">
            About Me
          </Link>
            <a download={true} href="/KevinChau_Resume.pdf" className='bg-accent text-white p-2 items-center justify-center rounded-md hover:bg-white transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]
                  transition duration-300 ease-in-out border-2 border-back-black hover:text-accent transition duration-300 ease-in-out'>
              Resume
            </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <X className="w-6 h-6 text-accent" />
            ) : (
              <Menu className="w-6 h-6 text-accent" />
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
            href="/#projects"
            className="block py-2 hover:text-accent hover:font-bold hover:translate-y-[-3px] transition-transform duration-300"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/#experience"
            className="block py-2 hover:text-accent hover:font-bold hover:translate-y-[-3px] transition-transform duration-300"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="/about"
            className="block py-2 hover:text-accent hover:font-bold hover:translate-y-[-3px] transition-transform duration-300"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
          <a download={true} href="/KevinChau_Resume.pdf" className="bg-accent text-white p-2 items-center justify-center rounded-md hover:bg-white transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]
                  transition duration-300 ease-in-out border-2 border-back-black hover:text-accent transition duration-300 ease-in-out">
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav

