// src/components/sections/Experience.tsx
import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'

import { experiences } from '../../data/portfolioData'
import ExperienceCard from '../ExperienceCardProps'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative overflow-hidden">
      <Container>
        <SectionTitle title="Work Experience" subtitle="Professional journey" />
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent to-highlight hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="reveal opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <ExperienceCard experience={exp} index={index} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Experience