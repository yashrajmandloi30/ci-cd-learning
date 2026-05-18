// src/components/SkillCard.tsx
import React from 'react'
import { Skill } from '../types'

interface SkillCardProps {
  skill: Skill
  isVisible: boolean
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, isVisible }) => {
  return (
    <div className="glassmorphism rounded-xl p-6 hover:scale-105 transition-transform duration-300">
      <div className="flex justify-between mb-3">
        <h4 className="text-lg font-semibold">{skill.name}</h4>
        <span className="text-accent">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-accent to-highlight h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default SkillCard