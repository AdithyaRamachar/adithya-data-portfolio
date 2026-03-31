import { motion } from "framer-motion";
import { Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => (
  <section className="py-24 px-6 lg:px-12">
    <div className="container mx-auto max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-balance">
          Let's Build Data-Driven Products That Scale
        </h2>
        <p className="text-muted-foreground font-sans max-w-lg mx-auto">
          I'm open to Product Manager, Data Scientist, and Senior Analyst roles across Europe.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a href="https://calendly.com/adithya-ramachar/coffee-chat" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="gap-2">
              <Calendar className="w-4 h-4" />
              Book a Coffee Chat ☕
            </Button>
          </a>
          <a href="mailto:adithya.ramachar@outlook.com">
            <Button variant="hero-outline" size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              Email Me
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
