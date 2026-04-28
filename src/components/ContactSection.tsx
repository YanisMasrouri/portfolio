import { ExternalLink, Mail, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { portfolioData } from "../data/portfolioData";

export function ContactSection() {
  const { language } = useLanguage();

  return (
    <section
      id="contact"
      className="bg-[#0b0b0d] px-5 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-white/35">
              {portfolioData.navigation.contact[language]}
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {language === "fr"
                ? "Construisons quelque chose de clair, robuste et mémorable."
                : "Let’s build something clear, robust and memorable."}
            </h2>
          </div>

          <div className="grid gap-3">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white/75 transition hover:bg-white hover:text-black"
            >
              <Mail size={18} />
              {portfolioData.contact.email}
            </a>

            <a
              href={`tel:${portfolioData.contact.phone.replaceAll(" ", "")}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white/75 transition hover:bg-white hover:text-black"
            >
              <Phone size={18} />
              {portfolioData.contact.phone}
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={portfolioData.contact.github}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white/75 transition hover:bg-white hover:text-black"
              >
                <ExternalLink size={18} />
                GitHub
              </a>

              <a
                href={portfolioData.contact.linkedin}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white/75 transition hover:bg-white hover:text-black"
              >
                <ExternalLink size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}