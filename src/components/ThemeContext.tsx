"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type ThemeId = "apple" | "editorial" | "matcha" | "terracotta" | "cyber" | "nocturne";

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  badge: string;
  category: string;
  description: string;
  colorsPreview: string[];
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  apple: {
    id: "apple",
    name: "Apple Studio",
    badge: "Ultra Minimal",
    category: "High-Tech & Épure",
    description: "Esthétique épurée californienne : blanc pur, contrastes noirs intenses, géométrie fluide.",
    colorsPreview: ["#FFFFFF", "#0A0A0A", "#4A5D46"],
  },
  matcha: {
    id: "matcha",
    name: "Matcha & Sauge",
    badge: "Coffee Shop Botanique",
    category: "Végétal & Zen",
    description: "Vert sauge poudré, crème vanille et vert matcha profond. Ambiance coffee shop bio scandinave.",
    colorsPreview: ["#EAF0EA", "#213824", "#6E9374"],
  },
  terracotta: {
    id: "terracotta",
    name: "Terracotta Sunset",
    badge: "Solaire & Chaleureux",
    category: "Méditerranéen & Vivant",
    description: "Terre cuite dorée, argile abricot et bordeaux cuivré. Une énergie chaleureuse et lumineuse.",
    colorsPreview: ["#FAF0E6", "#7C3218", "#E07A5F"],
  },
  editorial: {
    id: "editorial",
    name: "Salon de Thé Ancien",
    badge: "Haute Pâtisserie",
    category: "Heritage & Tradition",
    description: "Papiers anciens, velours bordeaux, typographie serif d'époque et dorures chaudes.",
    colorsPreview: ["#F5EFEB", "#3E1E24", "#C6923B"],
  },
  cyber: {
    id: "cyber",
    name: "Tokyo Pop & Shokupan",
    badge: "Street Coffee Moderne",
    category: "Avant-Garde & Néon",
    description: "Fond violet nuit profond, néon bleu cobalt & lueur rose corail. Inspiré des coffee shops branchés de Shibuya.",
    colorsPreview: ["#0F0C20", "#F4F0FF", "#3B82F6"],
  },
  nocturne: {
    id: "nocturne",
    name: "Dark Speakeasy",
    badge: "Bar Intimiste & Or",
    category: "Luxe Feutré",
    description: "Ébène profond, noir fumé et reflets or brossé pour un bar à tiramisus et cocktails en hauteur.",
    colorsPreview: ["#080808", "#F2EEE9", "#E5B94E"],
  },
};

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (t: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "apple",
  setTheme: () => {},
});

function getInitialTheme(): ThemeId {
  return "cyber";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const setTheme = (t: ThemeId) => {
    setThemeState(t);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("ptitdessert_theme", t);
        const url = new URL(window.location.href);
        url.searchParams.set("theme", t);
        window.history.replaceState({}, "", url.toString());
      } catch {
        // storage disabled fallback
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
