import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { categoryLabels } from "../data/portfolioData";
import type { Project } from "../types/portfolioTypes";
import { getProjectCategoryClass } from "../utils/projectStyleUtils";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06] ${
        project.featured ? "min-h-[330px]" : "min-h-[290px]"
      }`}
    >
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-white/10 blur-[90px]" />
      </div>

      <div className="relative flex h-full flex-col">
        <div className="mb-7 flex items-center justify-between gap-4">
          <span
            className={`rounded-full border px-3 py-1 text-xs ${getProjectCategoryClass(
              project.category
            )}`}
          >
            {categoryLabels[project.category][language]}
          </span>

          {project.featured && (
            <span className="text-xs uppercase tracking-[0.25em] text-white/35">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
          {project.title}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-7 text-white/55">
          {project.description[language]}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}