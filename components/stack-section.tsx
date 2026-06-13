import { BusinessCard } from "@/components/business-card";
import { SectionIntro } from "@/components/section-intro";
import { stackGroups } from "@/lib/portfolio-data";

export function StackSection() {
  return (
    <section className="section-shell" id="stack">
      <div className="content-section">
        <SectionIntro
          eyebrow="Toolchain"
          title="Grouped by the work each tool supports."
          summary="The stack is organized around the systems in the portfolio: web platforms, mobile operations, backend workflows, AI/UAV work, and real-time systems."
        />

        <div className="stack-group-grid">
          {stackGroups.map((group) => (
            <BusinessCard className="stack-group-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </BusinessCard>
          ))}
        </div>
      </div>
    </section>
  );
}
