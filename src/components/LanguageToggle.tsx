import { useLanguage } from "../context/LanguageContext";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white hover:text-black"
      aria-label="Change language"
    >
      {language === "fr" ? "EN" : "FR"}
    </button>
  );
}