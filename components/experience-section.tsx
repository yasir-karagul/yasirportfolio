import { BusinessCard } from "@/components/business-card";
import { SectionIntro } from "@/components/section-intro";
import { experience } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section className="section-shell" id="experience">
      <div className="content-section">
        <SectionIntro
          eyebrow="Experience"
          title="A practical path through production, UAV, and engineering work."
          summary="The timeline keeps the content concrete: each entry is tied to the CV, a public repository, or hosted media, and avoids private reference details."
        />

        <div className="timeline-grid">
          {experience.map((item) => (
            <BusinessCard className="timeline-card" key={item.organization}>
              <div className="case-study-card__meta">
                <span>{item.role}</span>
                <p>{item.source}</p>
              </div>
              <h3>{item.organization}</h3>
              <p>{item.detail}</p>
              <ul className="evidence-list">
                {item.focus.map((focus) => (
                  <li key={focus}>{focus}</li>
                ))}
              </ul>
            </BusinessCard>
          ))}
        </div>
      </div>
    </section>
  );
}
