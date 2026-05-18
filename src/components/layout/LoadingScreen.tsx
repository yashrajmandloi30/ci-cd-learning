// src/components/layout/LoadingScreen.tsx
import React from 'react'

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-primary z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 bg-gradient-to-r from-accent to-highlight rounded-full animate-pulse" />
        </div>
      </div>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <p className="text-accent font-mono animate-pulse">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingScreen