// src/components/sections/Hero.tsx
import React, { useEffect, useState } from 'react'
import Button from '../ui/Button'

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)
  const roles = ['MERN Stack Developer', 'Full Stack Engineer', 'React Expert', 'Node.js Specialist']
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    if (index < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, index + 1))
        setIndex(index + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setIndex(0)
        setRoleIndex((roleIndex + 1) % roles.length)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [index, roleIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <h1 className="border-2 border-red-500">Hi, I'm MERN Developer</h1>
      <div className="absolute inset-0 animated-grid opacity-20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-move-blur" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-highlight/20 rounded-full blur-3xl animate-move-blur" style={{ animationDelay: '2s' }} />
      
      {/* Floating Particles */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`
          }}
        />
      ))}

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
          <div className="inline-block mb-4 px-4 py-2 glassmorphism rounded-full">
            <span className="text-accent text-sm">👋 Welcome to my portfolio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text  text-white">
              MERN Developer
            </span>
          </h1>
          
          <div className="text-2xl md:text-4xl text-textSecondary mb-8">
            <span className="border-r-2 border-accent pr-2">{displayText}</span>
            <span className="animate-blink ml-1">|</span>
          </div>
          
          <p className="text-textSecondary max-w-2xl mx-auto mb-12 text-lg">
            Building premium web applications with modern technologies. Specialized in MERN stack, 
            creating responsive, scalable, and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>
          </div>
        </div>

        {/* Floating Tech Badges */}
       {/* Floating Tech Badges */}
<div className="absolute top-1/4 left-5 animate-float">
  <div className="glassmorphism px-4 py-2 rounded-full">React</div>
</div>
<div className="absolute bottom-1/4 right-5 animate-float" style={{ animationDelay: '1s' }}>
  <div className="glassmorphism px-4 py-2 rounded-full">MongoDB</div>
</div>
<div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: '2s' }}>
  <div className="glassmorphism px-4 py-2 rounded-full">Node.js</div>
</div>
      </div>
    </section>
  )
}

export default Hero