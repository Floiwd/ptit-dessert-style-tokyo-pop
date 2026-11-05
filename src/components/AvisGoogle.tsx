import { Star, Quote, CheckCircle2, MessageSquare } from "lucide-react";
import Reveal from "./Reveal";

interface Review {
  author: string;
  badge: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  highlightDish: string;
}

const REVIEWS: Review[] = [
  {
    author: "Camille L.",
    badge: "Local Guide · 48 avis",
    date: "Il y a 2 semaines",
    rating: 5,
    title: "Le meilleur tiramisu de tout Metz, sans hésiter !",
    content:
      "Une merveille cachée en haut des escaliers. Le tiramisu pistache & fleur d'oranger est d'une légèreté incroyable, monté à la perfection sans être trop sucré. L'ambiance sur la place est apaisante et l'équipe est toujours d'une gentillesse rare.",
    highlightDish: "Tiramisu Pistache Fleur d'Oranger",
  },
  {
    author: "Alexandre & Sarah",
    badge: "Avis Google vérifié",
    date: "Il y a 1 mois",
    rating: 5,
    title: "Brunch du dimanche mémorable & pain Shokupan bluffant",
    content:
      "Nous venons régulièrement le week-end pour le brunch. Le pain Shokupan toasté en sando bœuf cecina et burrata est une vraie révélation de texture : croustillant dehors, moelleux comme un nuage dedans. Et le coin jeu pour les enfants est insonorisé, un vrai bonheur pour les parents !",
    highlightDish: "Sando Shokupan Cecina & Pancakes Fluffys",
  },
  {
    author: "Mathieu B.",
    badge: "Avis Google vérifié",
    date: "Il y a 3 semaines",
    rating: 5,
    title: "Un spot unique en hauteur, loin du bruit de la rue",
    content:
      "Superbe salon de thé découvert en montant les marches du 15 rue de la Chèvre. Les lattes aux ganaches maison sont divins, le pain perdu brioché est servi bien chaud avec des fruits frais. Rapport qualité-prix irréprochable au centre-ville de Metz.",
    highlightDish: "Pain Perdu Vanille Fruits Rouges & Latte Ganache",
  },
  {
    author: "Élodie D.",
    badge: "Local Guide · 112 avis",
    date: "Il y a 2 mois",
    rating: 5,
    title: "Pâtisseries artisanales d'une finesse absolue",
    content:
      "Habituée depuis leur première adresse rue du Lancieu, leur installation place du Marché de la Chèvre est encore plus belle et aérée. Les tiramisus à emporter font toujours l'unanimité auprès de mes invités le dimanche !",
    highlightDish: "Tiramisu Spéculoos Framboises & Café d'Exception",
  },
];

export default function AvisGoogle() {
  return (
    <section
      id="avis-clients"
      aria-labelledby="avis-heading"
      className="py-20 sm:py-28 lg:py-32 border-t transition-colors duration-400"
      style={{
        backgroundColor: "var(--bg-canvas)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Real Rating Stat Banner */}
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-18">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-3.5"
              style={{
                backgroundColor: "var(--accent-badge-bg)",
                color: "var(--accent-badge)",
              }}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Avis Google Authentiques · Metz</span>
            </div>
            <h2
              id="avis-heading"
              className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.08] mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Ce que les Messins aiment chez nous.
            </h2>
            <p className="text-[15px] sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Près de 1 000 retours et habitués qui partagent leur coup de cœur pour nos tiramisus montés minute, nos brunchs généreux et notre havre de paix en hauteur.
            </p>
          </div>

          {/* Google Scorecard Pill */}
          <div
            className="flex items-center gap-4 rounded-3xl p-5 sm:p-6 border shadow-sm self-start lg:self-auto shrink-0 transition-colors"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-color)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {/* Google G stylized icon */}
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl shadow-xs"
              style={{
                backgroundColor: "var(--bg-subtle)",
                color: "var(--text-primary)",
              }}
            >
              G
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
                  4.5
                </span>
                <div className="flex items-center gap-0.5 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs font-medium mt-0.5" style={{ color: "var(--text-secondary)" }}>
                Basé sur près de 1 000 avis Google Maps
              </p>
            </div>
          </div>
        </Reveal>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {REVIEWS.map((review, idx) => (
            <Reveal key={review.author} delayMs={idx * 70} className="h-full">
              <article
                className="h-full rounded-[26px] sm:rounded-[30px] p-7 sm:p-8 border shadow-xs transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div>
                  {/* Rating + Date Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium" style={{ color: "var(--text-muted)" }}>
                      {review.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight mb-2.5" style={{ color: "var(--text-primary)" }}>
                    « {review.title} »
                  </h3>

                  <p className="text-sm leading-[1.65] relative" style={{ color: "var(--text-secondary)" }}>
                    <Quote className="w-5 h-5 absolute -top-1 -left-2 text-black/5 dark:text-white/5 -z-10" />
                    {review.content}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <div>
                    <span className="font-semibold block" style={{ color: "var(--text-primary)" }}>
                      {review.author}
                    </span>
                    <span className="text-[11px] flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 inline" />
                      {review.badge}
                    </span>
                  </div>

                  <div className="rounded-full px-3 py-1 text-[11px] font-medium"
                    style={{
                      backgroundColor: "var(--bg-subtle)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Coup de cœur : <strong style={{ color: "var(--text-primary)" }}>{review.highlightDish}</strong>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA to verify on Google */}
        <Reveal delayMs={240} className="mt-10 sm:mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Le+P%27tit+Dessert+Cafe+15+Rue+de+la+Chevre+Place+du+Marche+de+la+Chevre+57000+Metz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold underline underline-offset-4 transition-colors"
            style={{ color: "var(--accent-primary)" }}
          >
            <span>Consulter les retours clients et avis récents sur Google Maps</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
