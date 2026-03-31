import { motion } from "framer-motion";
import { FlaskConical, Filter, BrainCircuit, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: FlaskConical,
    title: "Experimentation Mindset",
    desc: "Every feature is a hypothesis. I design controlled experiments with clear success metrics before committing engineering resources.",
  },
  {
    icon: Filter,
    title: "Funnel Optimization",
    desc: "I map the full user journey, identify friction points with data, and prioritize interventions by expected revenue impact.",
  },
  {
    icon: BrainCircuit,
    title: "ML vs. Analytics Decision-Making",
    desc: "Not every problem needs ML. I assess complexity, data maturity, and ROI to choose the right tool—sometimes a SQL query beats a neural network.",
  },
];

const StrategySection = () => (
  <section id="strategy" className="py-20 px-6 lg:px-12 bg-card/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">How I Think About Growth & Data</h2>
        <p className="text-muted-foreground font-sans max-w-2xl">My approach to turning data into business outcomes follows a disciplined loop.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            className="rounded-2xl bg-background border border-border p-6 shadow-[var(--card-shadow)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <pillar.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-sans font-semibold text-foreground mb-2">{pillar.title}</h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Impact loop */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-3 text-sm font-sans font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {["Data", "Insight", "Decision", "Impact"].map((step, i) => (
          <span key={step} className="flex items-center gap-3">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">{step}</span>
            {i < 3 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default StrategySection;
