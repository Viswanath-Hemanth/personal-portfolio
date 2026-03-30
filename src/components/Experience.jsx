import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import profile from '../data/profile.json'

function TimelineCard({ item }) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="absolute -left-3 top-7 h-3 w-3 rounded-full bg-indigo-600 shadow dark:bg-indigo-400" aria-hidden="true" />
      <div className="pl-2">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <div className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">
              {item.company}
            </div>
            <div className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-50">{item.role}</div>
            {item.project ? (
              <div className="mt-1 text-sm font-semibold text-indigo-700 dark:text-indigo-300">{item.project}</div>
            ) : null}
          </div>
          <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">{item.dates}</div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-200">
            {item.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          {item.leadership?.length ? (
            <div>
              <div className="text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                Leadership / Product
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-200">
                {item.leadership.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const experience = profile.experience
  return (
    <section id="experience" className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading kicker="EXPERIENCE" title="Impact across AI engineering and leadership" />

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <div className="relative mt-2 space-y-6">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
          {experience.map((item) => (
            <div key={`${item.company}-${item.dates}`} className="pl-8">
              <TimelineCard item={item} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

