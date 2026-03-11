'use client'
import { useState, useEffect } from 'react'

const possibleTexts = [
  "If you're reading this it's too late",
  'Dropping at tilted towers',
  'Going into the infinity castle',
  'Starting the particle accelerator',
  'Loading save point',
  'Charging up your chakra',
  'Drawing transmutation circles',
]

export function NavigationLoading() {
  const [dots, setDots] = useState('')
  const [text, setText] = useState('')

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="text-center space-y-4">
        <div className="section-shell px-8 py-6">
          <div className="relative">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-muted-foreground/20 border-t-primary"></div>
          </div>
          <div className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
            {text} {dots}
          </div>
        </div>
      </div>
    </div>
  )
}
