"use client";

import { useTheme, THEMES, ThemeId } from "./ThemeContext";
import { Palette, Check, LayoutTemplate } from "lucide-react";
import { useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Sélecteur d'ambiance et de design" className="fixed bottom-5 right-5 z-50">
      {/* Floating Toggle Pill */}
      <div className="relative">
        {isOpen && (
          <div
            className="absolute bottom-14 right-0 w-84 sm:w-96 max-h-[85vh] overflow-y-auto rounded-3xl p-4 sm:p-5 shadow-2xl backdrop-blur-2xl border transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
              boxShadow: "var(--shadow-elevated)",
            }}
          >
            <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: "var(--border-color)" }}>
              <div className="flex items-center gap-2">
                <LayoutTemplate className="w-4 h-4" style={{ color: "var(--accent-gold)" }} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  6 Univers & Dispositions Visuelles
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-mono uppercase font-semibold" style={{ backgroundColor: "var(--bg-subtle)", color: "var(--text-secondary)" }}>
                Mode Démo
              </span>
            </div>

            <p className="text-xs mt-2.5 mb-3.5 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Chaque option change <strong>complètement</strong> l’identité : palette, typographies (Sans géométrique ou Serif d’époque), disposition des blocs, rayons de courbure et mise en scène.
            </p>

            <div className="space-y-2">
              {(Object.keys(THEMES) as ThemeId[]).map((id) => {
                const item = THEMES[id];
                const isActive = theme === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      setTheme(id);
                    }}
                    className="w-full text-left p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 group hover:scale-[1.01]"
                    style={{
                      backgroundColor: isActive ? "var(--bg-subtle)" : "transparent",
                      borderColor: isActive ? "var(--accent-primary)" : "var(--border-color)",
                    }}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
                          {item.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: "var(--accent-badge-bg)", color: "var(--accent-badge)" }}>
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[11px] mt-1 font-medium" style={{ color: "var(--text-secondary)" }}>
                        {item.description}
                      </p>
                    </div>

                    {/* Color Swatches */}
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex -space-x-1.5">
                        {item.colorsPreview.map((color, idx) => (
                          <span
                            key={idx}
                            className="w-4 h-4 rounded-full border border-black/20 shadow-xs"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      {isActive ? (
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0"
                          style={{ backgroundColor: "var(--accent-primary)", color: "var(--accent-contrast)" }}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      ) : null}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t flex items-center justify-between text-[11px]" style={{ borderColor: "var(--border-color)", color: "var(--text-muted)" }}>
              <span>Lien partageable via <code className="px-1 py-0.5 rounded bg-black/5 dark:bg-white/5 font-semibold">?theme=...</code></span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="hover:underline font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Fermer
              </button>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Changer le thème et la disposition"
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-2xl border backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          style={{
            backgroundColor: "var(--bg-surface)",
            borderColor: "var(--border-color)",
            color: "var(--text-primary)",
            boxShadow: "var(--shadow-elevated)",
          }}
        >
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45"
            style={{ backgroundColor: "var(--accent-primary)", color: "var(--accent-contrast)" }}
          >
            <Palette className="w-3.5 h-3.5" />
          </span>
          <div className="text-left hidden sm:block">
            <span className="block text-[10px] uppercase tracking-wider font-bold" style={{ color: "var(--accent-badge)" }}>
              Changer d’univers
            </span>
            <span className="block text-xs font-semibold -mt-0.5" style={{ color: "var(--text-primary)" }}>
              {THEMES[theme]?.name}
            </span>
          </div>
          <span className="sm:hidden text-xs font-semibold">
            {THEMES[theme]?.name}
          </span>
        </button>
      </div>
    </aside>
  );
}
