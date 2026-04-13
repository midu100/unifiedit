import React from 'react'

const SectionTitle = ({ subtitle, title, description, align = 'center', light = false }) => {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className={`flex flex-col ${alignClass} mb-12`}>
      {subtitle && (
        <span className={`text-sm font-semibold tracking-widest uppercase mb-3 ${light ? 'text-blue-300' : 'text-blue-600'}`}>
          {subtitle}
        </span>
      )}
      <h2 data-aos="fade-up" data-aos-duration="1700" className={`text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {description && (
        <p data-aos="fade-up" data-aos-duration="1800" className={`text-base md:text-lg max-w-2xl leading-relaxed ${light ? 'text-gray-300' : 'text-gray-500'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
