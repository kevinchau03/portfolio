'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react' // Importing Lucide icons

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="sticky top-3 inset-x-0 w-full mx-auto z-50 rounded-2xl border border-slate bg-card px-4 py-3 transition-all duration-300">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-accent">
          &lt;kevchaudev/&gt;
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center md:flex space-x-6">
          <Link href="/#projects" className="hover:text-accent">
            Projects
          </Link>
          <Link href="/#experience" className="hover:text-accent">
            Experience
          </Link>
          <Link href="/passion" className="hover:text-accent">
            About Me
          </Link>
          <button className="text-accent border-accent border p-2 items-center justify-center rounded-md hover:bg-white">
            <a href="/KevinChau_Resume.pdf" download>
              My Resume 
            </a>
          </button>
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
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col space-y-2">
          <Link
            href="/#projects"
            className="block py-2 hover:text-accent"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/#experience"
            className="block py-2 hover:text-accent"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="/passion"
            className="block py-2 hover:text-accent"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
          <button className="text-accent border-accent border p-2 items-center justify-center rounded-md hover:bg-white hover:-translate-y-2 
                          transition duration-300 ease-in-out">
            <a href="/KevinChau_Resume.pdf" download>
              My Resume 
            </a>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
