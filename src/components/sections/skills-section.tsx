"use client";

import { motion } from "framer-motion";

import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsSection(): React.JSX.Element {
  return (
    <SectionShell id="skills">
      <SectionHeading
        kicker="Skills"
        title="Production-focused stack across GenAI and cloud systems"
        subtitle="Organized for recruiter and hiring-manager readability."
      />
      <motion.div className="grid gap-6 md:grid-cols-2" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        {profile.skills.map((group) => (
          <Card key={group.group}>
            <CardHeader>
              <CardTitle className="text-lg">{group.group}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </SectionShell>
  );
}
