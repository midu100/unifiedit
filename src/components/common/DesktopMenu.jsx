import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { FiChevronDown } from 'react-icons/fi'
import NavDropdown from './NavDropdown'
import { navData } from './navData'

const DesktopMenu = () => {
    const [activeDropdown, setActiveDropdown] = useState(null)

    return (
        <div className="hidden lg:flex items-center gap-7">
            {navData.map((item) => {
                const isOpen = activeDropdown === item.label
                return (
                    <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        {item.items ? (
                            <button className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-blue-600 transition">
                                {item.label}
                                <FiChevronDown
                                    className={`text-sm transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                        ) : (
                            <NavLink
                                to={item.to || '/'}
                                className="text-sm font-medium text-gray-800 hover:text-blue-600 transition"
                            >
                                {item.label}
                            </NavLink>
                        )}
                        {/* DROPDOWN */}
                        {item.items && (
                            <div
                                className={`absolute left-0 top-full pt-4 transition-all duration-500 ${isOpen
                                    ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                                    : 'opacity-0 invisible -translate-y-4 pointer-events-none'
                                    }`}
                            >
                                <NavDropdown items={item.items} />
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default DesktopMenu
