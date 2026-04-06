import { motion } from "framer-motion";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

interface Skill {
  name: string;
  logo: string;
}

interface SkillGroup {
  title: string;
  icon: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "🧠",
    skills: [
      { name: "Python", logo: `${CDN}/python/python-original.svg` },
      { name: "R", logo: `${CDN}/r/r-original.svg` },
      { name: "SQL", logo: `${CDN}/azuresqldatabase/azuresqldatabase-original.svg` },
      { name: "Stata", logo: `${SI}/stata` },
      { name: "SPSS", logo: `${SI}/ibm` },
      { name: "Spark", logo: `${CDN}/apachespark/apachespark-original.svg` },
    ],
  },
  {
    title: "Dev Environments",
    icon: "💻",
    skills: [
      { name: "VS Code", logo: `${CDN}/vscode/vscode-original.svg` },
      { name: "Jupyter", logo: `${CDN}/jupyter/jupyter-original.svg` },
      { name: "Google Colab", logo: `${SI}/googlecolab` },
      { name: "Postgres", logo: `${CDN}/postgresql/postgresql-original.svg` },
      { name: "Databricks", logo: `${SI}/databricks` },
    ],
  },
  {
    title: "BI Tools",
    icon: "📊",
    skills: [
      { name: "Excel", logo: `${SI}/microsoftexcel/217346` },
      { name: "Tableau", logo: `${SI}/tableau` },
      { name: "Power BI", logo: `${SI}/powerbi` },
    ],
  },
  {
    title: "Cloud",
    icon: "☁️",
    skills: [
      { name: "AWS", logo: `${CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "GCP", logo: `${CDN}/googlecloud/googlecloud-original.svg` },
      { name: "IBM Watson", logo: `${SI}/ibmwatson` },
    ],
  },
  {
    title: "AI Tools",
    icon: "🤖",
    skills: [
      { name: "Claude Code", logo: `${SI}/anthropic` },
      { name: "Lovable", logo: `${SI}/lovable` },
      { name: "Replit", logo: `${SI}/replit` },
    ],
  },
  {
    title: "Project Mgmt",
    icon: "📦",
    skills: [
      { name: "Basecamp", logo: `${SI}/basecamp` },
      { name: "Notion", logo: `${CDN}/notion/notion-original.svg` },
      { name: "JIRA", logo: `${CDN}/jira/jira-original.svg` },
    ],
  },
  {
    title: "Additional",
    icon: "⚙️",
    skills: [
      { name: "Docker", logo: `${CDN}/docker/docker-original.svg` },
      { name: "Dataiku", logo: `${SI}/dataiku` },
      { name: "REST APIs", logo: `${CDN}/fastapi/fastapi-original.svg` },
      { name: "FastAPI", logo: `${CDN}/fastapi/fastapi-original.svg` },
    ],
  },
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
              <span className="text-xl">{group.icon}</span>
              <h3 className="font-sans font-semibold text-sm text-foreground">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 text-xs font-sans px-2.5 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-4 h-4 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {skill.name}
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
