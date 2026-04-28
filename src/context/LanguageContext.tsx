import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Language } from "../types/portfolioTypes";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("fr");

  function toggleLanguage() {
    setLanguage((currentLanguage) =>
      currentLanguage === "fr" ? "en" : "fr"
    );
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used inside a LanguageProvider.");
  }

  return context;
}