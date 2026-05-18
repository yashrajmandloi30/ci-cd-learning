// src/components/ExperienceCard.tsx
import React from 'react'
import { Experience } from '../types'

interface ExperienceCardProps {
  experience: Experience
  index: number
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <div className={`flex flex-col md:flex-row gap-6 items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="flex-1 md:text-right">
        <div className="glassmorphism rounded-xl p-6 hover:glowing-border transition-all duration-300">
          <h3 className="text-xl font-bold text-accent mb-2">{experience.title}</h3>
          <h4 className="text-highlight mb-2">{experience.company}</h4>
          <p className="text-textSecondary text-sm mb-4">{experience.period}</p>
          <ul className="list-disc list-inside text-textSecondary space-y-2">
            {experience.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative flex items-center justify-center w-12 h-12">
        <div className="w-4 h-4 bg-accent rounded-full border-4 border-highlight z-10" />
      </div>
      <div className="flex-1" />
    </div>
  )
}

export default ExperienceCard