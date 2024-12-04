import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className="hidden fixed top-3 inset-x-0 max-w-xl mx-auto z-50 border-2 border-white rounded-full px-8 py-3 bg-[#161b22] lg:block">
      <div className="flex justify-between">
        <Link href="#hero" className="hover:text-blue-600 font-bold text-xl">
          Kevin Chau
        </Link>
        <Link href="#projects" className="hover:text-blue-600">
          Projects
        </Link>
        <Link href="#experience" className="hover:text-blue-600">
          Experience
        </Link>
        <Link href="#happy" className="hover:text-blue-600">
          Passion
        </Link>
      </div>
    </div>
  )
}

export default Nav
