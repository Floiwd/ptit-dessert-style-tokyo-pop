import { Sparkles, ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";

export default function EditorialHighlights() {
  return (
    <section className="editorial-showcase py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Asymmetrical Editorial Narrative */}
        <Reveal className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4"
            style={{
              backgroundColor: "var(--accent-badge-bg)",
              color: "var(--accent-badge)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>L’Expérience Signature</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            L’artisanat de précision, de la farine au dressage minute.
          </h3>
          <p className="text-sm sm:text-base leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Chaque jour, nous commençons par pétrir le véritable pain de mie japonais <strong style={{ color: "var(--text-primary)" }}>Shokupan</strong>, 
            avant de fouetter nos crèmes mascarpone pour monter les tiramisus directement sous les yeux des clients.
          </p>

          <ul className="space-y-3 mb-8 text-xs sm:text-sm">
            {[
              "Crème mascarpone montée minute sans conservateur",
              "Pain Shokupan pur beurre cuit tous les matins",
              "Torréfaction de café éthique & équitable",
              "Recettes signatures testées et perfectionnées depuis 2020",
            ].map((text, idx) => (
              <li key={idx} className="flex items-center gap-3" style={{ color: "var(--text-primary)" }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: "var(--accent-badge-bg)",
                    color: "var(--accent-badge)",
                  }}
                >
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <a
            href="#menu-detaille"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold group transition-all"
            style={{ color: "var(--accent-primary)" }}
          >
            <span>Consulter les déclinaisons de la semaine</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        {/* Right Column: Layered Editorial Image Composition */}
        <Reveal delayMs={100} className="lg:col-span-7">
          <div className="relative grid grid-cols-2 gap-4">
            <div
              className="overflow-hidden shadow-lg border"
              style={{
                borderRadius: "var(--card-radius)",
                borderColor: "var(--border-color)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <Image
                src="/tiramisu-signature.jpg"
                alt="Tiramisus artisanaux"
                width={600}
                height={500}
                className="w-full h-64 sm:h-80 object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div
              className="overflow-hidden shadow-lg border translate-y-6 sm:translate-y-10"
              style={{
                borderRadius: "var(--card-radius)",
                borderColor: "var(--border-color)",
                boxShadow: "var(--shadow-elevated)",
              }}
            >
              <Image
                src="/shokupan-sando.jpg"
                alt="Shokupan sando"
                width={600}
                height={500}
                className="w-full h-64 sm:h-80 object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
