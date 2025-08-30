'use client'
import { useState, useEffect } from 'react'

export function Loading() {
  const [progress, setProgress] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  const loadingText = 'Initializing portfolio...'

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(progressInterval)
  }, [])

  useEffect(() => {
    // Typing animation for loading text
    if (currentIndex < loadingText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(loadingText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 80)
      
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, loadingText])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center dark:bg-background">
      <div className="text-center space-y-8">
        {/* Terminal-style loading */}
        <div className="border border-border rounded-lg p-6 font-mono shadow-lg min-w-[300px] dark:bg-card">
          <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-2">kevin@portfolio:~$</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-green-400">$</span>
              <span className="text-primary">npm start</span>
            </div>
            
            <div className="text-muted-foreground text-sm">
              {displayText}
              <span className="animate-pulse text-green-400">|</span>
            </div>
            
            {/* Progress bar */}
            <div className="w-full border border-black rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <div className="text-right text-xs text-muted-foreground">
              {progress}%
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}