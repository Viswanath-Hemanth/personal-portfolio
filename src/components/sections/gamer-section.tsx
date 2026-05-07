"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { cn } from "@/lib/cn";

/** Eight tiles per page: 4 columns × 2 rows from `sm` up; 2 columns × 4 rows on smaller screens. */
const TILES_PER_PAGE = 8;

export function GamerSection(): React.JSX.Element {
  const games = profile.gamerSection.games;
  const totalPages = Math.max(1, Math.ceil(games.length / TILES_PER_PAGE));
  const [page, setPage] = useState(0);

  const safePage = Math.min(page, totalPages - 1);
  const pageGames = games.slice(safePage * TILES_PER_PAGE, safePage * TILES_PER_PAGE + TILES_PER_PAGE);
  const showNav = totalPages > 1;

  function goPrev(): void {
    setPage((p) => Math.max(0, Math.min(p, totalPages - 1) - 1));
  }

  function goNext(): void {
    setPage((p) => Math.min(totalPages - 1, Math.min(p, totalPages - 1) + 1));
  }

  return (
    <SectionShell id="gamer">
      <SectionHeading kicker="Fun" title="Gamer mode outside work hours" subtitle={profile.gamerSection.headline} />
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative">
        {showNav ? (
          <button
            type="button"
            aria-label="Previous games"
            disabled={safePage <= 0}
            onClick={goPrev}
            className={cn(
              "absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-md transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 sm:flex sm:items-center sm:justify-center",
            )}
          >
            <ChevronLeft className="h-6 w-6" aria-hidden />
          </button>
        ) : null}
        {showNav ? (
          <button
            type="button"
            aria-label="Next games"
            disabled={safePage >= totalPages - 1}
            onClick={goNext}
            className={cn(
              "absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-md transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 sm:flex sm:items-center sm:justify-center",
            )}
          >
            <ChevronRight className="h-6 w-6" aria-hidden />
          </button>
        ) : null}

        <div
          className={cn(
            "grid grid-cols-2 gap-3 sm:grid-cols-4 sm:grid-rows-2 sm:gap-4",
            showNav ? "px-0 sm:px-12" : "",
          )}
        >
          {pageGames.map((game, index) => (
            <article
              key={`${safePage * TILES_PER_PAGE + index}-${game.title}`}
              className="min-w-0 rounded-2xl border border-slate-200 bg-white p-2 sm:p-3 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="aspect-[2/3] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <div className="relative h-full w-full">
                  <Image
                    src={game.coverImage}
                    alt={`${game.title} cover`}
                    fill
                    sizes="(max-width: 640px) 45vw, 22vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="mt-2 truncate text-xs font-semibold text-slate-900 dark:text-slate-100 sm:text-sm">{game.title}</p>
              <p className="truncate text-[10px] text-slate-600 dark:text-slate-300 sm:text-xs">{game.caption}</p>
            </article>
          ))}
        </div>

        {showNav ? (
          <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
            <button
              type="button"
              aria-label="Previous games"
              disabled={safePage <= 0}
              onClick={goPrev}
              className="rounded-full border border-slate-200 bg-white p-2 text-slate-700 disabled:opacity-30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {safePage + 1} / {totalPages}
            </span>
            <button
              type="button"
              aria-label="Next games"
              disabled={safePage >= totalPages - 1}
              onClick={goNext}
              className="rounded-full border border-slate-200 bg-white p-2 text-slate-700 disabled:opacity-30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        ) : null}
      </motion.div>
    </SectionShell>
  );
}
