import React from 'react'
import SectionTitle from './common/SectionTitle'
import FeatureCard from './common/FeatureCard'
import Button from './common/Button'

const features = [
  { icon: '🏢', title: 'Tier 3/4 Data Centers', description: 'Strategically located in Dhaka, Kaliakur, and Jashore with advanced power and cooling systems.' },
  { icon: '🔐', title: 'Security & Reliability', description: 'Redundant storage, robust encryption, and stringent access control for your data.' },
  { icon: '📊', title: 'Continuous Monitoring', description: 'Automated maintenance, comprehensive disaster recovery, and compliance guarantees.' },
  { icon: '🛡️', title: 'Next-Gen Firewall', description: 'AI-powered threat detection with Palo Alto, Sophos, and Fortinet solutions.' },
  { icon: '🌍', title: 'MPLS Connectivity', description: '50+ ISP partnerships with BDIX, NIX, IPLC for optimal data transmission.' },
  { icon: '💡', title: 'Cost-Effective', description: 'Pay per concurrent session — no costly upfront investments required.' },
]

const CloudSection = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        
        <div className="text-center mb-16">
          <SectionTitle
            subtitle="Cloud Infrastructure"
            title="Next-Gen Unified Cloud"
            description="Enterprise-grade cloud platform built for mission-critical workloads"
            light
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: '☁️', title: 'Elastic Compute', desc: 'Scalable virtual servers' },
            { icon: '💾', title: 'NVMe Storage', desc: 'High-speed data access' },
            { icon: '🌐', title: 'Global CDN', description: 'Low-latency delivery' },
            { icon: '🛡️', title: 'Advanced Security', description: 'AI-powered threat protection' },
          ].map((f) => (
            <div data-aos="fade-right" data-aos-duration="1500" key={f.title} className="p-8 bg-white/5 rounded-[32px] border border-white/10 flex flex-col items-center text-center">
              <div className="text-4xl mb-6">{f.icon}</div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc || f.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button to="/cloud" variant="outlineWhite" size="lg" className="px-12">
            Explore Cloud Solutions
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CloudSection
