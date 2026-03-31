import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Calendar, Copy, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import headshot from "@/assets/headshot.jpg";
import { useState } from "react";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("adithya.ramachar@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex items-center py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-3">
              <p className="text-muted-foreground font-sans text-sm tracking-widest uppercase">
                Senior Analyst → Product Manager & Data Scientist
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-foreground">
                Turning Data into Product Decisions{" "}
                <span className="text-primary">&amp; Measurable Growth</span>
              </h1>
            </div>

            <div className="space-y-2">
              <p className="text-lg md:text-xl text-foreground font-sans">
                Hello, I'm <span className="font-semibold">Adithya</span> · ¡Hola, soy Adithya!
              </p>
              <p className="flex items-center gap-2 text-muted-foreground text-sm font-sans">
                <MapPin className="w-4 h-4 text-primary" />
                Rooted in Shivamogga, India. Now thriving in Madrid, Spain.
              </p>
            </div>

            <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed font-sans">
              I bridge research and business—transforming messy data into insights, experiments, and scalable product strategies.
            </p>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AdithyaRamachar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/adithyaramachar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <span className="text-xs text-muted-foreground font-sans ml-2">
                Explore my work, code, and professional journey
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://calendly.com/adithya-ramachar/coffee-chat" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  Book a Coffee Chat ☕
                </Button>
              </a>
              <Button variant="hero-outline" size="lg" className="gap-2" onClick={copyEmail}>
                <Mail className="w-4 h-4" />
                {copied ? "Copied!" : "Email Me"}
                {!copied && <Copy className="w-3 h-3 opacity-50" />}
              </Button>
            </div>
          </motion.div>

          {/* Headshot */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-end order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-[var(--card-shadow-hover)] border-4 border-background">
                <img
                  src={headshot}
                  alt="Adithya Ramachar"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl bg-primary/10 -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-2xl bg-accent/20 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
