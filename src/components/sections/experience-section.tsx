"use client";

import { motion } from "framer-motion";

import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ExperienceSection(): React.JSX.Element {
  return (
    <SectionShell id="experience">
      <SectionHeading kicker="Experience" title="Execution at scale across AI and product delivery" />
      <div className="relative space-y-6">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-slate-200 dark:bg-slate-800" aria-hidden />
        {profile.experience.map((item) => (
          <motion.div key={`${item.company}-${item.dates}`} className="pl-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="absolute mt-7 h-3 w-3 -translate-x-[31px] rounded-full bg-indigo-600 dark:bg-indigo-400" aria-hidden />
            <Card>
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{item.company}</p>
                <CardTitle className="mt-1">{item.role}</CardTitle>
                {item.project ? <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">{item.project}</p> : null}
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{item.dates}</p>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-200">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                {item.leadership?.length ? (
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Leadership</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-200">
                      {item.leadership.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
