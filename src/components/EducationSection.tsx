import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";
import ieLogo from "@/assets/ie-logo.png";

const education = [
  {
    school: "IE Business School",
    degree: "Master in Management (Business Analytics)",
    location: "Madrid, Spain",
    logo: ieLogo,
    degreeLink: "/ie-degree.pdf",
  },
  {
    school: "Indian Institute of Science Education and Research Tirupati",
    degree: "BS-MS in Life Sciences",
    location: "Tirupati, India",
  },
];

const certifications = [
  "Databricks Certified Data Engineer Associate",
  "Dataiku MLOps Practitioner",
  "Hugging Face – AI Agents Fundamentals",
  "McKinsey & Company Forward Program",
  "AWS Certified Cloud Practitioner",
  "IBM Product Manager",
  "Google Project Management",
];

const EducationSection = () => (
  <section id="education" className="py-20 px-6 lg:px-12">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i} className="rounded-2xl bg-card border border-border p-6 shadow-[var(--card-shadow)]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-foreground">{edu.school}</h3>
                    <p className="text-sm text-muted-foreground font-sans">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground font-sans mt-1">{edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">Certifications</h2>
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                className="flex items-center gap-3 rounded-xl bg-card border border-border px-5 py-3.5 shadow-[var(--card-shadow)]"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-sm font-sans text-foreground">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EducationSection;
