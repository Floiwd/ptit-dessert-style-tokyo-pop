import { Compass, Sun, Smile } from "lucide-react";
import Reveal from "./Reveal";

const AMBIANCE_NOTES = [
  {
    icon: Compass,
    eyebrow: "15 rue de la Chèvre · En hauteur",
    title: "Au-dessus du tumulte piétonnier",
    description:
      "En gravissant les marches depuis la rue de la Chèvre, la ville s’apaise. Notre salle lumineuse et notre terrasse donnent directement sur l’esplanade de la Place du Marché de la Chèvre, à l’abri de l’agitation.",
  },
  {
    icon: Sun,
    eyebrow: "De la rue du Lancieu à Saint-Jacques",
    title: "L’esprit salon de thé, l’espace en plus",
    description:
      "Né en 2020 au 9 rue du Lancieu, Le P’tit Dessert a conservé son atmosphère chaleureuse et son exigence du fait-maison tout en s’ouvrant un écrin spacieux pour son fournil japonais et ses brunchs.",
  },
  {
    icon: Smile,
    eyebrow: "Architecture pensée pour tous",
    title: "Calme feutré & espace enfants insonorisé",
    description:
      "Pour que chacun savoure l’instant à son rythme, le café intègre une aire de jeux en bois entièrement vitrée et insonorisée : la sérénité d’un coffee shop calme, le bonheur des familles en plus.",
  },
] as const;

export default function LeLieu() {
  return (
    <section
      id="le-lieu"
      aria-labelledby="lieu-heading"
      className="py-20 sm:py-28 lg:py-36 border-y transition-colors duration-400"
      style={{
        backgroundColor: "var(--bg-subtle)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ultra-airy editorial centerpiece */}
        <Reveal className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <p
            className="text-xs font-semibold uppercase tracking-[0.14em] mb-3.5"
            style={{ color: "var(--accent-badge)" }}
          >
            Le Lieu & L’Ambiance
          </p>
          <h2
            id="lieu-heading"
            className="text-3xl sm:text-5xl lg:text-[3.35rem] font-semibold tracking-[-0.03em] leading-[1.08] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Prendre le temps, juste en haut des marches.
          </h2>
          <p
            className="text-base sm:text-lg leading-[1.75] font-normal"
            style={{ color: "var(--text-secondary)" }}
          >
            Au cœur historique de Metz, entre la rue de la Chèvre et la Place
            Saint-Jacques, la{" "}
            <strong className="font-semibold" style={{ color: "var(--text-primary)" }}>
              Place du Marché de la Chèvre
            </strong>{" "}
            offre un véritable balcon urbain. C’est là, exactement{" "}
            <strong className="font-semibold" style={{ color: "var(--text-primary)" }}>
              en haut des escaliers du 15 rue de la Chèvre
            </strong>
            , que nous avons imaginé un lieu de vie lumineux où l’odeur du pain{" "}
            <em className="font-semibold" style={{ color: "var(--text-primary)" }}>Shokupan</em> chaud croise celle du café fraîchement moulu.
          </p>
        </Reveal>

        {/* 3 Minimalist Architectural Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">
          {AMBIANCE_NOTES.map((note, index) => {
            const Icon = note.icon;
            return (
              <Reveal key={note.title} delayMs={index * 80} className="h-full">
                <article
                  className="h-full border p-7 sm:p-8 lg:p-9 shadow-md flex flex-col justify-between transition-all duration-300"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    borderColor: "var(--border-color)",
                    borderRadius: "var(--card-radius)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div>
                    <div
                      className="w-11 h-11 border flex items-center justify-center mb-6"
                      style={{
                        backgroundColor: "var(--bg-subtle)",
                        borderColor: "var(--border-color)",
                        borderRadius: "calc(var(--card-radius) - 10px)",
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "var(--accent-badge)" }} strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <p
                      className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-2"
                      style={{ color: "var(--accent-badge)" }}
                    >
                      {note.eyebrow}
                    </p>
                    <h3
                      className="text-xl font-semibold tracking-[-0.02em] mb-3"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {note.title}
                    </h3>
                    <p
                      className="text-sm sm:text-[15px] leading-[1.68]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {note.description}
                    </p>
                  </div>

                  <div
                    className="mt-8 pt-4 border-t flex items-center justify-between text-[11px]"
                    style={{
                      borderColor: "var(--border-color)",
                      color: "var(--text-muted)",
                    }}
                  >
                    <span>Place du Marché de la Chèvre</span>
                    <span className="font-semibold" style={{ color: "var(--text-primary)" }}>Metz Centre</span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
