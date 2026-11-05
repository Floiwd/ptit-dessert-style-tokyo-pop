import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LaCarte from "@/components/LaCarte";
import EditorialHighlights from "@/components/EditorialHighlights";
import LeLieu from "@/components/LeLieu";
import AvisGoogle from "@/components/AvisGoogle";
import InfosPratiques from "@/components/InfosPratiques";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function HomePage() {
  return (
    <ThemeProvider>
      <div
        className="theme-root min-h-screen flex flex-col overflow-x-hidden transition-colors duration-400"
        style={{
          backgroundColor: "var(--bg-canvas)",
          color: "var(--text-primary)",
        }}
      >
        <Navbar />
        <main className="flex-1">
          <Hero />
          <EditorialHighlights />
          <LaCarte />
          <LeLieu />
          <AvisGoogle />
          <InfosPratiques />
        </main>
        <Footer />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}
