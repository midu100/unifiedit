import React from 'react'
import heroBg from '../assets/images/unified-hero.png'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* CONTENT */}
      <div className="relative container mx-auto px-4 text-center text-white max-w-4xl">

        {/* TAGLINE */}
        <p data-aos="fade-up" className="uppercase tracking-widest text-sm text-blue-400 mb-4">
          Cloud • Security • Infrastructure
        </p>

        {/* MAIN HEADING */}
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Empower Your Business with <br />

          <span className="text-blue-400">
            <Typewriter
              words={[
                'Cloud Solutions',
                'Cyber Security',
                'IT Infrastructure',
                'Digital Transformation'
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p data-aos="fade-up" data-aos-delay="200" className="text-gray-300 mb-8 text-lg md:text-xl">
          We deliver secure, scalable, and high-performance IT solutions 
          tailored for modern enterprises. Build, protect, and grow your 
          digital ecosystem with confidence.
        </p>

        {/* CTA BUTTONS */}
        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 justify-center">

          <a href="https://billing.unifiedit.xyz/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition shadow-lg text-center flex-1 sm:flex-none">
            Get Started
          </a>

          <a href="#services" className="border border-white/40 hover:bg-white/10 px-6 py-3 rounded-full font-medium transition text-center flex-1 sm:flex-none">
            Explore Services
          </a>

        </div>

      </div>

      {/* BOTTOM GRADIENT (optional premium look) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />

    </section>
  )
}

export default Hero