export default function Footer() {
  return (
    <footer
      className="border-t transition-colors duration-400"
      style={{
        backgroundColor: "var(--bg-subtle)",
        borderColor: "var(--border-color)",
        color: "var(--text-secondary)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs">
        <div className="space-y-1.5">
          <p
            className="text-sm font-semibold tracking-[-0.015em]"
            style={{ color: "var(--text-primary)" }}
          >
            Le P&apos;tit Dessert Café · Metz
          </p>
          <p style={{ color: "var(--text-secondary)" }}>
            En haut des escaliers, 15 rue de la Chèvre — Place du Marché de la
            Chèvre, 57000 Metz
          </p>
          <p
            className="text-[11px] tabular-nums"
            style={{ color: "var(--text-muted)" }}
          >
            Tél. 06 03 72 55 25 · Lun–Sam 10h00–18h00 · Dim 10h00–17h00 · Brunch,
            Bar à Tiramisus & Pain Shokupan
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-medium">
          <a
            href="#la-carte"
            className="transition-colors hover:opacity-75"
            style={{ color: "var(--text-primary)" }}
          >
            Spécialités
          </a>
          <a
            href="#menu-detaille"
            className="transition-colors hover:opacity-75"
            style={{ color: "var(--text-primary)" }}
          >
            La Carte
          </a>
          <a
            href="#le-lieu"
            className="transition-colors hover:opacity-75"
            style={{ color: "var(--text-primary)" }}
          >
            Le Lieu
          </a>
          <a
            href="#avis-clients"
            className="transition-colors hover:opacity-75"
            style={{ color: "var(--text-primary)" }}
          >
            Avis Clients
          </a>
          <a
            href="#infos-pratiques"
            className="transition-colors hover:opacity-75"
            style={{ color: "var(--text-primary)" }}
          >
            Accès & Horaires
          </a>
          <span
            className="hidden sm:inline"
            style={{ color: "var(--border-color)" }}
            aria-hidden="true"
          >
            |
          </span>
          <span
            className="w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-none"
            style={{
              borderColor: "var(--border-color)",
              color: "var(--text-muted)",
            }}
          >
            © 2026 Le P&apos;tit Dessert Café
          </span>
        </div>
      </div>
    </footer>
  );
}
