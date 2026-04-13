import React from 'react'
import SectionTitle from '../components/common/SectionTitle'
import FeatureCard from '../components/common/FeatureCard'
import Button from '../components/common/Button'

const cloudFeatures = [
  { icon: '🏢', title: 'Tier 3/4 Data Centers', description: 'Strategically located in Dhaka, Kaliakur, and Jashore' },
  { icon: '🔐', title: 'Security & Reliability', description: 'Redundant storage and robust encryption protocols' },
  { icon: '📊', title: 'Continuous Monitoring', description: 'Automated maintenance and disaster recovery plans' },
  { icon: '⚡', title: 'High Performance', description: 'Powerful servers providing enterprise scalability' },
]

const firewallFeatures = [
  { icon: '🛡️', title: 'Intelligent Threat Detection', description: 'ML/AI-powered identification of emerging threats' },
  { icon: '💰', title: 'Cost-Effective Pricing', description: 'Pay per concurrent session — no upfront investments' },
  { icon: '🔧', title: 'Centralized Management', description: 'Streamlined policy creation and monitoring' },
  { icon: '🔒', title: 'Application Control', description: 'IPS, URL filtering, and SSL decryption' },
]

const internetFeatures = [
  { icon: '🌍', title: '50+ ISP Partners', description: 'Coverage across all telecom operators in Bangladesh' },
  { icon: '🔗', title: 'MPLS Technology', description: 'Optimal data transmission for cloud workloads' },
  { icon: '📡', title: 'Redundant Connectivity', description: 'Automatic failover ensures uninterrupted service' },
  { icon: '👁️', title: 'Advanced Monitoring', description: 'Continuous checks with instant resolution' },
]

const Cloud = () => {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="bg-blue-950 py-24">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <span className="text-sm font-bold tracking-widest uppercase text-blue-400 mb-6 block">Unified Infrastructure</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Cloud Solutions</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade cloud infrastructure with state-of-the-art data centers and secure connectivity.
          </p>
        </div>
      </section>

      {/* Cloud Platform */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <SectionTitle title="Unified Cloud Platform" subtitle="Core Infrastructure" />
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            {cloudFeatures.map((f) => (
              <div key={f.title} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                <FeatureCard {...f} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Firewall */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <SectionTitle title="Next-Generation Firewall" subtitle="Security & Protection" description="Gartner-recognized firewall with unparalleled security" light />
          <div className="flex flex-wrap justify-center gap-6 mt-16 mb-12">
            {firewallFeatures.map((f) => (
              <div key={f.title} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                <FeatureCard {...f} light />
              </div>
            ))}
          </div>
          <Button href="https://billing.unifiedit.xyz/contact.php" variant="outlineWhite" size="lg">Request Secure Audit</Button>
        </div>
      </section>

      {/* Internet */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <SectionTitle title="Data & Internet Solutions" subtitle="Global Connectivity" />
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            {internetFeatures.map((f) => (
              <div key={f.title} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                <FeatureCard {...f} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cloud
