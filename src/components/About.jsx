import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import profile from '../data/profile.json'

function Chip({ children }) {
  return (
    <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
      {children}
    </span>
  )
}

export default function About() {
  const about = profile.about
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading
        kicker="ABOUT"
        title="System builder mindset with GenAI depth"
        subtitle="Recruiter-scan friendly overview: leadership, scale, and hands-on engineering."
      />

      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">{about.lead}</p>

        <div className="mt-6">
          <div className="text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400">Expertise</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {about.expertise.map((e) => (
              <Chip key={e}>{e}</Chip>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400">Story angle</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-200">
              {about.storyBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400">Highlights</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-200">
              {about.achievements.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <div className="text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400">Languages</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {about.languages.map((l) => (
              <Chip key={l}>{l}</Chip>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

