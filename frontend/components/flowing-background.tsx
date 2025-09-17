"use client"

import { useEffect, useState } from "react"

export function FlowingBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10"></div>

      {/* Flowing line elements */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        {/* Animated flowing paths */}
        <path
          d="M-100,400 Q300,200 600,400 T1300,400"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          className="animate-flow"
          style={{ animationDelay: "0s" }}
        />
        <path
          d="M-100,300 Q400,100 700,300 T1400,300"
          stroke="url(#gradient2)"
          strokeWidth="1.5"
          fill="none"
          className="animate-flow"
          style={{ animationDelay: "2s" }}
        />
        <path
          d="M-100,500 Q350,300 650,500 T1350,500"
          stroke="url(#gradient3)"
          strokeWidth="1"
          fill="none"
          className="animate-flow"
          style={{ animationDelay: "4s" }}
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6b5b9a" stopOpacity="0" />
            <stop offset="50%" stopColor="#6b5b9a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#e94560" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e94560" stopOpacity="0" />
            <stop offset="50%" stopColor="#e94560" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6b5b9a" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6b5b9a" stopOpacity="0" />
            <stop offset="50%" stopColor="#6b5b9a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6b5b9a" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/3 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "6s" }}
      ></div>
    </div>
  )
}
