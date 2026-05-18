// src/hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.2, ...options })

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [options])

  return { ref, isVisible }
}