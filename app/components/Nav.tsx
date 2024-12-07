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
    <nav className="fixed top-3 inset-x-0 max-w-xl mx-auto z-50 border border-white rounded-xl bg-card px-4 py-3 transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-lg font-boldtext-accent">
          Kevin Chau
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/#projects" className="hover:text-accent">
            Projects
          </Link>
          <Link href="/#experience" className="hover:text-accent">
            Experience
          </Link>
          <Link href="/passion" className="hover:text-accent">
            Passion
          </Link>
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
        className={`mt-3 md:hidden overflow-hidden transition-all duration-300 ${
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
            Passion
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
