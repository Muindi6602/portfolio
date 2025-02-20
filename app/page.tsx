import AboutSection from "@/components/Home/About";
import HeroSection from "@/components/Home/Hero";
import ProjectsSection from "@/components/Home/Projects";

export default function Home() {
  return (
    <main role="main">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
