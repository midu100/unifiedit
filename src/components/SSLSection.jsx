import React from 'react'
import Button from './common/Button'

const SSLSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div data-aos="fade-up" data-aos-duration="1500" className="bg-blue-900 rounded-[50px] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-12 text-white overflow-hidden relative">
          
          <div className="flex-1 text-center lg:text-left relative z-10">
            <h2 data-aos="fade-up" data-aos-duration="1800" className="text-4xl md:text-5xl font-bold mb-6">Your Digital Shield</h2>
            <p data-aos="fade-up" data-aos-duration="1900" className="text-blue-100 text-lg mb-10 max-w-lg">
              Premium SSL certificates powered by Comodo & DigiCert. Protect sensitive data and boost your SEO rankings.
            </p>
            <Button href="https://billing.unifiedit.xyz/contact.php" variant="primary" size="lg">
              Secure Your Site Now
            </Button>
          </div>

          <div className="flex-1 flex justify-center relative z-10">
            <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm">
                <span className="text-8xl">🛡️</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SSLSection
