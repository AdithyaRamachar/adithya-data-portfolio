import { motion } from "framer-motion";
import { FileText, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const RESUME_URL = "/resume.pdf";

const ResumeSection = () => (
  <section className="py-16 px-6 lg:px-12">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        className="rounded-2xl bg-card border border-border shadow-[var(--card-shadow)] p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-semibold text-foreground">Résumé</h2>
          <div className="flex gap-3">
            <a href={RESUME_URL} download>
              <Button variant="outline" size="sm" className="gap-2">
                <FileText className="w-4 h-4" /> Download
              </Button>
            </a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <Maximize2 className="w-4 h-4" /> Fullscreen
              </Button>
            </a>
          </div>
        </div>
        <div className="w-full h-[500px] rounded-lg overflow-hidden border border-border bg-muted">
          <iframe
            src={`${RESUME_URL}#toolbar=0`}
            className="w-full h-full"
            title="Adithya Ramachar Resume"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-3 text-center font-sans">
          Upload your resume as <code className="text-primary">public/resume.pdf</code> to activate this viewer.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
