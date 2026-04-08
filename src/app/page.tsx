import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 justify-center">
      <Navbar />
      <HeroSection />
    </div>
  );
}
