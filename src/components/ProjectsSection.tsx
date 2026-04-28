import { useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { portfolioData } from "../data/portfolioData";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const { language } = useLanguage();

  const sortedProjects = useMemo(() => {
    return [...portfolioData.projects].sort(
      (a, b) => Number(b.featured) - Number(a.featured)
    );
  }, []);

  return (
    <section
      id="projects"
      className="bg-[#0b0b0d] px-5 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-white/35">
              Portfolio
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {portfolioData.navigation.projects[language]}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/50">
            {language === "fr"
              ? "La grille s’adapte automatiquement au nombre de projets ajoutés dans le fichier de données."
              : "The grid automatically adapts to the number of projects added in the data file."}
          </p>
        </div>

        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}