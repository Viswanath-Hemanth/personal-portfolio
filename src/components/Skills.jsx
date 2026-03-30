import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import profile from '../data/profile.json'

function SkillChip({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
      {children}
    </span>
  )
}

export default function Skills() {
  const skills = profile.skills
  return (
    <section id="skills" className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading
        kicker="SKILLS"
        title="GenAI depth + production-grade engineering"
        subtitle="Grouped for fast scanning during interviews and resume reviews."
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2"
      >
        {skills.map((group) => (
          <div
            key={group.group}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400">{group.group}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((it) => (
                <SkillChip key={it}>{it}</SkillChip>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

