import React from 'react'
import SectionTitle from './common/SectionTitle'
import Button from './common/Button'

const EmailSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        
        <div className="text-center mb-16">
          <SectionTitle
            subtitle="Business Email"
            title="Professional Email Solutions"
            description="Custom domain email with robust security and spam filters"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div data-aos="fade-right" data-aos-duration="1500" className="flex-1 p-10 bg-white rounded-[40px] border shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center">
            <div className="text-4xl mb-6">✉️</div>
            <h3 className="text-2xl font-bold mb-3">Business Email</h3>
            <p className="text-gray-500 mb-8 flex-1">
              Professional email hosting with cPanel interface. Perfect for branded communication.
            </p>
            <Button href="https://billing.unifiedit.xyz/index.php?rp=/store/business-email" variant="outline" size="lg" className="w-full">
              Select Plan
            </Button>
          </div>

          {/* Card 2 */}
          <div data-aos="fade-left" data-aos-duration="1500" className="flex-1 p-10 bg-blue-900 text-white rounded-[40px] shadow-2xl flex flex-col items-center text-center">
            <div className="text-4xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold mb-3">Business Email Plus</h3>
            <p className="text-blue-200 mb-8 flex-1">
              Advanced features with Microsoft 365 & Google Workspace integration.
            </p>
            <Button href="https://billing.unifiedit.xyz/index.php?rp=/store/business-email" variant="primary" size="lg" className="w-full">
              Upgrade Now
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default EmailSection
