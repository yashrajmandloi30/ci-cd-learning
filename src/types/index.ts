// src/types/index.ts
export interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  liveUrl: string
  githubUrl: string
  features: string[]
}

export interface Skill {
  name: string
  percentage: number
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools'
}

export interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string[]
}

export interface Service {
  id: number
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
}

export interface Statistic {
  label: string
  value: number
  suffix?: string
}