import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF8F5",
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ptit-dessert-style-tokyo-pop.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Le P'tit Dessert Café | Brunch, Bar à Tiramisus & Shokupan — Metz",
  description:
    "En haut des escaliers, 15 rue de la Chèvre (Place du Marché de la Chèvre) à Metz. Coffee shop de spécialité, bar à tiramisus artisanaux, pain de mie japonais Shokupan fait maison et brunch 7j/7.",
  keywords: [
    "Le P'tit Dessert Café Metz",
    "P'tit Dessert Metz",
    "15 rue de la Chèvre Metz",
    "Place du Marché de la Chèvre Metz",
    "Brunch Metz",
    "Tiramisu artisanal Metz",
    "Shokupan Metz",
    "Coffee shop Metz",
    "Salon de thé Metz",
  ],
  authors: [{ name: "Le P'tit Dessert Café" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Le P'tit Dessert Café — En haut des marches, Place du Marché de la Chèvre à Metz",
    description:
      "Tiramisus montés minute, pain japonais Shokupan pétri sur place, cafés de spécialité et brunch servi 7j/7 au cœur de Metz.",
    siteName: "Le P'tit Dessert Café",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="cyber" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen antialiased overflow-x-hidden`}
        style={{
          backgroundColor: "var(--bg-canvas)",
          color: "var(--text-primary)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
