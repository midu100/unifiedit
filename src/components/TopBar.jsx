import React from 'react'

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[60] bg-black/50 backdrop-blur-3xl text-white text-xs">
      <div className="container mx-auto px-4 flex justify-between items-center h-9">

        <div className="flex gap-6">
          <span>📞 09617-200800</span>
          <span className="hidden md:block">✉️ bd@unifiedit.xyz</span>
        </div>

        <div className="flex gap-4">
          <a href="#">Login</a>
          <span>|</span>
          <a href="#">Register</a>
        </div>

      </div>
    </div>
  )
}

export default TopBar