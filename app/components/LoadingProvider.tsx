'use client'
import { useState, useEffect, useRef } from 'react'
import { Loading } from './Loading'

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const isInitialLoad = useRef(true)

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

  // Show initial loading screen
  if (isLoading) {
    return <Loading />
  }

  return <>{children}</>
}