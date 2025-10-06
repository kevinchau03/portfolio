'use client'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Loading } from './Loading'
import { NavigationLoading } from './NavigationLoading'

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isNavigating, setIsNavigating] = useState(false)
  const pathname = usePathname()
  const isInitialLoad = useRef(true)
  const previousPathname = useRef(pathname)

  // Initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => {
        isInitialLoad.current = false
      }, 100)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoading && !isInitialLoad.current && previousPathname.current !== pathname) {
      setIsNavigating(true)
      
      const timer = setTimeout(() => {
        setIsNavigating(false)
      }, 1500) // Shorter duration for navigation loading

      return () => clearTimeout(timer)
    }
    
    previousPathname.current = pathname
  }, [pathname, isLoading])

  // Show initial loading screen
  if (isLoading) {
    return <Loading />
  }

  // Show navigation loading screen
  if (isNavigating) {
    return <NavigationLoading />
  }

  return <>{children}</>
}