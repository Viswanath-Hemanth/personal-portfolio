import React from 'react'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Experience from '../components/Experience.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Education from '../components/Education.jsx'
import GamerSection from '../components/GamerSection.jsx'
import Contact from '../components/Contact.jsx'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <GamerSection />
      <Contact />
    </div>
  )
}

