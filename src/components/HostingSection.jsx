import React from 'react'
import SectionTitle from './common/SectionTitle'
import Button from './common/Button'

const plans = [
  {
    name: 'Starter',
    price: '৳150',
    period: '/mo',
    icon: '🚀',
    features: ['5 GB SSD Storage', '1 Website', 'Free SSL Certificate', 'cPanel Control Panel', '10 Email Accounts', '24/7 Support'],
    href: 'https://billing.unifiedit.xyz/index.php?rp=/store/web-hosting',
  },
  {
    name: 'Business',
    price: '৳350',
    period: '/mo',
    icon: '💎',
    features: ['30 GB SSD Storage', '5 Websites', 'Free SSL Certificate', 'cPanel Control Panel', 'Unlimited Email', 'Auto Backup', 'Free CDN'],
    href: 'https://billing.unifiedit.xyz/index.php?rp=/store/web-hosting',
  },
  {
    name: 'Enterprise',
    price: '৳750',
    period: '/mo',
    icon: '🏢',
    features: ['100 GB SSD Storage', 'Unlimited Websites', 'Free SSL Certificate', 'cPanel Control Panel', 'Unlimited Email', 'Daily Backup', 'Free CDN', 'Priority Support'],
    href: 'https://billing.unifiedit.xyz/index.php?rp=/store/web-hosting',
  },
]

const HostingSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        
        <div data-aos="fade-up" className="text-center mb-16">
          <SectionTitle
            subtitle="Web Hosting"
            title="Premium Hosting Solutions"
            description="High-performance cPanel hosting with NVMe SSD storage"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-6">
          {plans.map((plan, i) => (
            <div
              data-aos="fade-up" data-aos-delay={i * 200}
              key={plan.name}
              className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)] bg-white p-8 md:p-10 rounded-[40px] border border-gray-200 hover:border-blue-500 transition-all hover:shadow-2xl flex flex-col relative group overflow-hidden"
            >
              {/* Premium Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-3xl bg-blue-50 text-blue-600 text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {plan.icon}
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-8">
                  <span data-aos="fade-up" data-aos-duration="1500" className="text-4xl lg:text-5xl font-extrabold text-blue-600 tracking-tight">{plan.price}</span>
                  <span className="text-gray-500 font-medium">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-10 w-full flex-1">
                  {plan.features.map((f) => (
                    <li data-aos="fade-up" data-aos-duration="1500" key={f} className="text-[15px] font-medium text-gray-600 flex items-center justify-center gap-3">
                      <span className="text-blue-500 bg-blue-50 w-6 h-6 flex justify-center items-center rounded-full text-xs font-bold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                
                <Button href={plan.href} variant="primary" size="lg" className="w-full py-4 text-lg font-bold shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transform hover:-translate-y-1 mt-auto">
                  Select {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HostingSection
