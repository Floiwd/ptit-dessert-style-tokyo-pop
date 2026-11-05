import {
  MapPin,
  Clock,
  Navigation,
  Phone,
  ArrowUpRight,
  Footprints,
  Car,
} from "lucide-react";
import Reveal from "./Reveal";

const OPENING_HOURS = [
  {
    day: "Lundi au Samedi",
    schedule: "10h00 – 18h00",
    note: "Service continu : Brunch, Déjeuner & Salon de thé",
  },
  {
    day: "Dimanche",
    schedule: "10h00 – 17h00",
    note: "Le Grand Brunch du Dimanche & Bar à Tiramisus",
  },
] as const;

export default function InfosPratiques() {
  const appleMapsUrl =
    "https://maps.apple.com/?q=Le+P'tit+Dessert+15+Rue+de+la+Chevre+57000+Metz";
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Le+P%27tit+Dessert+Cafe+15+Rue+de+la+Chevre+Place+du+Marche+de+la+Chevre+57000+Metz";

  return (
    <section
      id="infos-pratiques"
      aria-labelledby="infos-heading"
      className="py-20 sm:py-28 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-400"
      style={{
        backgroundColor: "var(--bg-canvas)",
      }}
    >
      {/* Section Header */}
      <Reveal className="max-w-3xl mb-12 sm:mb-16">
        <p
          className="text-xs font-semibold uppercase tracking-[0.14em] mb-3"
          style={{ color: "var(--accent-badge)" }}
        >
          Infos Pratiques & Accès
        </p>
        <h2
          id="infos-heading"
          className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.08] mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Nous trouver en haut des escaliers.
        </h2>
        <p
          className="text-[15px] sm:text-[17px] leading-[1.65]"
          style={{ color: "var(--text-secondary)" }}
        >
          Situé au cœur piétonnier de Metz, au{" "}
          <strong className="font-semibold" style={{ color: "var(--text-primary)" }}>
            15 rue de la Chèvre
          </strong>
          , notre établissement surplombe la rue depuis l’esplanade de la{" "}
          <strong className="font-semibold" style={{ color: "var(--text-primary)" }}>
            Place du Marché de la Chèvre
          </strong>
          .
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Card: Exact Address, Hours, Access & Contact */}
        <Reveal className="lg:col-span-5 h-full">
          <div
            className="h-full border p-6 sm:p-8 lg:p-9 shadow-md flex flex-col justify-between gap-7 transition-all duration-300"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-color)",
              borderRadius: "var(--card-radius)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div className="space-y-6">
              {/* Exact Address */}
              <div>
                <div
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] mb-2"
                  style={{ color: "var(--accent-badge)" }}
                >
                  <MapPin className="w-3.5 h-3.5 shrink-0" strokeWidth={1.9} aria-hidden="true" />
                  <span>Adresse Exacte</span>
                </div>
                <h3
                  className="text-xl sm:text-2xl font-semibold tracking-[-0.02em]"
                  style={{ color: "var(--text-primary)" }}
                >
                  Le P&apos;tit Dessert Café
                </h3>
                <p className="text-sm sm:text-[15px] font-semibold mt-1.5" style={{ color: "var(--text-primary)" }}>
                  En haut des escaliers — 15 rue de la Chèvre
                </p>
                <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>
                  Place du Marché de la Chèvre · 57000 Metz
                </p>

                <div
                  className="mt-4 p-3.5 flex items-start gap-3 border"
                  style={{
                    backgroundColor: "var(--bg-subtle)",
                    borderColor: "var(--border-color)",
                    borderRadius: "calc(var(--card-radius) - 10px)",
                  }}
                >
                  <Footprints
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: "var(--accent-badge)" }}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    <strong className="font-semibold" style={{ color: "var(--text-primary)" }}>
                      Repère piéton :
                    </strong>{" "}
                    Au n°15 de la rue de la Chèvre, montez les marches menant à
                    l’esplanade de la Place du Marché de la Chèvre (niveau 0 du
                    Centre Saint-Jacques).
                  </p>
                </div>
              </div>

              <hr style={{ borderColor: "var(--border-color)" }} />

              {/* Real Opening Hours */}
              <div>
                <div
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] mb-3.5"
                  style={{ color: "var(--accent-badge)" }}
                >
                  <Clock className="w-3.5 h-3.5 shrink-0" strokeWidth={1.9} aria-hidden="true" />
                  <span>Horaires d’Ouverture (7j/7)</span>
                </div>

                <dl className="space-y-3">
                  {OPENING_HOURS.map((item) => (
                    <div
                      key={item.day}
                      className="px-4 py-3 border"
                      style={{
                        backgroundColor: "var(--bg-subtle)",
                        borderColor: "var(--border-color)",
                        borderRadius: "calc(var(--card-radius) - 10px)",
                      }}
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <dt className="text-xs sm:text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                          {item.day}
                        </dt>
                        <dd className="text-xs sm:text-sm font-semibold tabular-nums" style={{ color: "var(--text-primary)" }}>
                          {item.schedule}
                        </dd>
                      </div>
                      <p className="text-[11px] mt-1" style={{ color: "var(--text-muted)" }}>
                        {item.note}
                      </p>
                    </div>
                  ))}
                </dl>
              </div>

              <hr style={{ borderColor: "var(--border-color)" }} />

              {/* Parking & Accessibility */}
              <div>
                <div
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] mb-2"
                  style={{ color: "var(--accent-badge)" }}
                >
                  <Car className="w-3.5 h-3.5 shrink-0" strokeWidth={1.9} aria-hidden="true" />
                  <span>Stationnement & Accès Poussettes</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Accès direct depuis le{" "}
                  <strong className="font-semibold" style={{ color: "var(--text-primary)" }}>
                    Parking Centre Saint-Jacques
                  </strong>{" "}
                  (sous la place, avec ascenseurs adaptés aux poussettes et PMR)
                  et à 4 minutes à pied du Parking République ou Cathédrale.
                </p>
              </div>
            </div>

            {/* Direct Contact Actions */}
            <div
              className="pt-5 border-t flex flex-wrap items-center justify-between gap-3"
              style={{ borderColor: "var(--border-color)" }}
            >
              <a
                href="tel:+33603725525"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs sm:text-[13px] font-semibold transition-transform hover:scale-[1.02] tabular-nums"
                style={{
                  backgroundColor: "var(--accent-primary)",
                  color: "var(--accent-contrast)",
                }}
              >
                <Phone className="w-3.5 h-3.5 shrink-0" strokeWidth={1.8} aria-hidden="true" />
                <span>06 03 72 55 25</span>
              </a>

              <a
                href="https://www.instagram.com/ptitdessertcafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors hover:opacity-90"
                style={{
                  backgroundColor: "var(--bg-subtle)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-primary)",
                }}
              >
                <span>@ptitdessertcafe</span>
                <ArrowUpRight className="w-3.5 h-3.5" style={{ color: "var(--accent-badge)" }} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right Card: Stylized Architectural Map */}
        <Reveal delayMs={100} className="lg:col-span-7 h-full">
          <div
            className="relative h-full min-h-[400px] sm:min-h-[480px] overflow-hidden border shadow-md flex flex-col justify-between p-4 sm:p-6 transition-all duration-300"
            style={{
              backgroundColor: "var(--bg-subtle)",
              borderColor: "var(--border-color)",
              borderRadius: "var(--card-radius)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {/* Vector Map */}
            <svg
              viewBox="0 0 720 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-80"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect width="720" height="500" fill="currentColor" className="text-black/5 dark:text-white/5" />

              <rect x="44" y="42" width="165" height="110" rx="12" fill="currentColor" className="text-black/10 dark:text-white/10" />
              <rect x="242" y="38" width="190" height="114" rx="12" fill="currentColor" className="text-black/10 dark:text-white/10" />
              <rect x="466" y="42" width="210" height="110" rx="12" fill="currentColor" className="text-black/10 dark:text-white/10" />

              <rect x="44" y="196" width="165" height="132" rx="12" fill="currentColor" className="text-black/10 dark:text-white/10" />
              {/* Elevated Esplanade */}
              <rect
                x="242"
                y="196"
                width="244"
                height="136"
                rx="16"
                fill="currentColor"
                className="text-black/15 dark:text-white/20"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect x="520" y="196" width="156" height="132" rx="12" fill="currentColor" className="text-black/10 dark:text-white/10" />

              <rect x="44" y="370" width="165" height="98" rx="12" fill="currentColor" className="text-black/10 dark:text-white/10" />
              <rect x="242" y="374" width="244" height="94" rx="12" fill="currentColor" className="text-black/10 dark:text-white/10" />
              <rect x="520" y="370" width="156" height="98" rx="12" fill="currentColor" className="text-black/10 dark:text-white/10" />

              {/* Streets */}
              <g stroke="currentColor" strokeWidth="16" strokeLinecap="round" className="text-white/80 dark:text-black/50">
                <path d="M225 -10 L 225 510" />
                <path d="M502 -10 L 502 510" />
                <path d="M-10 352 L 730 352" />
              </g>

              {/* Rue de la Chèvre */}
              <path
                d="M-10 174 L 730 174"
                stroke="currentColor"
                strokeWidth="22"
                strokeLinecap="round"
                className="text-white dark:text-black/80"
              />

              {/* Staircase Symbol */}
              <g transform="translate(344, 178)">
                <rect x="0" y="0" width="38" height="26" rx="4" fill="currentColor" className="text-white dark:text-black/90" stroke="currentColor" strokeWidth="1.5" />
                <line x1="5" y1="6" x2="33" y2="6" stroke="currentColor" strokeWidth="1.5" className="text-black/40 dark:text-white/40" />
                <line x1="5" y1="11" x2="33" y2="11" stroke="currentColor" strokeWidth="1.5" className="text-black/40 dark:text-white/40" />
                <line x1="5" y1="16" x2="33" y2="16" stroke="currentColor" strokeWidth="1.5" className="text-black/40 dark:text-white/40" />
                <line x1="5" y1="21" x2="33" y2="21" stroke="currentColor" strokeWidth="1.5" className="text-black/40 dark:text-white/40" />
              </g>

              {/* Path */}
              <path
                d="M270 174 L 363 174 L 363 245"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="4 5"
                strokeLinecap="round"
                className="text-black/70 dark:text-white/70"
              />
              <circle cx="270" cy="174" r="4" fill="currentColor" className="text-black/70 dark:text-white/70" />
            </svg>

            {/* Top Map Bar */}
            <div className="relative z-10 flex items-center justify-between gap-2">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 shadow-xs min-w-0"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-primary)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: "var(--accent-badge)" }}
                  aria-hidden="true"
                />
                <span className="text-[11px] sm:text-xs font-semibold truncate">
                  15 rue de la Chèvre · Place du Marché de la Chèvre
                </span>
              </div>

              <span
                className="rounded-full border px-3 py-1 text-[11px] font-medium shrink-0"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-secondary)",
                }}
              >
                Cœur piétonnier · Metz
              </span>
            </div>

            {/* Center Map Callout */}
            <div className="relative z-10 my-auto py-6 sm:py-8 flex flex-col items-center justify-center">
              <div
                className="self-start ml-1 sm:ml-8 mb-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] sm:text-[11px] font-medium shadow-xs"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-secondary)",
                }}
              >
                <span>Axe Rue de la Chèvre · Accès par les marches</span>
              </div>

              {/* Pin Callout */}
              <div className="relative flex flex-col items-center w-full px-2">
                <div
                  className="w-full max-w-[295px] sm:max-w-xs rounded-2xl border px-4 py-3.5 sm:px-5 sm:py-4 shadow-xl text-center"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    borderColor: "var(--border-color)",
                    boxShadow: "var(--shadow-elevated)",
                  }}
                >
                  <p
                    className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color: "var(--accent-badge)" }}
                  >
                    En haut des escaliers
                  </p>
                  <p
                    className="text-base sm:text-[17px] font-semibold tracking-[-0.02em] mt-0.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Le P&apos;tit Dessert Café
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
                    15 rue de la Chèvre · Place du Marché de la Chèvre
                  </p>
                  <p className="text-[11px] font-semibold mt-1 tabular-nums" style={{ color: "var(--text-primary)" }}>
                    57000 Metz · 06 03 72 55 25
                  </p>
                </div>

                <div
                  className="w-3 h-3 border-r border-b rotate-45 -mt-1.5 z-10"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    borderColor: "var(--border-color)",
                  }}
                  aria-hidden="true"
                />

                <div className="relative mt-1 flex items-center justify-center">
                  <span
                    className="absolute w-10 h-10 rounded-full animate-ping"
                    style={{
                      backgroundColor: "var(--accent-badge-bg)",
                      animationDuration: "3s",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className="relative w-8 h-8 rounded-full border-2 shadow-lg flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--accent-primary)",
                      color: "var(--accent-contrast)",
                      borderColor: "var(--bg-surface)",
                    }}
                  >
                    <MapPin className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                  </span>
                </div>
              </div>

              <div
                className="self-end mr-1 sm:mr-8 mt-3.5 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] sm:text-[11px] font-medium shadow-xs"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-secondary)",
                }}
              >
                <span>Place Saint-Jacques & Parking St-Jacques · 1 min</span>
              </div>
            </div>

            {/* Bottom Map Actions */}
            <div className="relative z-10 flex items-center justify-between gap-2">
              <span
                className="hidden sm:inline-block text-[11px] font-semibold px-3.5 py-1.5 rounded-full border"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-primary)",
                }}
              >
                En haut des escaliers · Niveau Esplanade
              </span>

              <div className="flex items-center justify-end gap-2 w-full sm:w-auto">
                <a
                  href={appleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold shadow-md transition-all whitespace-nowrap hover:scale-[1.02]"
                  style={{
                    backgroundColor: "var(--accent-primary)",
                    color: "var(--accent-contrast)",
                  }}
                >
                  <span>Apple Plans</span>
                  <Navigation
                    className="w-3 h-3 opacity-80 shrink-0"
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs font-medium transition-all whitespace-nowrap hover:opacity-90"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                >
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
