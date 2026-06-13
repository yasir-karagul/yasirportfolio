import { BusinessCard } from "@/components/business-card";
import { SectionIntro } from "@/components/section-intro";
import { capabilities } from "@/lib/portfolio-data";

export function CapabilitiesSection() {
  return (
    <section className="section-shell" id="capabilities">
      <div className="content-section">
        <SectionIntro
          eyebrow="Capabilities"
          title="What the project evidence says Yasir can build."
          summary="These are not generic skill labels. Each capability points back to a project, CV-backed role, public repository, or documented toolchain."
        />

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <BusinessCard className="capability-card" key={capability.code}>
              <p className="card-code">{capability.code}</p>
              <h3>{capability.title}</h3>
              <p>{capability.detail}</p>
              <div className="evidence-pill">{capability.evidence}</div>
            </BusinessCard>
          ))}
        </div>
      </div>
    </section>
  );
}
