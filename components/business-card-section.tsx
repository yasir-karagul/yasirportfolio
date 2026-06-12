import { BusinessCard } from "@/components/business-card";

type CardItem = {
  code: string;
  detail: string;
  title: string;
};

type BusinessCardSectionProps = {
  cards: readonly CardItem[];
  eyebrow: string;
  id: string;
  title: string;
};

export function BusinessCardSection({
  cards,
  eyebrow,
  id,
  title,
}: BusinessCardSectionProps) {
  return (
    <section className="section-shell" id={id}>
      <div className="section-grid">
        <BusinessCard className="section-title-card" tone="strong">
          <p className="card-kicker">{eyebrow}</p>
          <h2>{title}</h2>
        </BusinessCard>

        <div className="business-card-grid">
          {cards.map((card) => (
            <BusinessCard key={card.code}>
              <p className="card-code">{card.code}</p>
              <h3>{card.title}</h3>
              <p>{card.detail}</p>
            </BusinessCard>
          ))}
        </div>
      </div>
    </section>
  );
}
