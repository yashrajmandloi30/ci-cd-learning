// src/data/portfolioData.ts

import {  Experience, Project, Service, Skill, Statistic, Testimonial } from "../types"


export const projects: Project[] = [
  {
    id: 1,
    title: 'MindCoders Website',
    description: 'Premium educational platform for coding courses with interactive learning modules and community features.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    liveUrl: 'https://mindcoders.in/',
    githubUrl: '#',
    features: ['Course Management', 'User Dashboard', 'Payment Integration', 'Live Classes']
  },
  {
    id: 2,
    title: 'GPH Books',
    description: 'E-commerce platform for academic books with advanced search and recommendation system.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600',
    techStack: ['React', 'Redux Toolkit', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://gphbooks.com/',
    githubUrl: '#',
    features: ['Book Catalog', 'Cart System', 'Order Tracking', 'Review System']
  },
  {
    id: 3,
    title: 'Shri Balaji Dental Clinic CRM',
    description: 'Complete clinic management system with patient records, appointments, billing, and doctor dashboard.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    liveUrl: '#',
    githubUrl: '#',
    features: ['Patient Management', 'Appointment Booking', 'Missing Appointment Tracking', 'Charges & Billing', 'Doctor Dashboard', 'Daily Reports']
  }
]

export const skills: Skill[] = [
  { name: 'React.js', percentage: 95, category: 'Frontend' },
  { name: 'TypeScript', percentage: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', percentage: 92, category: 'Frontend' },
  { name: 'Redux Toolkit', percentage: 88, category: 'Frontend' },
  { name: 'Node.js', percentage: 90, category: 'Backend' },
  { name: 'Express.js', percentage: 92, category: 'Backend' },
  { name: 'REST API', percentage: 95, category: 'Backend' },
  { name: 'JWT Auth', percentage: 88, category: 'Backend' },
  { name: 'MongoDB', percentage: 90, category: 'Database' },
  { name: 'Mongoose', percentage: 87, category: 'Database' },
  { name: 'Git', percentage: 92, category: 'Tools' },
  { name: 'GitHub Actions', percentage: 80, category: 'Tools' }
]

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Senior MERN Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: [
      'Lead development of 5+ full-stack web applications using React and Node.js',
      'Implemented RESTful APIs and JWT authentication for secure user access',
      'Optimized database queries reducing response time by 40%',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Digital Innovations',
    period: '2020 - 2022',
    description: [
      'Developed CRM systems with appointment tracking and billing modules',
      'Integrated payment gateways and real-time notifications',
      'Built responsive admin dashboards with Redux state management',
      'Collaborated with cross-functional teams on 10+ client projects'
    ]
  }
]

export const services: Service[] = [
  { id: 1, title: 'Web Development', description: 'Custom responsive websites with modern frameworks', icon: '🌐' },
  { id: 2, title: 'Admin Dashboard', description: 'Interactive dashboards with data visualization', icon: '📊' },
  { id: 3, title: 'CRM Development', description: 'Tailored CRM solutions for business needs', icon: '👥' },
  { id: 4, title: 'Responsive UI Design', description: 'Mobile-first designs with smooth animations', icon: '🎨' },
  { id: 5, title: 'API Integration', description: 'RESTful API development and third-party integration', icon: '🔌' },
  { id: 6, title: 'Database Design', description: 'Efficient MongoDB schema design and optimization', icon: '🗄️' }
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'CEO, MindCoders',
    content: 'Exceptional MERN stack developer! Delivered high-quality code and innovative solutions.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Project Manager',
    content: 'Professional, punctual, and technically brilliant. The CRM system exceeded our expectations.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Kumar',
    role: 'CTO, GPH Books',
    content: 'Great communication and deep understanding of full-stack development. Highly recommended!',
    rating: 5
  }
]

export const statistics: Statistic[] = [
  { label: 'Projects Completed', value: 25, suffix: '+' },
  { label: 'Happy Clients', value: 18, suffix: '+' },
  { label: 'Years Experience', value: 4, suffix: '' },
  { label: 'Tech Stack Mastered', value: 12, suffix: '' }
]