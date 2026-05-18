// src/components/sections/About.tsx
import React, { useState, useEffect } from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import { statistics } from '../../data/portfolioData'

const About: React.FC = () => {
  const [counters, setCounters] = useState(statistics.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          statistics.forEach((stat, i) => {
            let start = 0
            const end = stat.value
            const duration = 2000
            const increment = end / (duration / 16)
            
            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                setCounters(prev => {
                  const newCounters = [...prev]
                  newCounters[i] = end
                  return newCounters
                })
                clearInterval(timer)
              } else {
                setCounters(prev => {
                  const newCounters = [...prev]
                  newCounters[i] = Math.floor(start)
                  return newCounters
                })
              }
            }, 16)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative overflow-hidden">
      <Container>
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
            <h3 className="text-2xl font-bold mb-4 text-accent">Professional Summary</h3>
            <p className="text-textSecondary mb-6 leading-relaxed">
              I'm a passionate MERN Stack Developer with 4+ years of experience building scalable web applications. 
              Specialized in creating premium digital experiences with React, Node.js, and MongoDB.
            </p>
            <p className="text-textSecondary mb-8 leading-relaxed">
              My expertise includes full-stack development, RESTful API design, database optimization, and creating 
              responsive user interfaces. I focus on delivering high-quality, maintainable code with modern best practices.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {statistics.map((stat, i) => (
                <div key={stat.label} className="text-center p-4 glassmorphism rounded-xl">
                  <div className="text-3xl font-bold text-accent">
                    {counters[i]}{stat.suffix}
                  </div>
                  <div className="text-textSecondary text-sm mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <div className="glassmorphism rounded-2xl p-8 glowing-border">
              <h3 className="text-2xl font-bold mb-4 text-accent">Experience Overview</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Full Stack Development</h4>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent to-highlight h-2 rounded-full w-[95%]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">React Ecosystem</h4>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent to-highlight h-2 rounded-full w-[92%]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Backend & API</h4>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent to-highlight h-2 rounded-full w-[90%]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Database Design</h4>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent to-highlight h-2 rounded-full w-[88%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About