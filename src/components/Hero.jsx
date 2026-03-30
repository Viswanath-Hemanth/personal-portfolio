import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import profile from '../data/profile.json'
import { scrollToSection } from '../lib/scrollToSection'

function getInitialTheme() {
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export default function Hero() {
  const hero = profile.hero
  const resumeHref = profile.assets?.resumeFile
    ? new URL(profile.assets.resumeFile, import.meta.env.BASE_URL).toString()
    : new URL('Hemanth_Resume.pdf', import.meta.env.BASE_URL).toString()

  const [theme, setTheme] = useState('light')
  useEffect(() => {
    const initial = getInitialTheme()
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const ctaButtons = useMemo(
    () => [
      {
        label: hero.cta.viewProjectsLabel,
        kind: 'primary',
        onClick: () => scrollToSection('projects')
      },
      {
        label: hero.cta.downloadResumeLabel,
        kind: 'secondary',
        href: resumeHref
      },
      {
        label: hero.cta.contactMeLabel,
        kind: 'secondary',
        onClick: () => scrollToSection('contact')
      }
    ],
    [hero, resumeHref],
  )

  return (
    <section className="relative overflow-hidden pt-14" aria-label="Hero">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent dark:from-indigo-400/10"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6">
        <div className="flex items-start justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="text-sm font-semibold tracking-wide text-slate-600 dark:text-slate-300">
              {hero.name}
            </div>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              {hero.titles[0]}
            </h1>
            <p className="mt-3 text-xl font-semibold tracking-tight text-slate-700 dark:text-slate-200">
              {hero.titles[1]}
            </p>
            <p className="mt-5 max-w-2xl text-slate-700 dark:text-slate-200">
              {hero.tagline}
            </p>
          </motion.div>

          <div className="flex flex-col items-end">
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={() => {
                const next = theme === 'dark' ? 'light' : 'dark'
                setTheme(next)
                document.documentElement.classList.toggle('dark', next === 'dark')
                window.localStorage.setItem('theme', next)
              }}
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {ctaButtons.map((b) => {
            const base =
              'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus:outline-none'
            if (b.href) {
              return (
                <a key={b.label} href={b.href} className={`${base} ${b.kind === 'primary' ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800'}`}>
                  {b.label}
                </a>
              )
            }
            return (
              <button
                key={b.label}
                type="button"
                onClick={b.onClick}
                className={`${base} ${
                  b.kind === 'primary'
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                    : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {b.label}
              </button>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

