import Image from "next/image";
import { MapPin, ArrowDownRight, Sparkles, Clock } from "lucide-react";
import Reveal from "./Reveal";

const HIGHLIGHTS = [
  {
    value: "Bar à Tiramisus",
    label: "Montés minute · 7,00 €",
    detail:
      "Pistache & fleur d’oranger, spéculoos & framboises fraîches, café d’exception, deux citrons ou praliné noisette.",
  },
  {
    value: "Pain Shokupan",
    label: "Boulangerie japonaise maison",
    detail:
      "Notre pain de mie japonais au lait ultra-moelleux, pétri sur place, proposé en miche ou en sandwichs chauds.",
  },
  {
    value: "Brunch 7j/7",
    label: "Sucré & salé toute la semaine",
    detail:
      "Pancakes fluffys, pain perdu brioché vanille-fruits rouges, avocado toast sur levain bio et œufs brouillés au parmesan.",
  },
  {
    value: "En Haut des Marches",
    label: "Place du Marché de la Chèvre",
    detail:
      "Un refuge lumineux avec terrasse au calme et aire de jeux en bois insonorisée dédiée aux familles.",
  },
] as const;

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Hero Typography */}
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <a
            href="#infos-pratiques"
            className="inline-flex items-center justify-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium shadow-xs transition-colors mb-7 sm:mb-8 max-w-full"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            <MapPin
              className="w-3.5 h-3.5 shrink-0"
              style={{ color: "var(--accent-badge)" }}
              strokeWidth={1.9}
              aria-hidden="true"
            />
            <span className="truncate">
              En haut des escaliers · 15 rue de la Chèvre, Place du Marché de la Chèvre — Metz
            </span>
          </a>
        </Reveal>

        <Reveal delayMs={60}>
          <p
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] mb-3"
            style={{ color: "var(--accent-badge)" }}
          >
            Coffee Shop · Salon de Thé · Brunch 7j/7
          </p>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-6xl lg:text-[4.25rem] font-semibold tracking-[-0.035em] leading-[1.06] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Le P&apos;tit Dessert Café.
            <span
              className="block font-normal tracking-[-0.025em] text-2xl sm:text-4xl lg:text-[2.65rem] mt-2.5 leading-[1.15]"
              style={{ color: "var(--text-secondary)" }}
            >
              L’art du tiramisu artisanal, du pain Shokupan et du brunch en hauteur.
            </span>
          </h1>
        </Reveal>

        <Reveal delayMs={120}>
          <p
            className="max-w-2xl mx-auto text-[15px] sm:text-[17px] leading-[1.65] font-normal mb-9 sm:mb-11 px-1"
            style={{ color: "var(--text-secondary)" }}
          >
            Il suffit de gravir quelques marches au{" "}
            <strong className="font-semibold" style={{ color: "var(--text-primary)" }}>
              15 rue de la Chèvre
            </strong>{" "}
            pour quitter l’effervescence piétonne et découvrir notre écrin sur la{" "}
            <strong className="font-semibold" style={{ color: "var(--text-primary)" }}>
              Place du Marché de la Chèvre
            </strong>
            . Du mardi au dimanche comme le lundi, tout y est préparé maison :
            tiramisus montés à la minute, pain de mie japonais{" "}
            <em className="not-italic font-semibold" style={{ color: "var(--text-primary)" }}>Shokupan</em>,
            pancakes dorés et cafés de spécialité.
          </p>
        </Reveal>

        {/* Primary & Secondary Actions */}
        <Reveal delayMs={180}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#la-carte"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm sm:text-[15px] font-semibold shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.99]"
              style={{
                backgroundColor: "var(--accent-primary)",
                color: "var(--accent-contrast)",
                boxShadow: "var(--shadow-elevated)",
              }}
            >
              <span>Découvrir la carte</span>
              <ArrowDownRight
                className="w-4 h-4 shrink-0 opacity-80"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </a>

            <a
              href="#infos-pratiques"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm sm:text-[15px] font-medium transition-all duration-200 shadow-xs hover:opacity-90"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
            >
              <Clock
                className="w-4 h-4 shrink-0"
                style={{ color: "var(--accent-badge)" }}
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <span>Ouvert 7j/7 · Venir nous voir</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Immersive Ambiance Photograph Frame */}
      <Reveal delayMs={240} className="mt-12 sm:mt-16">
        <div
          className="relative p-2 sm:p-3 border shadow-2xl transition-all duration-300"
          style={{
            backgroundColor: "var(--bg-surface)",
            borderColor: "var(--border-color)",
            borderRadius: "var(--card-radius)",
            boxShadow: "var(--shadow-elevated)",
          }}
        >
          <div
            className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10]"
            style={{
              backgroundColor: "var(--bg-subtle)",
              borderRadius: "calc(var(--card-radius) - 6px)",
            }}
          >
            <Image
              src="/hero-ptit-dessert.jpg"
              alt="Table lumineuse du P'tit Dessert Café à Metz : tiramisu artisanal pistache et fleur d'oranger, pancakes dorés aux fruits frais et café de spécialité en haut des escaliers Place du Marché de la Chèvre"
              width={1600}
              height={1000}
              preload={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1120px"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-[1.015]"
            />

            {/* Subtle glassmorphic caption bar */}
            <div
              className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex flex-wrap items-center justify-between gap-2 rounded-2xl backdrop-blur-xl border px-4 py-2.5 sm:px-5 sm:py-3 shadow-lg"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: "var(--accent-badge)" }}
                  aria-hidden="true"
                />
                <p className="text-xs sm:text-[13px] font-medium truncate">
                  <span className="sm:hidden">
                    En haut des escaliers · Place du Marché de la Chèvre
                  </span>
                  <span className="hidden sm:inline">
                    En haut des marches, 15 rue de la Chèvre · Tiramisus maison, Shokupan & Brunch 7j/7
                  </span>
                </p>
              </div>
              <span
                className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-medium tabular-nums shrink-0"
                style={{ color: "var(--text-secondary)" }}
              >
                <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--accent-gold)" }} strokeWidth={1.8} aria-hidden="true" />
                Lun–Sam 10h–18h · Dim 10h–17h
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 4 Minimalist Architectural Pillar Cards */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {HIGHLIGHTS.map((item, idx) => (
          <Reveal key={item.value} delayMs={280 + idx * 60} className="h-full">
            <div
              className="h-full border p-5 sm:p-6 flex flex-col justify-between transition-all duration-300"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-color)",
                borderRadius: "var(--card-radius)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div>
                <p
                  className="text-lg sm:text-xl font-semibold tracking-[-0.02em]"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.value}
                </p>
                <p
                  className="text-xs font-semibold mt-0.5"
                  style={{ color: "var(--accent-badge)" }}
                >
                  {item.label}
                </p>
              </div>
              <p
                className="text-xs leading-relaxed mt-3.5"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
