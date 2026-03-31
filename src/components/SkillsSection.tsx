import { motion } from "framer-motion";
import { Brain, Monitor, BarChart3, Cloud, Bot, Package, Settings } from "lucide-react";

const skillGroups = [
  { icon: Brain, title: "Languages", skills: ["Python", "R", "SQL", "Stata", "SPSS", "Spark"] },
  { icon: Monitor, title: "Dev Environments", skills: ["VS Code", "Jupyter", "Google Colab", "Postgres", "Databricks"] },
  { icon: BarChart3, title: "BI Tools", skills: ["Excel", "Tableau", "Power BI"] },
  { icon: Cloud, title: "Cloud", skills: ["AWS", "GCP", "IBM Watson"] },
  { icon: Bot, title: "AI Tools", skills: ["Claude Code", "Lovable", "Replit"] },
  { icon: Package, title: "Project Mgmt", skills: ["Basecamp", "Notion", "JIRA"] },
  { icon: Settings, title: "Additional", skills: ["Docker", "Dataiku", "REST APIs", "FastAPI"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 px-6 lg:px-12">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">Toolkit</h2>
        <p className="text-muted-foreground font-sans mb-10">Technologies and tools I work with daily.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            className="group rounded-2xl bg-card border border-border p-5 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <group.icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-sans font-semibold text-sm text-foreground">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-sans px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
