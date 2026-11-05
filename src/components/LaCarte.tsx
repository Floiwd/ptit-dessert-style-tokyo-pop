"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Check, Coffee, Croissant, Utensils, CakeSlice } from "lucide-react";
import Reveal from "./Reveal";

type MenuTabId = "tiramisus" | "brunch" | "shokupan" | "boissons";

interface MenuItem {
  name: string;
  tag?: string;
  description: string;
  price: string;
}

const MENU_TABS: readonly { id: MenuTabId; label: string; subtitle: string }[] = [
  {
    id: "tiramisus",
    label: "Bar à Tiramisus & Pâtisseries",
    subtitle: "La signature historique de la maison, montée minute",
  },
  {
    id: "brunch",
    label: "Brunch Sucré & Salé",
    subtitle: "Servi 7j/7 en continu, dès 10h00",
  },
  {
    id: "shokupan",
    label: "Shokupan & Sandos",
    subtitle: "Boulangerie japonaise au lait & pains au levain bio",
  },
  {
    id: "boissons",
    label: "Coffee Shop & Ganaches",
    subtitle: "Cafés de spécialité & frappés aux ganaches maison",
  },
] as const;

const MENU_ITEMS: Record<MenuTabId, readonly MenuItem[]> = {
  tiramisus: [
    {
      name: "Tiramisu Pistache & Fleur d’Oranger",
      tag: "Signature iconique",
      description:
        "Crème mascarpone aérienne montée sur place, praliné de pistache, parfum délicat de fleur d’oranger et éclats de pistaches torréfiées.",
      price: "7,00 €",
    },
    {
      name: "Tiramisu Café d’Exception & Cacao",
      tag: "Le grand classique",
      description:
        "Biscuits cuillère imbibés d’espresso de spécialité fraîchement extrait, mascarpone onctueux et voile de cacao pur sans sucre ajouté.",
      price: "7,00 €",
    },
    {
      name: "Tiramisu Spéculoos & Framboises Fraîches",
      tag: "Fruité & croquant",
      description:
        "Alliance entre le croquant caramélisé du biscuit spéculoos, la douceur du mascarpone et la vivacité des framboises entières.",
      price: "7,00 €",
    },
    {
      name: "Tiramisu Praliné Noisette ou Deux Citrons",
      description:
        "Selon l’inspiration du comptoir : cœur fondant au praliné noisette artisanal ou fraîcheur vive d’un crémeux aux deux citrons.",
      price: "7,00 €",
    },
    {
      name: "Panna Cotta Vanille, Cookies & Brownies Maison",
      description:
        "Panna cotta fondante aux coulis de fruits, cookies épais au cœur coulant, brownies intenses et brioches dorées sorties du four.",
      price: "4,50 € – 6,50 €",
    },
  ],
  brunch: [
    {
      name: "Pain Perdu Brioché Vanille & Fruits Rouges",
      tag: "Incontournable du brunch",
      description:
        "Tranche épaisse de brioche maison dorée au beurre clarifié, vanille de Madagascar et fruits rouges frais (ou version Pommes caramélisées & Spéculoos).",
      price: "17,90 €",
    },
    {
      name: "Pancakes Fluffys Pistache ou Praliné Gianduja",
      tag: "Ultra-moelleux",
      description:
        "Pile de pancakes soufflés préparés à la commande, nappés généreusement de crème de pistache artisanale, de gianduja noisette ou banane-cacahuète.",
      price: "15,90 €",
    },
    {
      name: "Pancakes Érable & Myrtilles Fraîches",
      description:
        "Pancakes dorés à la minute, pur sirop d’érable ambré, myrtilles fraîches et touche de chantilly légère.",
      price: "13,50 €",
    },
    {
      name: "Pancakes Salés au Saumon & Œufs Brouillés au Parmesan",
      tag: "Brunch salé",
      description:
        "Pancakes moelleux accompagnés de saumon fumé, d’œufs brouillés crémeux au parmesan affiné, ciboulette fraîche et jeunes pousses.",
      price: "15,90 €",
    },
    {
      name: "Avocado Toast sur Pain au Levain Bio & Granola Bowl",
      description:
        "Tranche de pain au levain bio grillée, avocat frais écrasé à l’huile d’olive vierge, œuf brouillé ou poché et graines torréfiées.",
      price: "14,50 €",
    },
  ],
  shokupan: [
    {
      name: "Sando Shokupan Bœuf Cecina & Burrata",
      tag: "Création boulangerie",
      description:
        "Tranches épaisses de notre pain de mie japonais Shokupan toastées au beurre, jambon de bœuf cecina, burrata entière crémeuse et roquette.",
      price: "14,90 €",
    },
    {
      name: "Club Sandwich Pastrami & Focaccia au Levain Bio",
      description:
        "Club généreux au pastrami de bœuf, cheddar affiné et sauce maison, ou focaccia moelleuse au levain naturel et huile d’olive.",
      price: "13,90 €",
    },
    {
      name: "Demi-Pain Shokupan Japonais (À emporter)",
      tag: "Pétri & cuit sur place",
      description:
        "Le véritable pain de mie au lait japonais à la mie filante, nuageuse et légèrement briochée, idéal pour vos petits-déjeuners à la maison.",
      price: "8,50 €",
    },
    {
      name: "Pain Shokupan Entier (À emporter)",
      description:
        "Miche complète de notre Shokupan artisanal pétrie chaque matin dans notre fournil de la Place du Marché de la Chèvre.",
      price: "17,00 €",
    },
  ],
  boissons: [
    {
      name: "Frappés & Lattes aux Ganaches Maison",
      tag: "Signature Barista",
      description:
        "Boissons gourmandes préparées avec de vraies ganaches montées maison : Pistache, Praliné Noisette, Spéculoos ou Chocolat Blanc.",
      price: "7,50 € – 8,80 €",
    },
    {
      name: "Cafés de Spécialité (Espresso, Flat White, Latte)",
      description:
        "Extraction précise à la commande, lait entier micro-moussé ou alternatives végétales (avoine, amande).",
      price: "3,20 € – 5,80 €",
    },
    {
      name: "Matcha Latte, Chocolat Chaud Onctueux & Thés",
      description:
        "Thé vert Matcha fouetté minute, chocolat chaud maison à l’ancienne, sélection de thés en feuilles et nectars de fruits artisanaux.",
      price: "4,50 € – 6,50 €",
    },
  ],
};

export default function LaCarte() {
  const [activeTab, setActiveTab] = useState<MenuTabId>("tiramisus");

  return (
    <section
      id="la-carte"
      aria-labelledby="carte-heading"
      className="py-20 sm:py-28 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t transition-colors duration-400"
      style={{
        backgroundColor: "var(--bg-canvas)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* Section Header */}
      <Reveal className="max-w-3xl mb-12 sm:mb-16">
        <p
          className="text-xs font-semibold uppercase tracking-[0.14em] mb-3"
          style={{ color: "var(--accent-badge)" }}
        >
          Nos Spécialités & Créations Maison
        </p>
        <h2
          id="carte-heading"
          className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.08] mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Quatre savoir-faire réunis sous un même toit.
        </h2>
        <p
          className="text-[15px] sm:text-[17px] leading-[1.65]"
          style={{ color: "var(--text-secondary)" }}
        >
          Du bar à tiramisus qui a fait connaître l’adresse dès ses débuts rue du
          Lancieu jusqu’au fournil dédié au pain japonais{" "}
          <em className="not-italic font-semibold" style={{ color: "var(--text-primary)" }}>Shokupan</em> et
          aux brunchs servis toute la semaine Place du Marché de la Chèvre.
        </p>
      </Reveal>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7">
        {/* Card 1: Asymmetric Large (7 cols) — Bar à Tiramisus */}
        <Reveal className="lg:col-span-7 h-full">
          <article
            className="group h-full border overflow-hidden transition-all duration-300 flex flex-col justify-between"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-color)",
              borderRadius: "var(--card-radius)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div>
              <div
                className="relative aspect-[16/10] w-full overflow-hidden"
                style={{ backgroundColor: "var(--bg-subtle)" }}
              >
                <Image
                  src="/tiramisu-signature.jpg"
                  alt="Les tiramisus artisanaux du P'tit Dessert Café à Metz : pistache fleur d'oranger, spéculoos framboises et café d'exception"
                  width={1200}
                  height={750}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full backdrop-blur-md border px-3.5 py-1 text-xs font-medium shadow-xs"
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <CakeSlice className="w-3.5 h-3.5" style={{ color: "var(--accent-badge)" }} strokeWidth={1.8} aria-hidden="true" />
                    <span>La signature historique</span>
                  </span>
                  <span
                    className="rounded-full backdrop-blur-md px-3.5 py-1 text-xs font-semibold tabular-nums shadow-xs"
                    style={{
                      backgroundColor: "var(--accent-primary)",
                      color: "var(--accent-contrast)",
                    }}
                  >
                    7,00 €
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.08em] mb-1.5"
                  style={{ color: "var(--accent-badge)" }}
                >
                  Montés à la minute · Sur place ou à emporter
                </p>
                <h3
                  className="text-2xl sm:text-[1.65rem] font-semibold tracking-[-0.025em] mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  Le Bar à Tiramisus Artisanaux
                </h3>
                <p
                  className="text-sm sm:text-[15px] leading-relaxed mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Une crème mascarpone aérienne fouettée chaque matin, un biscuit
                  imbibé avec justesse et des déclinaisons devenues cultes à Metz.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Pistache & Fleur d’Oranger",
                    "Café d’Exception & Cacao",
                    "Spéculoos & Framboises",
                    "Praliné Noisette",
                    "Deux Citrons",
                  ].map((flavor) => (
                    <span
                      key={flavor}
                      className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                      style={{
                        backgroundColor: "var(--bg-subtle)",
                        borderColor: "var(--border-color)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {flavor}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="px-6 py-4 sm:px-8 border-t flex items-center justify-between text-xs"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-muted)",
              }}
            >
              <span>Également au comptoir : Panna Cottas, Cookies & Brownies</span>
              <span className="font-semibold" style={{ color: "var(--text-primary)" }}>Fait maison</span>
            </div>
          </article>
        </Reveal>

        {/* Card 2: Asymmetric Vertical (5 cols) — Shokupan & Boulangerie */}
        <Reveal delayMs={80} className="lg:col-span-5 h-full">
          <article
            className="group h-full border overflow-hidden transition-all duration-300 flex flex-col justify-between"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-color)",
              borderRadius: "var(--card-radius)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div>
              <div
                className="relative aspect-[16/10] w-full overflow-hidden"
                style={{ backgroundColor: "var(--bg-subtle)" }}
              >
                <Image
                  src="/shokupan-sando.jpg"
                  alt="Pain de mie japonais Shokupan ultra-moelleux et sandwich Sando Bœuf Cecina Burrata du P'tit Dessert Café à Metz"
                  width={900}
                  height={600}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full backdrop-blur-md border px-3.5 py-1 text-xs font-medium shadow-xs"
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <Croissant className="w-3.5 h-3.5" style={{ color: "var(--accent-badge)" }} strokeWidth={1.8} aria-hidden="true" />
                    <span>Fournil japonais & levain</span>
                  </span>
                  <span
                    className="rounded-full backdrop-blur-md px-3.5 py-1 text-xs font-semibold tabular-nums shadow-xs"
                    style={{
                      backgroundColor: "var(--accent-primary)",
                      color: "var(--accent-contrast)",
                    }}
                  >
                    8,50 € / 17,00 €
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.08em] mb-1.5"
                  style={{ color: "var(--accent-badge)" }}
                >
                  Mie filante au lait · Levain naturel bio
                </p>
                <h3
                  className="text-2xl sm:text-[1.6rem] font-semibold tracking-[-0.025em] mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  Le Shokupan & Nos Sandos
                </h3>
                <p
                  className="text-sm sm:text-[15px] leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Nous pétrissons et cuisons sur place le véritable{" "}
                  <strong className="font-semibold" style={{ color: "var(--text-primary)" }}>
                    Shokupan
                  </strong>{" "}
                  (pain de mie japonais au lait ultra-moelleux), proposé en
                  miche à emporter ou garni minute pour le déjeuner.
                </p>

                <ul className="space-y-2.5 text-xs sm:text-[13px]">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--accent-badge)" }} strokeWidth={2.2} aria-hidden="true" />
                    <span style={{ color: "var(--text-primary)" }}>
                      <strong>Sando Bœuf Cecina & Burrata</strong> sur Shokupan toasté
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--accent-badge)" }} strokeWidth={2.2} aria-hidden="true" />
                    <span style={{ color: "var(--text-primary)" }}>
                      <strong>Club Pastrami</strong> & Focaccias au levain bio
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--accent-badge)" }} strokeWidth={2.2} aria-hidden="true" />
                    <span style={{ color: "var(--text-primary)" }}>
                      <strong>Miche Shokupan à emporter</strong> : demi (8,50 €) ou entier (17,00 €)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="px-6 py-4 sm:px-8 border-t flex items-center justify-between text-xs"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-muted)",
              }}
            >
              <span>Pétrissage quotidien sur place</span>
              <span className="font-semibold tabular-nums" style={{ color: "var(--text-primary)" }}>Dès 10h00</span>
            </div>
          </article>
        </Reveal>

        {/* Card 3: Featured Contrast Card (5 cols) — Coffee Shop & Ganaches */}
        <Reveal delayMs={120} className="lg:col-span-5 h-full">
          <article
            className="h-full border p-6 sm:p-8 lg:p-9 shadow-xl flex flex-col justify-between transition-all duration-300"
            style={{
              backgroundColor: "var(--bg-subtle)",
              borderColor: "var(--border-color)",
              borderRadius: "var(--card-radius)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-8">
                <span
                  className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                >
                  <Coffee className="w-3.5 h-3.5" style={{ color: "var(--accent-badge)" }} strokeWidth={1.8} aria-hidden="true" />
                  <span>Coffee Shop de Spécialité</span>
                </span>
                <span className="text-xs font-semibold tabular-nums" style={{ color: "var(--accent-gold)" }}>
                  3,20 € – 8,80 €
                </span>
              </div>

              <p
                className="text-xs font-semibold uppercase tracking-[0.1em] mb-2"
                style={{ color: "var(--accent-badge)" }}
              >
                Torréfaction de spécialité & ganaches montées
              </p>
              <h3
                className="text-2xl sm:text-3xl font-semibold tracking-[-0.025em] leading-[1.15] mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Lattes signatures & Frappés aux ganaches maison.
              </h3>
              <p
                className="text-sm sm:text-[15px] leading-relaxed mb-7"
                style={{ color: "var(--text-secondary)" }}
              >
                À côté des espressos et flat whites extraits dans les règles de
                l’art, notre bar réalise ses propres ganaches artisanales (pistache,
                praliné, chocolat blanc, spéculoos) pour des boissons chaudes ou
                glacées d’une onctuosité rare.
              </p>

              <div
                className="space-y-3 border-t pt-6"
                style={{ borderColor: "var(--border-color)" }}
              >
                {[
                  {
                    label: "Frappés & Lattes Ganache Maison",
                    price: "7,50 € – 8,80 €",
                  },
                  {
                    label: "Espresso, Cappuccino & Flat White",
                    price: "3,20 € – 5,50 €",
                  },
                  {
                    label: "Matcha Latte, Chocolat chaud & Nectars",
                    price: "4,50 € – 6,50 €",
                  },
                ].map((drink) => (
                  <div
                    key={drink.label}
                    className="flex items-center justify-between gap-3 text-xs sm:text-[13px] py-1.5 border-b last:border-none"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    <span className="font-medium" style={{ color: "var(--text-primary)" }}>{drink.label}</span>
                    <span className="font-semibold tabular-nums shrink-0" style={{ color: "var(--accent-gold)" }}>
                      {drink.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="mt-8 pt-4 border-t flex items-center justify-between text-xs"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-muted)",
              }}
            >
              <span>Laits végétaux disponibles</span>
              <span>Sur place & à emporter</span>
            </div>
          </article>
        </Reveal>

        {/* Card 4: Asymmetric Large (7 cols) — Le Brunch Quotidien */}
        <Reveal delayMs={160} className="lg:col-span-7 h-full">
          <article
            className="group h-full border overflow-hidden transition-all duration-300 flex flex-col justify-between"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-color)",
              borderRadius: "var(--card-radius)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div>
              <div
                className="relative aspect-[16/10] w-full overflow-hidden"
                style={{ backgroundColor: "var(--bg-subtle)" }}
              >
                <Image
                  src="/brunch-pancakes.jpg"
                  alt="Brunch du P'tit Dessert Café à Metz : pancakes érable myrtilles, avocado toast au levain bio, œufs brouillés au parmesan et pain perdu vanille fruits rouges"
                  width={1200}
                  height={750}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full backdrop-blur-md border px-3.5 py-1 text-xs font-medium shadow-xs"
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <Utensils className="w-3.5 h-3.5" style={{ color: "var(--accent-badge)" }} strokeWidth={1.8} aria-hidden="true" />
                    <span>Servi 7j/7 sans interruption</span>
                  </span>
                  <span
                    className="rounded-full backdrop-blur-md px-3.5 py-1 text-xs font-semibold tabular-nums shadow-xs"
                    style={{
                      backgroundColor: "var(--accent-primary)",
                      color: "var(--accent-contrast)",
                    }}
                  >
                    13,50 € – 17,90 €
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.08em] mb-1.5"
                  style={{ color: "var(--accent-badge)" }}
                >
                  Du lundi au dimanche · Assiettes salées & sucrées
                </p>
                <h3
                  className="text-2xl sm:text-[1.65rem] font-semibold tracking-[-0.025em] mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  Le Brunch Quotidien : Pancakes, Pain Perdu & Avocado Toast
                </h3>
                <p
                  className="text-sm sm:text-[15px] leading-relaxed mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Pas besoin d’attendre le week-end : nos assiettes de brunch
                  sont préparées à la minute toute la semaine. Pancakes salés au
                  saumon fumé, œufs brouillés au parmesan, avocado toast sur
                  levain bio ou pain perdu brioché vanille et fruits rouges.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px]">
                  <div
                    className="p-3.5 border"
                    style={{
                      backgroundColor: "var(--bg-subtle)",
                      borderColor: "var(--border-color)",
                      borderRadius: "calc(var(--card-radius) - 10px)",
                    }}
                  >
                    <span className="block font-semibold" style={{ color: "var(--text-primary)" }}>
                      Côté Salé
                    </span>
                    <span className="mt-0.5 block" style={{ color: "var(--text-secondary)" }}>
                      Avocado toast levain, œufs brouillés parmesan, pancakes saumon
                    </span>
                  </div>
                  <div
                    className="p-3.5 border"
                    style={{
                      backgroundColor: "var(--bg-subtle)",
                      borderColor: "var(--border-color)",
                      borderRadius: "calc(var(--card-radius) - 10px)",
                    }}
                  >
                    <span className="block font-semibold" style={{ color: "var(--text-primary)" }}>
                      Côté Sucré
                    </span>
                    <span className="mt-0.5 block" style={{ color: "var(--text-secondary)" }}>
                      Pain perdu vanille-fruits rouges, pancakes pistache, gianduja ou érable
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="px-6 py-4 sm:px-8 border-t flex items-center justify-between text-xs"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-muted)",
              }}
            >
              <span>Service continu de 10h00 à 18h00 (Dimanche 17h00)</span>
              <span className="font-semibold" style={{ color: "var(--text-primary)" }}>Sans réservation ou sur appel</span>
            </div>
          </article>
        </Reveal>
      </div>

      {/* Detailed Interactive Menu Section (#menu-detaille) */}
      <div
        id="menu-detaille"
        className="mt-16 sm:mt-24 border p-6 sm:p-10 lg:p-12 shadow-md transition-all duration-300"
        style={{
          backgroundColor: "var(--bg-surface)",
          borderColor: "var(--border-color)",
          borderRadius: "var(--card-radius)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div>
            <div
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] mb-2"
              style={{ color: "var(--accent-badge)" }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={1.8} aria-hidden="true" />
              <span>La Carte Détaillée</span>
            </div>
            <h3
              className="text-2xl sm:text-3xl font-semibold tracking-[-0.025em]"
              style={{ color: "var(--text-primary)" }}
            >
              Explorez nos créations et tarifs.
            </h3>
          </div>

          {/* Segmented Control */}
          <div
            role="tablist"
            aria-label="Catégories de la carte du P'tit Dessert Café"
            className="grid grid-cols-2 sm:inline-flex sm:flex-wrap gap-1.5 p-1.5 border"
            style={{
              backgroundColor: "var(--bg-subtle)",
              borderColor: "var(--border-color)",
              borderRadius: "calc(var(--card-radius) - 8px)",
            }}
          >
            {MENU_TABS.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer text-center truncate"
                  style={{
                    backgroundColor: isSelected ? "var(--accent-primary)" : "transparent",
                    color: isSelected ? "var(--accent-contrast)" : "var(--text-secondary)",
                    boxShadow: isSelected ? "var(--shadow-card)" : "none",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active Category Items */}
        <div className="mt-8">
          <p
            className="text-xs font-semibold uppercase tracking-[0.08em] mb-6"
            style={{ color: "var(--accent-badge)" }}
          >
            {MENU_TABS.find((t) => t.id === activeTab)?.subtitle}
          </p>

          <div
            className="divide-y"
            style={{ borderColor: "var(--border-color)" }}
          >
            {MENU_ITEMS[activeTab].map((item) => (
              <div
                key={item.name}
                className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-8"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h4
                      className="text-base sm:text-[17px] font-semibold tracking-[-0.015em]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.name}
                    </h4>
                    {item.tag ? (
                      <span
                        className="rounded-full border px-2.5 py-0.5 text-[11px] font-semibold"
                        style={{
                          backgroundColor: "var(--accent-badge-bg)",
                          borderColor: "var(--border-color)",
                          color: "var(--accent-badge)",
                        }}
                      >
                        {item.tag}
                      </span>
                    ) : null}
                  </div>
                  <p
                    className="text-xs sm:text-sm leading-relaxed mt-1.5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="shrink-0 sm:text-right mt-1 sm:mt-0">
                  <span
                    className="inline-block px-3 py-1 text-sm sm:text-base font-semibold tabular-nums border rounded-full"
                    style={{
                      backgroundColor: "var(--bg-subtle)",
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
