// src/components/sections/Services.tsx
import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import { services } from '../../data/portfolioData'

const Services: React.FC = () => {
  return (
    <section id="services" className="relative overflow-hidden">
      <Container>
        <SectionTitle title="Services I Offer" subtitle="What I can do for you" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="glassmorphism rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 group reveal opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-textSecondary">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services