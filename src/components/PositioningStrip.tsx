import { motion } from "framer-motion";
import { Target, FlaskConical, TrendingUp } from "lucide-react";

const items = [
  { icon: Target, text: "I solve ambiguous business problems using data" },
  { icon: FlaskConical, text: "I design experiments, not just dashboards" },
  { icon: TrendingUp, text: "I influence product decisions, not just report metrics" },
];

const PositioningStrip = () => (
  <section className="py-12 px-6 lg:px-12 border-y border-border bg-card/50">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 p-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-foreground font-sans font-medium text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PositioningStrip;
