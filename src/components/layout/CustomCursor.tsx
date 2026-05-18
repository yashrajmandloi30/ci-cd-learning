// src/components/layout/CustomCursor.tsx
import React, { useEffect, useState } from 'react'

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('button, a, .cursor-pointer')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          left: position.x - 4,
          top: position.y - 4,
        }}
      >
        <div
          className={`w-2 h-2 bg-accent rounded-full ${
            isHovering ? 'scale-150' : ''
          } transition-transform duration-200`}
        />
      </div>
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          left: position.x - 15,
          top: position.y - 15,
        }}
      >
        <div
          className={`w-7 h-7 border border-accent/50 rounded-full ${
            isHovering ? 'scale-150 border-accent' : ''
          } transition-transform duration-200`}
        />
      </div>
    </>
  )
}

export default CustomCursor