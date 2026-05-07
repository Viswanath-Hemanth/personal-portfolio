"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

import { profile } from "@/content/profile";
import { scrollToSection } from "@/lib/scroll-to-section";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function HeroSection(): React.JSX.Element {
  const hero = profile.hero;
  const resumeHref = `/${profile.assets.resumeFile}`;
  const sectionLinks = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const ctaButtons = useMemo(
    () => [
      { label: hero.cta.viewProjectsLabel, onClick: () => scrollToSection("projects"), variant: "default" as const },
      { label: hero.cta.contactMeLabel, onClick: () => scrollToSection("contact"), variant: "outline" as const },
    ],
    [hero.cta.contactMeLabel, hero.cta.viewProjectsLabel],
  );

  return (
    <section className="relative overflow-hidden pb-10 pt-14 sm:pb-14 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.2),_transparent_45%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
        <div className="flex items-start justify-between gap-6">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-semibold tracking-wide text-slate-600 dark:text-slate-300">{hero.name}</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">{hero.titles[0]}</h1>
            <p className="mt-3 text-xl font-semibold text-indigo-600 dark:text-indigo-300">{hero.titles[1]}</p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-200">{hero.tagline}</p>
          </motion.div>
          <ThemeToggle />
        </div>

        <motion.div
          className="mt-4 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {ctaButtons.map((button) => (
            <Button key={button.label} variant={button.variant} onClick={button.onClick}>
              {button.label}
            </Button>
          ))}
          <a className={buttonVariants({ variant: "outline" })} href={resumeHref}>
            {hero.cta.downloadResumeLabel}
          </a>
        </motion.div>
        <nav className="mt-6 flex flex-wrap gap-3 text-sm">
          {sectionLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className="rounded-lg px-3 py-1 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
