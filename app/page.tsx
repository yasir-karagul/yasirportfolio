import { BusinessCardSection } from "@/components/business-card-section";
import { HeroSection } from "@/components/hero-section";
import { SiteNav } from "@/components/site-nav";
import { StackSection } from "@/components/stack-section";
import { buildLog, fieldMap } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="site-frame">
      <SiteNav />
      <HeroSection />
      <BusinessCardSection
        cards={fieldMap}
        eyebrow="Character Palette Applied"
        id="field-map"
        title="Crimson background. Charcoal systems. Neon execution."
      />
      <BusinessCardSection
        cards={buildLog}
        eyebrow="Public Build Log"
        id="build-log"
        title="Project work treated like mission systems, not portfolio tiles."
      />
      <StackSection />
    </main>
  );
}
