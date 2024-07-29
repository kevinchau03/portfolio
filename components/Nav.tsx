'use client'
import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className="fixed top-3 inset-x-0 max-w-2xl mx-auto z-50 border-2 bg-white border-black rounded-full px-8 py-3">
      <div className="flex justify-between gap-6">
        <Link href="#hero" className="hover:text-gray-300 font-bold text-xl">
          Kevin Chau
        </Link>
        <Link href="#experience" className="hover:text-gray-300">
          01. Experience
        </Link>
        <Link href="#about" className="hover:text-gray-300">
          02. About
        </Link>
        <Link href="#projects" className="hover:text-gray-300">
          03. Projects
        </Link>
      </div>
    </div>
  )
}

export default Nav
