import React from 'react'
import SectionTitle from './common/SectionTitle'
import ServiceCard from './common/ServiceCard'

const domainServices = [
  { icon: '🌐', title: 'Domain Registration', description: 'Register your perfect domain with 450+ extensions' },
  { icon: '🔄', title: 'Domain Renew', description: 'Easy renewal to keep your domain active' },
  { icon: '📦', title: 'Domain Transfer', description: 'Transfer from any other registrar seamlessly' },
  { icon: '⚙️', title: 'Manage Domain', description: 'Full control over your domain settings' },
  { icon: '🔒', title: 'WHOIS Privacy', description: 'Protect your personal information' },
]

const domainPrices = [
  { ext: '.com', price: '৳1,200', period: '/yr' },
  { ext: '.xyz', price: '৳250', period: '/yr' },
  { ext: '.net', price: '৳1,500', period: '/yr' },
  { ext: '.org', price: '৳1,400', period: '/yr' },
  { ext: '.info', price: '৳500', period: '/yr' },
  { ext: '.com.bd', price: '৳800', period: '/yr' },
]

const DomainSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        
        <div data-aos="fade-up" className="text-center mb-16">
          <SectionTitle
            subtitle="Domain Services"
            title="Secure Your Perfect Domain"
            description="Register your perfect domain with 450+ extensions"
          />
        </div>

        {/* Domain price ticker */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {domainPrices.map((d, i) => (
            <div data-aos="fade-up" data-aos-delay={i * 100} key={d.ext} className="flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-md rounded-2xl border shadow-sm hover:shadow-md hover:border-blue-500 hover:-translate-y-1 transition-all">
              <span className="font-extrabold text-gray-800 text-lg">{d.ext}</span>
              <span className="text-blue-600 font-bold text-lg">{d.price}</span>
              <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">{d.period}</span>
            </div>
          ))}
        </div>

        {/* Service cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {domainServices.map((service, i) => (
            <div data-aos="fade-up" data-aos-delay={i * 150} key={service.title} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default DomainSection
