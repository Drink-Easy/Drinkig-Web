import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { TeamSection } from "./components/TeamSection";
import { HistorySection } from "./components/HistorySection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TeamSection />
        <HistorySection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}