import React from 'react'
import SectionTitle from '../components/common/SectionTitle'
import ServiceCard from '../components/common/ServiceCard'
import WebDevSection from '../components/WebDevSection'

const allServices = [
  { icon: '🌐', title: 'Domain Registration', description: '450+ extensions with VeriSign recognition' },
  { icon: '💻', title: 'Web Hosting', description: 'cPanel hosting with SSD storage & free SSL' },
  { icon: '✉️', title: 'Email Hosting', description: 'Professional email with cPanel management' },
  { icon: '🔄', title: 'Reseller Hosting', description: 'Provide hosting services to your clients' },
  { icon: '🖥️', title: 'Managed VPS', description: 'We manage your VPS — focus on business' },
  { icon: '⚙️', title: 'Unmanaged VPS', description: 'Full root access for advanced users' },
  { icon: '☁️', title: 'Cloud Solutions', description: 'Tier 3/4 data center infrastructure' },
  { icon: '🛡️', title: 'Firewall Solutions', description: 'AI-powered threat detection & prevention' },
  { icon: '🌍', title: 'Data & Internet', description: '50+ ISP partnerships with MPLS connectivity' },
  { icon: '📧', title: 'Business Email', description: 'Microsoft 365 & Google Workspace integration' },
  { icon: '🔒', title: 'SSL Certificates', description: 'Comodo & DigiCert SSL for security' },
  { icon: '📞', title: 'Call Center & BPO', description: 'BTRC-licensed call center solutions' },
]

const Services = () => {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="bg-blue-950 py-24">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <span className="text-sm font-bold tracking-widest uppercase text-blue-400 mb-6 block">Our Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Complete IT Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            From domain registration to enterprise cloud infrastructure — everything your business needs to excel.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <SectionTitle title="Our Services" subtitle="Solutions Ecosystem" />
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            {allServices.map((s) => (
              <div key={s.title} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                <ServiceCard {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <WebDevSection />

      {/* Hardware */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <SectionTitle title="Enterprise Hardware" subtitle="Hardware Supply" />
          <div className="flex flex-wrap justify-center gap-6 mt-16">
             {[
               'Dell', 'HP', 'Cisco', 'Mikrotik', 'Hikvision', 'Lenovo'
             ].map(h => (
               <div key={h} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(16.666%-20px)] p-6 bg-white rounded-2xl border shadow-sm flex flex-col items-center">
                  <div className="text-3xl mb-4">🖥️</div>
                  <span className="font-bold text-gray-800 uppercase tracking-widest text-xs">{h}</span>
               </div>
             ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
