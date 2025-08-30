'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Loading } from './Loading'

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isNavigating, setIsNavigating] = useState(false)
  const pathname = usePathname()

  // Initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Loading on route change
  useEffect(() => {
    setIsNavigating(true)
    
    const timer = setTimeout(() => {
      setIsNavigating(false)
    }, 1500) // Show loading for 1.5 seconds on route change

    return () => clearTimeout(timer)
  }, [pathname])

  if (isLoading || isNavigating) {
    return <Loading />
  }

  return <>{children}</>
}