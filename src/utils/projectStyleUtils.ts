import type { ProjectCategory } from "../types/portfolioTypes";

export function getProjectCategoryClass(category: ProjectCategory): string {
  if (category === "engineering") {
    return "border-cyan-300/20 bg-cyan-300/5 text-cyan-100";
  }

  if (category === "creative") {
    return "border-fuchsia-300/20 bg-fuchsia-300/5 text-fuchsia-100";
  }

  return "border-white/20 bg-white/10 text-white";
}