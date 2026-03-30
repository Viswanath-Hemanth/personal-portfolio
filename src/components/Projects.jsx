import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import profile from '../data/profile.json'

function Tag({ children }) {
  return (
    <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-200">
      {children}
    </span>
  )
}

export default function Projects() {
  const projects = profile.projects

  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading kicker="PROJECTS" title="Case-ready engineering work" subtitle="Focus on what a recruiter cares about: ownership, impact, and production thinking." />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((p) => (
          <div
            key={p.name}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400">Project</div>
            <div className="mt-2 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">{p.name}</div>
            <p className="mt-3 text-slate-700 dark:text-slate-200">{p.summary}</p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-200">
              {p.keyPoints.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>

            {p.techStack?.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {p.techStack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </motion.div>
    </section>
  )
}

