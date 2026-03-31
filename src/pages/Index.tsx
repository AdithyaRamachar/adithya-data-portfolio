import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PositioningStrip from "@/components/PositioningStrip";
import ResumeSection from "@/components/ResumeSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProductsSection from "@/components/ProductsSection";
import StrategySection from "@/components/StrategySection";
import EducationSection from "@/components/EducationSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <PositioningStrip />
    <ResumeSection />
    <SkillsSection />
    <ProjectsSection />
    <ProductsSection />
    <StrategySection />
    <EducationSection />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
