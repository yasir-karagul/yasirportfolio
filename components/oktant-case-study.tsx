import { BusinessCard } from "@/components/business-card";
import { SectionIntro } from "@/components/section-intro";
import { caseStudies, mediaItems } from "@/lib/portfolio-data";

const oktantStudy = caseStudies.find((study) => study.code === "UAV");

export function OktantCaseStudy() {
  if (!oktantStudy) {
    return null;
  }

  return (
    <section className="section-shell" id="oktant">
      <div className="content-section">
        <SectionIntro
          eyebrow="Oktant Team"
          title="UAV software work presented as a real case study."
          summary="This section gives the competition and UAV material its own space, pairing media with the technical role: PyMAVLink work, virtual testing, AI-supported prediction, tracking, and team integration."
        />

        <div className="oktant-layout">
          <BusinessCard className="oktant-brief" tone="strong">
            <p className="card-code">{oktantStudy.context}</p>
            <h3>{oktantStudy.title}</h3>
            <p>{oktantStudy.detail}</p>
            <ul className="evidence-list">
              {oktantStudy.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </BusinessCard>

          <div className="media-grid">
            {mediaItems.map((item) => (
              <BusinessCard className="media-card" key={item.href}>
                <div className="media-frame">
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    src={item.embedUrl}
                    title={item.title}
                  />
                </div>
                <div className="media-card__body">
                  <p className="card-code">{item.context}</p>
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                  <p className="media-role">{item.role}</p>
                  <a
                    className="evidence-link"
                    href={item.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Open hosted video
                  </a>
                </div>
              </BusinessCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
