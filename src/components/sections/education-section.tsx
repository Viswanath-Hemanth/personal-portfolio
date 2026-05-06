"use client";

import { motion } from "framer-motion";

import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function EducationSection(): React.JSX.Element {
  return (
    <SectionShell id="education">
      <SectionHeading kicker="Education" title="Academic grounding in AI and ML" />
      <motion.div className="grid gap-6 md:grid-cols-2" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        {profile.education.map((item) => (
          <Card key={`${item.school}-${item.degree}`}>
            <CardHeader>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{item.school}</p>
              <CardTitle className="text-lg">{item.degree}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{item.dates}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </SectionShell>
  );
}
