import { BusinessCard } from "@/components/business-card";
import { SectionIntro } from "@/components/section-intro";
import { caseStudies } from "@/lib/portfolio-data";

export function SelectedWorkSection() {
  return (
    <section className="section-shell" id="selected-work">
      <div className="content-section">
        <SectionIntro
          eyebrow="Selected work"
          title="Projects with source material behind the claims."
          summary="A focused set of public repositories, CV-backed work, and hosted media that show how the same engineering base moves between factory software, school platforms, UAV systems, and Python experiments."
        />

        <div className="case-study-grid">
          {caseStudies.map((study) => (
            <BusinessCard className="case-study-card" key={study.code}>
              <div className="case-study-card__meta">
                <span>{study.code}</span>
                <p>{study.context}</p>
              </div>
              <h3>{study.title}</h3>
              <p>{study.detail}</p>

              <ul className="evidence-list">
                {study.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="tag-row" aria-label={`${study.title} technologies`}>
                {study.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="source-row">
                <span>{study.source}</span>
                <div>
                  {study.links.map((link) => (
                    <a
                      className="evidence-link"
                      href={link.href}
                      key={link.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </BusinessCard>
          ))}
        </div>
      </div>
    </section>
  );
}
