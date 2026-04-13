import React from 'react'
import { NavLink } from 'react-router'
import { navData } from './navData'

const MobileMenu = ({ mobileOpen, setMobileOpen }) => {
    return (
        <>
            {/* BACKDROP */}
            <div
                onClick={() => setMobileOpen(false)}
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[65] transition-all duration-300 ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            />

            {/* MOBILE DRAWER */}
            <div
                className={`fixed top-0 right-0 h-full w-[300px] z-[70]
        transform transition-transform duration-500 ease-out
        ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* GLASS PANEL */}
                <div className="h-full bg-white/80 backdrop-blur-xl shadow-2xl flex flex-col">
                    {/* TOP BAR */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
                        <span className="font-semibold text-lg">Menu</span>
                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="text-xl hover:rotate-90 transition"
                        >
                            ✕
                        </button>
                    </div>

                    {/* MENU ITEMS */}
                    <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2">
                        {navData.map((item) => (
                            <div key={item.label}>
                                {item.items ? (
                                    <details className="group">
                                        <summary className="flex justify-between items-center cursor-pointer py-3 text-[15px] font-medium text-gray-800 hover:text-blue-600 transition list-none">
                                            {item.label}
                                            <span className="text-xs transition-transform group-open:rotate-180">
                                                ▾
                                            </span>
                                        </summary>
                                        <div className="pl-3 flex flex-col gap-2 pb-2">
                                            {item.items.map((sub) => (
                                                <NavLink
                                                    key={sub.label}
                                                    to={sub.to || '/'}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="text-sm text-gray-600 hover:text-blue-600 transition"
                                                >
                                                    {sub.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </details>
                                ) : (
                                    <NavLink
                                        to={item.to || '/'}
                                        onClick={() => setMobileOpen(false)}
                                        className="block py-3 text-[15px] font-medium text-gray-800 hover:text-blue-600 transition"
                                    >
                                        {item.label}
                                    </NavLink>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="p-5 border-t border-black/10 mt-auto">
                        <a href="https://billing.unifiedit.xyz/" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu
