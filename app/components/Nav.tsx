import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className="fixed top-3 inset-x-0 max-w-xl mx-auto z-50 border-2 border-white rounded-full px-8 py-3 bg-[#333]">
      <div className="flex justify-between">
        <Link href="#hero" className="hover:text-blue-600 font-bold text-xl">
          Kevin Chau
        </Link>
        <Link href="#experience" className="hover:text-blue-600">
          01. Experience
        </Link>
        <Link href="#about" className="hover:text-blue-600">
          02. About
        </Link>
        <Link href="#projects" className="hover:text-blue-600">
          03. Projects
        </Link>
      </div>
    </div>
  )
}

export default Nav
