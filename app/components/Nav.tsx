'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav className="container mx-auto py-3">
        {/* minimal placeholder */}
      </nav>
    )
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  const getDirectoryName = (): string => {
    if (pathname === '/') {
      return 'kevin@portfolio:~$'
    }
    const formattedPath = pathname.replace(/^\/|\/$/g, '')
    return `kevin@portfolio:~/${formattedPath}$`
  }

  return (
    <nav className="container sticky top-4 z-50 mx-auto px-4">
      <div className="section-shell mx-auto flex items-center justify-between px-4 py-3">
        <div className="hidden flex-1 items-center md:flex">
          <Link
            href="/"
            className="rounded-xl border-2 border-border bg-primary px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-foreground transition hover:-translate-x-1 hover:-translate-y-1"
          >
            {getDirectoryName()}
          </Link>
        </div>

        <div className="flex-1 md:hidden">
          <span className="inline-flex rounded-xl border-2 border-border bg-primary px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-foreground">
            {getDirectoryName()}
          </span>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/about" className="link-brutal text-sm">
            about-me.md
          </Link>
          <button
            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle Dark Mode"
            className="link-brutal p-3"
          >
            {currentTheme === 'dark' ? (
              <Sun className="h-5 w-5 text-accent" />
            ) : (
              <Moon className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle Dark Mode"
            className="link-brutal p-2.5"
          >
            {currentTheme === 'dark' ? (
              <Sun className="h-4 w-4 text-accent" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="link-brutal p-2.5"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-shell mt-3 px-4 pb-4 pt-4">
          <div className="flex flex-col gap-3">
            <Link href="/" className="link-brutal justify-center text-sm" onClick={() => setIsOpen(false)}>
              home
            </Link>
            <Link href="/about" className="link-brutal justify-center text-sm" onClick={() => setIsOpen(false)}>
              about-me.md
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
              className="link-brutal justify-center text-sm"
            >
              projects
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
              className="link-brutal justify-center text-sm"
            >
              experience
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
