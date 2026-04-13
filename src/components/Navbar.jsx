import React, { useState } from 'react'
import { Link } from 'react-router'
import { FiMenu } from 'react-icons/fi'
import logo from '../assets/images/Logo.png'
import DesktopMenu from './common/DesktopMenu'
import MobileMenu from './common/MobileMenu'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-9 left-0 w-full z-50 flex justify-center px-4 py-3 bg-transparent transition-all duration-300">
        
        {/* GLASS CAPSULE */}
        <div className="w-full max-w-6xl rounded-full bg-white/80 backdrop-blur-xl border border-white/80 shadow-lg">
          <div className="h-16 flex items-center justify-between px-6">
            
            {/* LOGO */}
            <div className="flex items-center">
              <Link to="/">
                <img src={logo} className="h-9 object-contain" alt="UnifiedIT Logo" />
              </Link>
            </div>

            {/* DESKTOP MENU (Extracted) */}
            <DesktopMenu />

            {/* RIGHT SIDE CTA */}
            <div className="flex items-center gap-3">
              <a href="https://billing.unifiedit.xyz/" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition">
                Get Started
              </a>

              {/* MOBILE MENU TRIGGER */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden text-2xl text-gray-800"
              >
                <FiMenu />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU DRAWER (Extracted) */}
      <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </>
  )
}

export default Navbar