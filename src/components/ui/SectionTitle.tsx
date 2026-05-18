// src/components/ui/SectionTitle.tsx
import React from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && <p className="text-textSecondary max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-24 h-1 bg-gradient-to-r from-accent to-highlight mx-auto mt-6 rounded-full" />
    </div>
  )
}

export default SectionTitle