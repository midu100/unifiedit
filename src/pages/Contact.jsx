import React from 'react'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'

const Contact = () => {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="bg-blue-950 py-24">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <span className="text-sm font-bold tracking-widest uppercase text-blue-400 mb-6 block">Stay Connected</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Get In Touch</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our solutions? Our enterprise support team is ready to help you 24/7.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Info */}
            <div className="flex-1">
              <SectionTitle title="Contact Details" subtitle="Reach Us" align="left" />
              
              <div className="flex flex-col gap-6 mt-12 w-full">
                <div className="flex gap-5 p-8 bg-gray-50 rounded-3xl border">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">HQ Address</h4>
                    <p className="text-sm text-gray-500">Mannan Tower (3rd Floor), Ka 96/3 Progati Sharani, Dhaka 1229, Bangladesh</p>
                  </div>
                </div>

                <div className="flex gap-5 p-8 bg-gray-50 rounded-3xl border">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Direct Line</h4>
                    <p className="text-xl font-black text-blue-600">09617-200800</p>
                  </div>
                </div>

                <div className="flex gap-5 p-8 bg-gray-50 rounded-3xl border">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Support</h4>
                    <p className="text-sm text-gray-500">bd@unifiedit.xyz</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex-1">
              <div className="p-10 bg-white rounded-[50px] shadow-2xl border">
                <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <input type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border outline-none focus:border-blue-600" readOnly />
                    <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border outline-none focus:border-blue-600" readOnly />
                  </div>
                  <input type="text" placeholder="Subject" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border outline-none focus:border-blue-600" readOnly />
                  <textarea placeholder="Your Message" rows={4} className="w-full px-6 py-4 bg-gray-50 rounded-2xl border outline-none focus:border-blue-600 resize-none" readOnly />
                  <Button variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
