import { useEffect, useState, createContext, useContext } from "react";

type Language = "EN" | "ES"; // Cambiado DE por ES para español

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  translate: (key: string) => string; // Función adicional para traducciones
};

const LanguageContext = createContext<LanguageContextType | null>(null);

// Diccionario de traducciones
const translations = {
  welcome: {
    EN: "Welcome",
    ES: "Bienvenido"
  },
  // Agrega más traducciones según necesites
};

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>("EN");

  const toggleLanguage = () => {
    if (language === "EN") {
      setLanguage("ES");
      window.localStorage.setItem("language", "ES");
      document.documentElement.classList.add("ES");
      document.documentElement.lang = "es"; // Atributo lang para HTML
    } else {
      setLanguage("EN");
      window.localStorage.setItem("language", "EN");
      document.documentElement.classList.remove("ES");
      document.documentElement.lang = "en";
    }
  };

  // Función para obtener traducciones
  const translate = (key: string): string => {
    // @ts-ignore
    return translations[key]?.[language] || key;
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(
      "language"
    ) as Language | null;

    if (localLanguage) {
      setLanguage(localLanguage);

      if (localLanguage === "ES") {
        document.documentElement.classList.add("ES");
        document.documentElement.lang = "es";
      } else {
        document.documentElement.lang = "en";
      }
    } else {
      // Detección del idioma del navegador
      const browserLanguage = navigator.language.substring(0, 2).toUpperCase();
      if (browserLanguage === "ES") {
        setLanguage("ES");
        document.documentElement.classList.add("ES");
        document.documentElement.lang = "es";
      }
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        translate
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "useLanguage debe usarse dentro de un LanguageContextProvider"
    );
  }

  return context;
}
