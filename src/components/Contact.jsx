import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import profile from '../data/profile.json'

function ContactCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400">{title}</div>
      <div className="mt-3 text-base font-semibold text-slate-900 dark:text-slate-50">{children}</div>
    </div>
  )
}

export default function Contact() {
  const c = profile.contact

  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading
        kicker="CONTACT"
        title="Let’s build something scalable"
        subtitle="Reach out for GenAI system architecture, LLM fine-tuning, or production GenAI delivery."
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2"
      >
        <ContactCard title="Phone">
          <a className="hover:underline" href={`tel:${c.phone.replace(/\s+/g, '')}`}>
            {c.phone}
          </a>
        </ContactCard>

        <ContactCard title="Email">
          <a className="hover:underline" href={`mailto:${c.email}`}>
            {c.email}
          </a>
        </ContactCard>

        <ContactCard title="LinkedIn">
          <a className="hover:underline" href={c.linkedinUrl} target="_blank" rel="noreferrer">
            {c.linkedinUrl.replace('https://', '')}
          </a>
        </ContactCard>

        <ContactCard title="Location">{c.location}</ContactCard>
      </motion.div>

      <div className="mt-10 text-center text-sm font-semibold text-slate-500 dark:text-slate-400">
        Built with React, Tailwind, and subtle motion.
      </div>
    </section>
  )
}

