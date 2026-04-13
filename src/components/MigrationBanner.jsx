import React from 'react'
import Button from './common/Button'

const MigrationBanner = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white text-center md:text-left">
          
          <div data-aos="fade-right" data-aos-duration="1500" className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-5xl">🚚</div>
            <div>
              <h3 className="text-3xl font-bold mb-1">Free Website Migration</h3>
              <p className="text-blue-100">Zero downtime guaranteed for your transition</p>
            </div>
          </div>

          <Button href="https://billing.unifiedit.xyz/contact.php" variant="outlineWhite" size="lg">
             Claim Free Migration
          </Button>

        </div>
      </div>
    </section>
  )
}

export default MigrationBanner
