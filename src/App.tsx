import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PersonaSection } from "./components/PersonaSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { portfolioData } from "./data/portfolioData";

export default function App() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#0b0b0d] font-sans selection:bg-white selection:text-black">
      <Header />
      <Hero />

      {portfolioData.personas.map((persona) => (
        <PersonaSection key={persona.id} persona={persona} />
      ))}

      <ProjectsSection />
      <ContactSection />
    </main>
  );
}