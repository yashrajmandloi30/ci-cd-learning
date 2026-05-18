// src/components/ui/Button.tsx
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = 'px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer relative overflow-hidden group'
  
  const variants = {
    primary: 'bg-gradient-to-r from-accent to-highlight text-white hover:shadow-lg hover:shadow-accent/50 neon-glow',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white'
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-highlight to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </button>
  )
}

export default Button