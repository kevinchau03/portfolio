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
    <nav className="sticky top-3 inset-x-0 w-full mx-auto z-50 rounded-2xl border border-accent bg-[#000000] px-4 py-3 transition-all duration-300">
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
          <Link href="/about" className="hover:text-accent">
            About Me
          </Link>
          <button className="bg-accent p-2 items-center justify-center rounded-md hover:bg-white hover:text-accent transition duration-300 ease-in-out">
            <a download={true} href="/KevinChauResume.pdf">
              Resume
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
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'
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
            href="/about"
            className="block py-2 hover:text-accent"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
          <button className="bg-accent p-2 items-center justify-center rounded-md hover:bg-white hover:text-accent transition duration-300 ease-in-out">
            <a download={true} href="/KevinChauResume.pdf">
              Resume
            </a>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
