import React from 'react'

const NavDropdown = ({ items }) => {
  return (
    <div className="absolute top-full left-0 pt-2 z-50">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 min-w-[280px]">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href || '#'}
            className="flex flex-col px-4 py-3 rounded-xl hover:bg-blue-50/50 transition-colors group"
          >
            <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              {item.label}
            </span>
            {item.desc && (
              <span className="text-xs text-gray-500 font-medium mt-1">{item.desc}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  )
}

export default NavDropdown
