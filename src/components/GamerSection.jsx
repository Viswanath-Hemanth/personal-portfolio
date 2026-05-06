import React, { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import profile from '../data/profile.json'

function GameCover({ title, coverImage }) {
  if (coverImage) {
    return (
      <div className="h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
        <img
          src={coverImage}
          alt={`${title} cover`}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>
    )
  }

  return (
    <div className="flex h-full w-full items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-500/20 p-4 text-center dark:border-slate-800">
      <div>
        <div className="text-sm font-bold text-slate-900 dark:text-slate-50">{title}</div>
        <div className="mt-2 text-xs font-semibold text-slate-600 dark:text-slate-300">Cover placeholder</div>
      </div>
    </div>
  )
}

export default function GamerSection() {
  const gamer = profile.gamerSection
  const games = gamer.games
  const scrollerRef = useRef(null)
  const [canScroll, setCanScroll] = useState({ left: false, right: true })

  const scrollByAmount = useMemo(() => 220, [])

  function updateScrollState() {
    const el = scrollerRef.current
    if (!el) return
    setCanScroll({
      left: el.scrollLeft > 0,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth - 5
    })
  }

  function scrollLeft() {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: -scrollByAmount, behavior: 'smooth' })
    window.setTimeout(updateScrollState, 250)
  }

  function scrollRight() {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: scrollByAmount, behavior: 'smooth' })
    window.setTimeout(updateScrollState, 250)
  }

  return (
    <section id="gamer" className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading
        kicker="FUN"
        title="Gamer mode"
        subtitle={gamer.headline}
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400">Favorite games</div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollLeft}
              disabled={!canScroll.left}
              aria-label="Scroll games left"
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 disabled:opacity-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={scrollRight}
              disabled={!canScroll.right}
              aria-label="Scroll games right"
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 disabled:opacity-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
            >
              Next
            </button>
          </div>
        </div>

        <div className="mt-4">
          <div
            ref={scrollerRef}
            onScroll={updateScrollState}
            className="flex gap-4 overflow-x-auto pb-3 scroll-smooth"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {games.map((g) => (
              <div key={g.title} className="w-44 shrink-0 snap-start">
                <div className="aspect-[2/3]">
                  <GameCover title={g.title} coverImage={g.coverImage} />
                </div>
                <div className="mt-3 text-center text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {g.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

