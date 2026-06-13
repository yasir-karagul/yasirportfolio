import { CapabilitiesSection } from "@/components/capabilities-section";
import { ExperienceSection } from "@/components/experience-section";
import { FireSparks } from "@/components/fire-sparks";
import { HeroSection } from "@/components/hero-section";
import { OktantCaseStudy } from "@/components/oktant-case-study";
import { ResumeSection } from "@/components/resume-section";
import { SelectedWorkSection } from "@/components/selected-work-section";
import { SiteNav } from "@/components/site-nav";
import { StackSection } from "@/components/stack-section";

export default function Home() {
  return (
    <main className="site-frame">
      <FireSparks />
      <SiteNav />
      <HeroSection />
      <SelectedWorkSection />
      <OktantCaseStudy />
      <ExperienceSection />
      <CapabilitiesSection />
      <StackSection />
      <ResumeSection />
    </main>
  );
}
