import { ActionLink } from "@/components/action-link";
import { BusinessCard } from "@/components/business-card";
import { SectionIntro } from "@/components/section-intro";
import { resumeHighlights } from "@/lib/portfolio-data";

export function ResumeSection() {
  return (
    <section className="section-shell section-shell--last" id="resume">
      <div className="content-section">
        <SectionIntro
          eyebrow="Resume"
          title="A public-safe resume view instead of the raw CV file."
          summary="The original CV contains direct contact and reference details, so the website exposes a cleaner resume snapshot built for public viewing."
        />

        <BusinessCard className="resume-card" tone="strong">
          <div>
            <p className="card-code">{resumeHighlights.title}</p>
            <h3>{resumeHighlights.summary}</h3>
            <ul className="evidence-list">
              {resumeHighlights.strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </div>
          <div className="resume-card__aside">
            <p>{resumeHighlights.note}</p>
            <ActionLink href="/resume" variant="primary">
              Open resume
            </ActionLink>
          </div>
        </BusinessCard>
      </div>
    </section>
  );
}
