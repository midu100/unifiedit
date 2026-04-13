import React from 'react'
import SectionTitle from './common/SectionTitle'

const partners = [
  'Dell', 'HP', 'IBM', 'Cisco', 'Mikrotik', 'Lenovo',
  'Huawei', 'Hikvision', 'BenQ', 'Cambium', 'Ubiquity',
  'Palo Alto', 'Sophos', 'Fortinet', 'Barracuda', 'Kaspersky',
]

const EnterpriseSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        
        <div className="text-center mb-16">
          <SectionTitle
            subtitle="Enterprise Solutions"
            title="Trusted Technology Partners"
            description="Strategic partnerships with industry-leading brands"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((p) => (
            <div
              data-aos="fade-up" data-aos-duration="1800"
              key={p}
              className="flex items-center justify-center min-w-[150px] px-8 py-5 bg-white rounded-2xl border text-gray-400 font-bold hover:text-blue-600 hover:border-blue-500 transition-all shadow-sm"
            >
              {p}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default EnterpriseSection
