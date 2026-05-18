// src/components/layout/MobileMenu.tsx
import React from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const sectionId = href.slice(1)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-md md:hidden">
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection(link.href)
            }}
            className="text-2xl text-textPrimary hover:text-accent transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default MobileMenu