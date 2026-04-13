import React from 'react'
import { Link } from 'react-router'

const ServiceCard = ({ icon, title, description, link = '#' }) => {
  return (
    <Link
      to={link}
      className="flex flex-col items-center p-8 bg-white rounded-3xl border border-gray-200 
                 hover:border-blue-500/50 hover:shadow-2xl hover:-translate-y-2 
                 transition-all duration-300 group h-full"
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-2xl 
                      bg-blue-50 text-blue-600 mb-6 group-hover:bg-blue-600 
                      group-hover:text-white group-hover:scale-110 transition-all duration-300">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{title}</h3>
      {description && (
        <p className="text-sm text-gray-500 font-medium text-center leading-relaxed">{description}</p>
      )}
    </Link>
  )
}

export default ServiceCard
