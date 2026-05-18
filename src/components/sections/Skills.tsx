import React, { useState, useEffect } from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SkillCard from '../SkillCard'
import { skills } from '../../data/portfolioData'
const Skills: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'Database', 'Tools']
  const [visible, setVisible] = useState<Set<number>>(new Set())
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.getAttribute('data-index') || '0')
          setVisible(prev => new Set(prev).add(idx))
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.3 })
    document.querySelectorAll('[data-skill]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return (
    <section id="skills">
      <Container>
        <SectionTitle title="Technical Skills" subtitle="Technologies I work with" />
        {categories.map(cat => (
          <div key={cat} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-cyan-500">{cat}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.filter(s => s.category === cat).map((skill, idx) => {
                const globalIdx = skills.findIndex(s => s.name === skill.name)
                return <div key={skill.name} data-skill data-index={globalIdx} className="reveal opacity-0 translate-y-10 transition-all duration-700"><SkillCard skill={skill} isVisible={visible.has(globalIdx)} /></div>
              })}
            </div>
          </div>
        ))}
      </Container>
    </section>
  )
}
export default Skills