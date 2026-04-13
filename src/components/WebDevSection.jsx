import React from 'react'
import SectionTitle from './common/SectionTitle'

const WebDevSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        
        <div data-aos="fade-up" className="text-center mb-16">
          <SectionTitle
            subtitle="Web Development"
            title="Custom Software Solutions"
            description="Responsive, fast, and SEO-optimized web applications"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: '🎨', title: 'UI/UX Design', desc: 'Modern and intuitive interfaces' },
            { icon: '⚛️', title: 'Frontend Dev', desc: 'React, Next.js, and Tailwind CSS' },
            { icon: '🛠️', title: 'Backend Dev', desc: 'Scalable APIs and robust databases' },
          ].map((s, i) => (
            <div data-aos="fade-up" data-aos-delay={i * 150} key={s.title} className="w-full md:w-[calc(33.333%-21.3px)] p-10 bg-gray-50 rounded-[40px] border flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-gray-500 font-medium">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WebDevSection
