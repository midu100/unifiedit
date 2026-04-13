import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/Logo.png'

const footerLinks = {
  services: [
    { label: 'Domain Registration', href: 'https://billing.unifiedit.xyz/cart.php?a=add&domain=register' },
    { label: 'Web Hosting', href: 'https://billing.unifiedit.xyz/index.php?rp=/store/web-hosting' },
    { label: 'Email Hosting', href: 'https://billing.unifiedit.xyz/index.php?rp=/store/email-hosting' },
    { label: 'Reseller Hosting', href: 'https://billing.unifiedit.xyz/index.php?rp=/store/reseller-hosting' },
    { label: 'Business Email', href: 'https://billing.unifiedit.xyz/index.php?rp=/store/business-email' },
    { label: 'SSL Certificates', href: 'https://billing.unifiedit.xyz/contact.php' },
  ],
  company: [
    { label: 'About Us', to: '/about' },
    { label: 'Cloud Solutions', to: '/cloud' },
    { label: 'Web Development', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ],
  support: [
    { label: 'Login', href: 'https://billing.unifiedit.xyz/index.php?rp=/login' },
    { label: 'Register', href: 'https://billing.unifiedit.xyz/register.php' },
    { label: 'Support Center', href: 'https://billing.unifiedit.xyz/contact.php' },
    { label: 'WHOIS Privacy', href: 'https://billing.unifiedit.xyz/cart.php?a=add&domain=register' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap gap-12 justify-between">
          
          {/* Brand */}
          <div className="w-full lg:w-[calc(35%-24px)]">
            <Link to="/" data-aos="fade-up" data-aos-duration="2000" className="mb-6 block">
              <img src={logo} className="h-10 object-contain brightness-0 invert" alt="Unified IT" />
            </Link>
            <p data-aos="fade-up" data-aos-duration="2400" className="text-sm leading-relaxed mb-6">
              Pioneering cloud services in Bangladesh with enterprise-grade security and state-of-the-art infrastructure.
            </p>
            <div className="space-y-2 text-xs font-medium">
               <p data-aos="fade-up" data-aos-duration="2500">📍 Mannan Tower, Dhaka 1229</p>
               <p data-aos="fade-up" data-aos-duration="2600">📞 09617-200800</p>
               <p data-aos="fade-up" data-aos-duration="2700">✉️ bd@unifiedit.xyz</p>
            </div>
          </div>

          {/* Links */}
          <div className="w-full sm:w-[calc(50%-24px)] lg:flex-1">
             <h4 data-aos="fade-up" data-aos-duration="2000" className="text-white font-bold mb-6">Services</h4>
             <ul data-aos="fade-up" data-aos-duration="2200" className="space-y-3 text-sm">
                {footerLinks.services.map(l => (
                  <li key={l.label}><a href={l.href}  className="hover:text-blue-500 transition-colors">{l.label}</a></li>
                ))}
             </ul>
          </div>

          <div className="w-full sm:w-[calc(50%-24px)] lg:flex-1">
             <h4 data-aos="fade-up" data-aos-duration="2000" className="text-white font-bold mb-6">Company</h4>
             <ul data-aos="fade-up" data-aos-duration="2200" className="space-y-3 text-sm">
                {footerLinks.company.map(l => (
                  <li key={l.label}><Link to={l.to} className="hover:text-blue-500 transition-colors">{l.label}</Link></li>
                ))}
             </ul>
          </div>

          <div className="w-full sm:w-[calc(50%-24px)] lg:flex-1">
             <h4 data-aos="fade-up" data-aos-duration="2000" className="text-white font-bold mb-6">Support</h4>
             <ul data-aos="fade-up" data-aos-duration="2200" className="space-y-3 text-sm">
                {footerLinks.support.map(l => (
                  <li key={l.label}><a href={l.href} className="hover:text-blue-500 transition-colors">{l.label}</a></li>
                ))}
             </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-600">
           <p>© 2024 Unified IT Limited</p>
           <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="https://www.facebook.com/profile.php?id=100092279147195" className="hover:text-white transition-colors">Facebook</a>
           </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
