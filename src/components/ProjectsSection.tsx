import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Customer Lead Scoring",
    url: "https://github.com/AdithyaRamachar/Lead_Score",
    problem: "Sales teams wasted time on unqualified leads, reducing conversion efficiency.",
    approach: "Built a logistic regression & random forest pipeline with feature engineering on behavioral + demographic data.",
    tools: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
    impact: "Improved lead prioritization accuracy, enabling sales to focus on high-intent prospects.",
    next: "Integrate real-time scoring via API endpoint and add model drift monitoring.",
  },
  {
    title: "Airline Passenger Traffic Analysis",
    url: "https://github.com/AdithyaRamachar/Time-series-",
    problem: "Airlines needed accurate demand forecasting to optimize capacity and pricing.",
    approach: "Applied ARIMA and seasonal decomposition on historical passenger data with trend analysis.",
    tools: ["Python", "Statsmodels", "Matplotlib", "Pandas"],
    impact: "Identified seasonal patterns enabling proactive capacity planning.",
    next: "Layer in external signals (fuel prices, events) and compare with Prophet forecasting.",
  },
  {
    title: "Credit Risk Churn Modelling",
    url: "https://github.com/AdithyaRamachar/Credit-Risk-Modelling",
    problem: "Financial institutions struggled to predict customer credit risk and churn, leading to unexpected defaults and revenue loss.",
    approach: "End-to-end ML pipeline: EDA, feature engineering, model training (Logistic Regression, Random Forest, XGBoost) with hyperparameter tuning, experiment tracking via MLflow, and deployment to AWS Lambda for serverless inference.",
    tools: ["Python", "XGBoost", "Scikit-learn", "MLflow", "AWS Lambda"],
    impact: "ROC AUC of 0.8349 with 71.6% recall on at-risk customers (Accuracy: 76.6%, Precision: 41.4%, F1: 0.52), enabling proactive retention strategies.",
    next: "Add real-time feature store integration and automated model retraining pipeline.",
  },
  {
    title: "SaaS Inc. Sales BI Dashboard",
    url: "https://github.com/AdithyaRamachar/Dashboards/tree/main",
    problem: "Leadership lacked a single source of truth for sales performance metrics.",
    approach: "Designed an interactive Tableau dashboard with drill-down capabilities across regions, products, and time.",
    tools: ["Tableau", "SQL", "Excel"],
    impact: "Reduced reporting time by 60% and enabled data-driven quarterly planning.",
    next: "Migrate to embedded analytics with real-time data pipeline and alerting.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 px-6 lg:px-12 bg-card/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">Flagship Projects</h2>
        <p className="text-muted-foreground font-sans mb-10">Data science projects with real business impact.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="rounded-2xl bg-background border border-border p-6 md:p-8 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-300 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-display text-xl font-semibold text-foreground">{project.title}</h3>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-3 flex-1">
              <div>
                <p className="text-xs font-sans font-semibold text-primary uppercase tracking-wider mb-1">Problem</p>
                <p className="text-sm text-muted-foreground font-sans">{project.problem}</p>
              </div>
              <div>
                <p className="text-xs font-sans font-semibold text-primary uppercase tracking-wider mb-1">Approach</p>
                <p className="text-sm text-muted-foreground font-sans">{project.approach}</p>
              </div>
              <div>
                <p className="text-xs font-sans font-semibold text-primary uppercase tracking-wider mb-1">Impact</p>
                <p className="text-sm text-muted-foreground font-sans">{project.impact}</p>
              </div>
              <div>
                <p className="text-xs font-sans font-semibold text-accent-foreground/60 uppercase tracking-wider mb-1">What I'd do next →</p>
                <p className="text-sm text-muted-foreground font-sans italic">{project.next}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
              {project.tools.map((tool) => (
                <span key={tool} className="text-xs font-sans px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
