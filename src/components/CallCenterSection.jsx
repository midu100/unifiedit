import React from 'react'
import Button from './common/Button'

const CallCenterSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 text-center lg:text-left">
            <h2 data-aos="fade-up" data-aos-duration="1500" className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">BTRC-Licensed <span className="text-blue-600">Call Center</span></h2>
            <p data-aos="fade-up" data-aos-duration="1700" className="text-gray-500 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
               Comprehensive call center platform enabling businesses to manage sales lead 
               generation, CRM services, and customized BPO solutions.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
               {['Sales Leads', 'CRM Integration', '24/7 Support'].map(item => (
                 <div key={item} data-aos="fade-up" data-aos-duration="1800" className="px-6 py-2 bg-gray-100 rounded-full text-sm font-bold text-gray-700">{item}</div>
               ))}
            </div>
            <Button to="/contact" variant="primary" size="lg" >Talk to an Expert</Button>
          </div>

          <div data-aos="fade-up" data-aos-duration="1500" className="flex-1 flex justify-center">
            <div className="w-full max-w-md bg-gray-50 p-12 rounded-[50px] border text-center">
               <div className="text-6xl mb-6">📞</div>
               <h3 className="text-2xl font-bold mb-2">Direct Line</h3>
               <p className="text-gray-500 mb-8">Available 24/7 for enterprise queries</p>
               <div className="text-3xl font-black text-blue-600">09617-200800</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CallCenterSection
