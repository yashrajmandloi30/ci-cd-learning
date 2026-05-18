// src/components/TestimonialCard.tsx
import React from 'react'
import { Testimonial } from '../types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="glassmorphism rounded-2xl p-8 text-center">
      <div className="flex justify-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <p className="text-textSecondary mb-6 italic">"{testimonial.content}"</p>
      <h4 className="text-lg font-bold text-accent">{testimonial.name}</h4>
      <p className="text-sm text-textSecondary">{testimonial.role}</p>
    </div>
  )
}

export default TestimonialCard