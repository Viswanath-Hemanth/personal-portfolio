import React from 'react'

export default function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="mb-6">
      {kicker ? (
        <div className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
          {kicker}
        </div>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{subtitle}</p> : null}
    </div>
  )
}

