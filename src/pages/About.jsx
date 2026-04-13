import React from 'react'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'

const stats = [
  { value: '450+', label: 'Domain TLDs' },
  { value: '50+', label: 'ISP Partners' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
]

const values = [
  { icon: '🎯', title: 'Our Mission', desc: 'To provide scalable, secure, and affordable cloud solutions that empower businesses in Bangladesh.' },
  { icon: '👁️', title: 'Our Vision', desc: 'To be Bangladesh\'s most trusted technology partner, driving digital transformation with world-class infrastructure.' },
  { icon: '💎', title: 'Our Values', desc: 'Reliability, innovation, and customer-centricity in every solution we deliver.' },
]

const About = () => {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="bg-blue-950 py-24">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <span className="text-sm font-bold tracking-widest uppercase text-blue-400 mb-6 block">Company Profile</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Unified Information <br /> Technology Limited
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Leading the digital frontier in Bangladesh with enterprise-grade cloud 
            infrastructure and state-of-the-art data centers.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 -mt-12">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-wrap gap-6 justify-center">
            {stats.map((s) => (
              <div key={s.label} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-white p-10 rounded-3xl border shadow-xl flex flex-col items-center">
                <span className="text-4xl font-bold text-blue-600 mb-2">{s.value}</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">Building the Future</h2>
            <p className="text-gray-500 text-lg mb-6">
              UITL's Unified Cloud is built on a foundation of state-of-the-art Tier 3/4 data centers 
              strategically located in Dhaka, Kaliakur, and Jashore.
            </p>
            <p className="text-gray-500 text-lg mb-8">
              We prioritize data security with redundant storage hardware, robust encryption protocols, 
              and stringent access control measures.
            </p>
            <Button to="/contact" variant="primary">Get In Touch</Button>
          </div>
          <div className="flex-1 bg-gray-50 p-12 rounded-[50px] border">
             <div className="space-y-6">
                {['BDIX Connected', 'NIX Connected', 'IPLC Ready', 'MPLS Network', 'VeriSign Recognized'].map(item => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">✓</div>
                    <span className="font-bold text-gray-800">{item}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <SectionTitle title="Our Core Values" subtitle="Philosophy" />
          <div className="flex flex-wrap gap-8 justify-center mt-16">
            {values.map((v) => (
              <div key={v.title} className="w-full md:w-[calc(33.333%-21.3px)] p-10 bg-white rounded-[40px] border shadow-sm">
                <div className="text-5xl mb-6">{v.icon}</div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About