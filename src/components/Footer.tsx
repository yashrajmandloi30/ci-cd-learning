// src/components/Footer.tsx
import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/50 border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-textSecondary text-sm">
            © {currentYear} MERN Stack Developer. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#home" className="text-textSecondary hover:text-accent transition-colors text-sm">Home</a>
            <a href="#about" className="text-textSecondary hover:text-accent transition-colors text-sm">About</a>
            <a href="#projects" className="text-textSecondary hover:text-accent transition-colors text-sm">Projects</a>
            <a href="#contact" className="text-textSecondary hover:text-accent transition-colors text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer