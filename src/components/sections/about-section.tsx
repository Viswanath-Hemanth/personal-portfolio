"use client";

import { motion } from "framer-motion";

import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection(): React.JSX.Element {
  const about = profile.about;

  return (
    <SectionShell id="about">
      <SectionHeading
        kicker="About"
        title="System builder with GenAI depth"
        subtitle="A concise snapshot of leadership, execution depth, and hands-on AI engineering."
      />
      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card>
          <CardHeader>
            <CardTitle>Profile Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-slate-700 dark:text-slate-200">{about.lead}</p>
            <div className="flex flex-wrap gap-2">
              {about.expertise.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Story Arc</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-200">
                  {about.storyBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Highlights</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-200">
                  {about.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {about.languages.map((item) => (
                <Badge key={item} variant="default">
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionShell>
  );
}
