// src/components/layout/ScrollProgress.tsx
import React from 'react'
import { useScrollProgress } from '../../hooks/useScrollProgress'

const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div
        className="h-full bg-gradient-to-r from-accent to-highlight transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ScrollProgress