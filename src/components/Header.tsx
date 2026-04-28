import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { portfolioData } from "../data/portfolioData";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const { language, toggleLanguage } = useLanguage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      href: "#engineering",
      label: portfolioData.navigation.engineering[language],
    },
    {
      href: "#creative",
      label: portfolioData.navigation.creative[language],
    },
    {
      href: "#projects",
      label: portfolioData.navigation.projects[language],
    },
    {
      href: "#contact",
      label: portfolioData.navigation.contact[language],
    },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0b0b0d]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white transition group-hover:bg-white group-hover:text-black">
            YM
          </span>
          <span className="hidden text-sm font-medium tracking-wide text-white/80 sm:block">
            {portfolioData.identity.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/55 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <a
            href={portfolioData.cv[language]}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/80"
          >
            {portfolioData.actions.downloadCv[language]}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="rounded-full border border-white/15 p-2 text-white lg:hidden"
          aria-label="Open menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#0b0b0d] px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl border border-white/10 px-4 py-3 text-white/70"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-medium text-white"
            >
              {language === "fr" ? "English" : "Français"}
            </button>
            <a
              href={portfolioData.cv[language]}
              className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-black"
            >
              CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}