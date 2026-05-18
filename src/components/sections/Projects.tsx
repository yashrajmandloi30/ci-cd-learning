// src/components/sections/Projects.tsx
import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from '../ProjectCard'
import { projects } from '../../data/portfolioData'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative overflow-hidden">
      <Container>
        <SectionTitle title="Featured Projects" subtitle="Some of my best work" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="reveal opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects