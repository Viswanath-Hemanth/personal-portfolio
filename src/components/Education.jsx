import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import profile from '../data/profile.json'

export default function Education() {
  const education = profile.education
  return (
    <section id="education" className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading kicker="EDUCATION" title="Formal ML training" subtitle="Academic foundation aligned with production GenAI specialization." />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2"
      >
        {education.map((e) => (
          <div
            key={`${e.degree}-${e.school}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400">{e.school}</div>
            <div className="mt-2 text-lg font-bold text-slate-900 dark:text-slate-50">{e.degree}</div>
            <div className="mt-3 text-sm font-semibold text-slate-600 dark:text-slate-300">{e.dates}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

