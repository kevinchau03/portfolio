'use client'
import { useState, useEffect } from 'react'

export function NavigationLoading() {
  const [dots, setDots] = useState('')
  const [text, setText] = useState('')

  const possibleTexts = [
    "If you're reading this it's too late",
    'Dropping at tilted towers',
    'Going into the infinity castle',
    'Starting the particle accelerator',
    'Loading save point',
    'Charging up your chakra',
    'Drawing transmutation circles',
  ]

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * possibleTexts.length)
    setText(possibleTexts[randomIndex])
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return ''
        return prev + '.'
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-background/80">
      <div className="text-center space-y-4">
        {/* Simple navigation loading indicator */}
        <div className="relative">
          {/* Spinning circle */}
          <div className="w-12 h-12 border-2 border-muted-foreground/20 border-t-primary rounded-full animate-spin mx-auto"></div>
        </div>
        
        {/* Navigation text */}
        <div className="text-sm text-muted-foreground font-mono">
          {text} {dots}
        </div>
      </div>
    </div>
  )
}