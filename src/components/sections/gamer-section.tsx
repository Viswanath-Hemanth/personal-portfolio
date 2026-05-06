"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";

const INITIAL_VISIBLE_COUNT = 4;

export function GamerSection(): React.JSX.Element {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const games = profile.gamerSection.games;
  const visibleGames = games.slice(0, visibleCount);
  const hasMore = visibleCount < games.length;

  return (
    <SectionShell id="gamer">
      <SectionHeading kicker="Fun" title="Gamer mode outside work hours" subtitle={profile.gamerSection.headline} />
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {visibleGames.map((game) => (
            <article key={game.title} className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
              <div className="aspect-[2/3] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <div className="relative h-full w-full">
                  <Image src={game.coverImage} alt={`${game.title} cover`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">{game.title}</p>
              <p className="text-xs text-slate-600 dark:text-slate-300">{game.caption}</p>
            </article>
          ))}
        </div>
        {hasMore ? (
          <div className="mt-6 flex justify-center">
            <Button variant="outline" onClick={() => setVisibleCount((count) => Math.min(count + 4, games.length))}>
              Show More
            </Button>
          </div>
        ) : null}
      </motion.div>
    </SectionShell>
  );
}
