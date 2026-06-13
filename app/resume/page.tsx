import type { Metadata } from "next";
import { ActionLink } from "@/components/action-link";
import { BusinessCard } from "@/components/business-card";
import { FireSparks } from "@/components/fire-sparks";
import { SiteNav } from "@/components/site-nav";
import { caseStudies, experience, resumeHighlights, stackGroups } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Resume | Yasir Khalid",
  description:
    "Public-safe resume snapshot for Yasir Khalid, covering software engineering, Flutter, Next.js, UAV systems, AI, and production workflow projects.",
};

export default function ResumePage() {
  return (
    <main className="site-frame resume-frame">
      <FireSparks />
      <SiteNav />

      <section className="resume-page-shell" id="top">
        <div className="resume-page-header">
          <p className="section-eyebrow">Public resume</p>
          <h1>Yasir Khalid</h1>
          <p>{resumeHighlights.summary}</p>
          <div className="hero-actions">
            <ActionLink href="/" variant="primary">
              Back to portfolio
            </ActionLink>
            <ActionLink href="https://github.com/yasir-karagul" rel="noreferrer" target="_blank">
              GitHub
            </ActionLink>
            <ActionLink href="https://www.linkedin.com/in/yasir-abed/" rel="noreferrer" target="_blank">
              LinkedIn
            </ActionLink>
          </div>
        </div>

        <div className="resume-page-grid">
          <BusinessCard className="resume-page-card" tone="strong">
            <p className="card-code">Profile</p>
            <h2>Software engineer with production, UAV, mobile, and web evidence.</h2>
            <ul className="evidence-list">
              {resumeHighlights.strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
            <p>{resumeHighlights.note}</p>
          </BusinessCard>

          <BusinessCard className="resume-page-card">
            <p className="card-code">Experience</p>
            {experience.map((item) => (
              <div className="resume-entry" key={item.organization}>
                <h3>{item.role}</h3>
                <p>{item.organization}</p>
                <span>{item.source}</span>
              </div>
            ))}
          </BusinessCard>

          <BusinessCard className="resume-page-card">
            <p className="card-code">Selected projects</p>
            {caseStudies.map((study) => (
              <div className="resume-entry" key={study.code}>
                <h3>{study.title}</h3>
                <p>{study.context}</p>
                <span>{study.source}</span>
              </div>
            ))}
          </BusinessCard>

          <BusinessCard className="resume-page-card">
            <p className="card-code">Technical stack</p>
            {stackGroups.map((group) => (
              <div className="resume-entry" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items.join(" / ")}</p>
              </div>
            ))}
          </BusinessCard>
        </div>
      </section>
    </main>
  );
}
