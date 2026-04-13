import React from 'react'
import { Link } from 'react-router'

const Button = ({ children, to, href, variant = 'primary', size = 'md', className = '' }) => {
  const baseClass = 'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 cursor-pointer'
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md',
    secondary: 'bg-blue-950 text-white hover:bg-blue-900',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    outlineWhite: 'border-2 border-white text-white hover:bg-white hover:text-blue-950',
    ghost: 'text-blue-600 hover:bg-blue-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = `${baseClass} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>
  }
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>
  }
  return <button className={classes}>{children}</button>
}

export default Button
