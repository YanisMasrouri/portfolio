import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import type { Persona } from "../types/portfolioTypes";
import { Code2, Film } from "lucide-react";

type PersonaSectionProps = {
  persona: Persona;
};

export function PersonaSection({ persona }: PersonaSectionProps) {
  const { language } = useLanguage();
  const isEngineer = persona.id === "engineer";

  return (
    <section
      id={persona.id === "engineer" ? "engineering" : "creative"}
      className="bg-[#0b0b0d] px-5 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`grid gap-8 lg:grid-cols-2 ${
            !isEngineer ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-10"
          >
            <div className="mb-8 flex items-center gap-3">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                  isEngineer
                    ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-100"
                    : "border-fuchsia-300/20 bg-fuchsia-300/10 text-fuchsia-100"
                }`}
              >
                {isEngineer ? <Code2 size={22} /> : <Film size={22} />}
              </span>

              <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/40">
                {persona.eyebrow[language]}
              </p>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {persona.label[language]}
            </h2>

            <p className="mt-6 text-2xl leading-tight text-white/85 sm:text-3xl">
              {persona.headline[language]}
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
              {persona.description[language]}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-10"
          >
            <div
              className={`absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[90px] ${
                isEngineer ? "bg-cyan-400/20" : "bg-fuchsia-400/20"
              }`}
            />

            <h3 className="relative text-sm font-medium uppercase tracking-[0.35em] text-white/40">
              Skills
            </h3>

            <div className="relative mt-8 flex flex-wrap gap-3">
              {persona.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/75"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}