"use client";

import { useState } from "react";
import { Coffee, Menu, X, MapPin, Phone, ArrowUpRight, Star } from "lucide-react";

const NAV_LINKS = [
  { href: "#la-carte", label: "Spécialités" },
  { href: "#menu-detaille", label: "La Carte" },
  { href: "#le-lieu", label: "Le Lieu" },
  { href: "#avis-clients", label: "Avis Clients" },
  { href: "#infos-pratiques", label: "Accès & Horaires" },
] as const;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 w-full backdrop-blur-xl border-b transition-colors duration-400"
      style={{
        backgroundColor: "var(--navbar-bg)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[4.25rem] flex items-center justify-between gap-3">
        {/* Brand Identity */}
        <a
          href="#top"
          aria-label="Le P'tit Dessert Café — Retour en haut"
          className="group flex items-center gap-3 min-w-0 focus:outline-none"
        >
          <span
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
            style={{
              backgroundColor: "var(--accent-primary)",
              color: "var(--accent-contrast)",
            }}
          >
            <Coffee className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <span
              className="block text-[15px] sm:text-base font-semibold tracking-[-0.02em] truncate"
              style={{ color: "var(--text-primary)" }}
            >
              Le P&apos;tit Dessert Café
            </span>
            <span
              className="block text-[11px] tracking-[-0.01em] truncate"
              style={{ color: "var(--text-muted)" }}
            >
              En haut des escaliers · 15 rue de la Chèvre, Metz
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-6 lg:gap-7 shrink-0"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium transition-colors whitespace-nowrap hover:opacity-80 flex items-center gap-1"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label === "Avis Clients" && (
                <Star className="w-3 h-3 fill-amber-400 text-amber-400 inline" />
              )}
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="tel:+33603725525"
            className="hidden lg:inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap tabular-nums"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            <Phone className="w-3.5 h-3.5" style={{ color: "var(--text-muted)" }} strokeWidth={1.8} aria-hidden="true" />
            <span>06 03 72 55 25</span>
          </a>

          <a
            href="#la-carte"
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 shadow-sm whitespace-nowrap hover:opacity-90"
            style={{
              backgroundColor: "var(--accent-primary)",
              color: "var(--accent-contrast)",
            }}
          >
            <span>Découvrir la carte</span>
            <ArrowUpRight className="w-3.5 h-3.5 hidden sm:inline opacity-80" strokeWidth={1.8} aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border transition-colors cursor-pointer"
            style={{
              backgroundColor: "var(--bg-subtle)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
            ) : (
              <Menu className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen ? (
        <div
          className="md:hidden border-t px-4 sm:px-6 py-4 shadow-xl backdrop-blur-2xl transition-colors"
          style={{
            backgroundColor: "var(--bg-surface)",
            borderColor: "var(--border-color)",
          }}
        >
          <nav aria-label="Menu mobile" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between"
                style={{ color: "var(--text-primary)" }}
              >
                <span>{link.label}</span>
                {link.label === "Avis Clients" && (
                  <span className="text-xs flex items-center gap-1 text-amber-500 font-bold">
                    4.5 <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  </span>
                )}
              </a>
            ))}
            <div
              className="pt-3 mt-2 border-t flex flex-wrap items-center justify-between gap-2 px-3.5 text-xs"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-secondary)",
              }}
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" style={{ color: "var(--accent-primary)" }} strokeWidth={1.75} aria-hidden="true" />
                En haut des escaliers · 15 rue de la Chèvre, Metz
              </span>
              <a
                href="tel:+33603725525"
                className="inline-flex items-center gap-1 font-semibold tabular-nums"
                style={{ color: "var(--text-primary)" }}
              >
                <Phone className="w-3 h-3" strokeWidth={1.8} aria-hidden="true" />
                06 03 72 55 25
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
