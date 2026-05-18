// src/components/ProjectCard.tsx
import React, { useState } from 'react'
import { Project } from '../types'
import Button from './ui/Button'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="glassmorphism rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {project.techStack.slice(0, 3).map(tech => (
              <span key={tech} className="text-xs px-2 py-1 glassmorphism rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-textSecondary mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.features.slice(0, 3).map(feature => (
            <span key={feature} className="text-xs px-2 py-1 bg-secondary rounded-full">
              {feature}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {project.liveUrl !== '#' && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full text-sm py-2">Live Demo</Button>
            </a>
          )}
          {project.githubUrl !== '#' && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full text-sm py-2">GitHub</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard