import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className="hidden fixed top-3 inset-x-0 max-w-xl mx-auto z-50 border-2 border-white rounded-full px-8 py-3 bg-card lg:block">
      <div className="flex justify-between">
        <Link href="/" className="hover:text-accent font-bold text-xl">
          Kevin Chau
        </Link>
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
    </div>
  )
}

export default Nav
