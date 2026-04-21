import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TechStackSection from "@/components/sections/TechStackSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 justify-center">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
    </div>
  );
}
