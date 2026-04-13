import React from 'react'
import Hero from '../components/Hero'
import DomainSection from '../components/DomainSection'
import HostingSection from '../components/HostingSection'
import CloudSection from '../components/CloudSection'
import WebDevSection from '../components/WebDevSection'
import EmailSection from '../components/EmailSection'
import MigrationBanner from '../components/MigrationBanner'
import SSLSection from '../components/SSLSection'
import EnterpriseSection from '../components/EnterpriseSection'
import CallCenterSection from '../components/CallCenterSection'

const Home = () => {
  return (
    <main className="overflow-hidden bg-white">
      <Hero />
      <DomainSection />
      <HostingSection />
      <CloudSection />
      <MigrationBanner />
      <WebDevSection />
      <EmailSection />
      <SSLSection />
      <EnterpriseSection />
      <CallCenterSection />
    </main>
  )
}

export default Home