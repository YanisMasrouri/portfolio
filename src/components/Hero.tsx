import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { portfolioData } from "../data/portfolioData";

export function Hero() {
  const { language } = useLanguage();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#0b0b0d] px-5 pt-32 text-white lg:px-8"
    >
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-1/2 top-12 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-fuchsia-500/20 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.45em] text-white/45">
            {portfolioData.identity.name}
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
            {portfolioData.identity.title[language]}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            {portfolioData.identity.tagline[language]}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#engineering"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-white/85"
            >
              {portfolioData.actions.exploreEngineering[language]}
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </a>
            <a
              href="#creative"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {portfolioData.actions.exploreCreative[language]}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto aspect-square w-full max-w-[460px]"
        >
          <div className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.03] shadow-2xl shadow-cyan-950/30 backdrop-blur-sm" />
          <div className="absolute inset-10 rounded-full border border-cyan-200/20 bg-cyan-200/[0.03]" />
          <div className="absolute inset-24 rounded-full border border-fuchsia-200/20 bg-fuchsia-200/[0.03]" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute inset-6 rounded-full border border-dashed border-white/20"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            className="absolute inset-20 rounded-full border border-dashed border-white/15"
          />

          <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#111116] text-center shadow-xl shadow-black/40">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
              Engineer
              <br />&<br />Creative
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}