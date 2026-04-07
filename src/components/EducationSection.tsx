import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";
import ieLogo from "@/assets/ie-logo.png";
import iiserLogo from "@/assets/iiser-logo.png";
import mckinseyLogo from "@/assets/mckinsey-logo.png";
import ibmLogo from "@/assets/ibm-logo.png";

const SI = "https://cdn.simpleicons.org";
const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

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
    logo: iiserLogo,
    degreeLink: "/iiser-degree.pdf",
  },
];

const certifications = [
  { name: "Databricks Certified Data Engineer Associate", logo: `${SI}/databricks` },
  { name: "Dataiku MLOps Practitioner", logo: `${SI}/dataiku` },
  { name: "Hugging Face – AI Agents Fundamentals", logo: `${SI}/huggingface` },
  { name: "McKinsey & Company Forward Program", logo: mckinseyLogo },
  { name: "AWS Certified Cloud Practitioner", logo: `${CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
  { name: "IBM Product Manager", logo: `${SI}/ibm` },
  { name: "Google Project Management", logo: `${CDN}/google/google-original.svg` },
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
                  {edu.logo ? (
                    <img src={edu.logo} alt={edu.school} className="w-10 h-10 object-contain flex-shrink-0" />
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-sans font-semibold text-foreground">{edu.school}</h3>
                    <p className="text-sm text-muted-foreground font-sans">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground font-sans mt-1">{edu.location}</p>
                    {edu.degreeLink && (
                      <a
                        href={edu.degreeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-sans mt-2"
                      >
                        <ExternalLink className="w-3 h-3" /> View Degree Certificate
                      </a>
                    )}
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
                key={cert.name}
                className="flex items-center gap-3 rounded-xl bg-card border border-border px-5 py-3.5 shadow-[var(--card-shadow)]"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="w-5 h-5 object-contain flex-shrink-0"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <p className="text-sm font-sans text-foreground">{cert.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EducationSection;
