"use client";

import { motion } from "framer-motion";

import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectsSection(): React.JSX.Element {
  return (
    <SectionShell id="projects">
      <SectionHeading kicker="Projects" title="Product-oriented AI implementations" subtitle="Focused on ownership, impact, and delivery outcomes." />
      <motion.div className="grid gap-6 md:grid-cols-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        {profile.projects.map((project) => (
          <Card key={project.name} className="transition hover:-translate-y-0.5 hover:shadow-md">
            <CardHeader>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Project</p>
              <CardTitle>{project.name}</CardTitle>
              <p className="text-slate-700 dark:text-slate-200">{project.summary}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-200">
                {project.keyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </SectionShell>
  );
}
