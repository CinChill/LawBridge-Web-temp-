import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CompactFeatureSection } from "@/sections/home/compact-feature-section";
import { HeroToolSection } from "@/sections/home/hero-tool-section";
import { QuickActionsSection } from "@/sections/home/quick-actions-section";
import { TrustStatsSection } from "@/sections/home/trust-stats-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <HeroToolSection />
        <QuickActionsSection />
        <TrustStatsSection />
        <CompactFeatureSection />
      </main>
      <Footer />
    </div>
  );
}
