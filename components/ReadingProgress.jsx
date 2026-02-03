'use client'

import { useState, useEffect } from 'react'
import './ReadingProgress.css'

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      // Get scroll position
      const scrollTop = window.scrollY
      // Get total scrollable height
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      // Calculate percentage
      const scrollPercent = (scrollTop / docHeight) * 100

      setProgress(scrollPercent)
    }

    // Update on scroll
    window.addEventListener('scroll', updateProgress)
    // Update on resize (in case content height changes)
    window.addEventListener('resize', updateProgress)
    // Initial calculation
    updateProgress()

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div className="reading-progress-container">
      <div
        className="reading-progress-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ReadingProgress
