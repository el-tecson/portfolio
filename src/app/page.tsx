import AboutSection from "@/components/sections/AboutSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import HowIWorkSection from "@/components/sections/HowIWorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import TechStackSection from "@/components/sections/TechStackSection";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 justify-center">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <HowIWorkSection />
      <AchievementsSection />
      <ResumeSection />
      <CTASection />
    </main>
  );
}
