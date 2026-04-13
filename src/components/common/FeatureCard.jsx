import React from 'react'

const FeatureCard = ({ icon, title, description, light = false }) => {
  return (
    <div className={`flex flex-col p-8 rounded-3xl transition-all duration-300 h-full border hover:-translate-y-1
                     ${light 
                       ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-900/20' 
                       : 'bg-gray-50 hover:bg-white hover:shadow-xl border-gray-200 hover:border-blue-500/30'
                     }`}>
      <div className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-6
                       ${light ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-50 text-blue-600'}`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className={`text-xl font-bold mb-3 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`text-sm font-medium leading-relaxed ${light ? 'text-blue-100/70' : 'text-gray-500'}`}>
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
