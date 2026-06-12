import { BusinessCard } from "@/components/business-card";
import { stack } from "@/lib/portfolio-data";

export function StackSection() {
  return (
    <section className="section-shell section-shell--last" id="stack">
      <div className="stack-layout">
        <BusinessCard className="section-title-card" tone="strong">
          <p className="card-kicker">Toolchain</p>
          <h2>Technologies in active use.</h2>
        </BusinessCard>

        <div className="stack-grid">
          {stack.map((item) => (
            <BusinessCard className="stack-card" density="compact" key={item}>
              <span>{item}</span>
            </BusinessCard>
          ))}
        </div>
      </div>
    </section>
  );
}
