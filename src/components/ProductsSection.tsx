import { motion } from "framer-motion";
import { Lightbulb, Users, Gauge, Dumbbell, ExternalLink } from "lucide-react";

const products = [
  {
    icon: Dumbbell,
    title: "Personalised Fitness Coach",
    problem: "Generic workout plans ignore individual fitness levels, goals, and constraints.",
    solution: "Built an intelligent fitness coaching app that generates personalised workout routines based on user profiles, preferences, and progressive overload principles.",
    metric: "Adaptive training plans tailored to each user's goals",
    link: "https://workout-logic-check.lovable.app/",
  },
  {
    icon: Users,
    title: "Customer Segmentation Engine",
    problem: "Marketing campaigns targeted broad audiences with low ROI.",
    solution: "Built an unsupervised clustering pipeline that segments users by behavior, enabling personalized campaigns.",
    metric: "3x improvement in campaign targeting precision",
  },
  {
    icon: Gauge,
    title: "Automated Reporting System",
    problem: "Analysts spent 15+ hours/week on manual report generation.",
    solution: "Designed a Python-based ETL pipeline with automated Tableau refresh and Slack notifications.",
    metric: "Freed up 60% of analyst bandwidth for strategic work",
  },
  {
    icon: Lightbulb,
    title: "Experiment Design Framework",
    problem: "Product teams ran A/B tests without statistical rigor, leading to false positives.",
    solution: "Created a reusable experimentation framework with power analysis, sequential testing, and automated result interpretation.",
    metric: "Reduced experiment cycle time by 40%",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-20 px-6 lg:px-12">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">Products & Systems</h2>
        <p className="text-muted-foreground font-sans mb-10">End-to-end systems I've designed and shipped.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product, i) => (
          <motion.div
            key={product.title}
            className="rounded-2xl bg-card border border-border p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <product.icon className="w-5 h-5 text-primary" />
              </div>
              {product.link && (
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-primary hover:underline">
                  Live Demo <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">{product.title}</h3>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-muted-foreground font-sans"><span className="font-semibold text-foreground">Problem:</span> {product.problem}</p>
              <p className="text-sm text-muted-foreground font-sans"><span className="font-semibold text-foreground">Solution:</span> {product.solution}</p>
            </div>
            <div className="px-3 py-2 rounded-lg bg-primary/5 border border-primary/10">
              <p className="text-sm font-sans font-semibold text-primary">{product.metric}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
