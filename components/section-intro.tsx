type SectionIntroProps = {
  eyebrow: string;
  summary: string;
  title: string;
};

export function SectionIntro({ eyebrow, summary, title }: SectionIntroProps) {
  return (
    <div className="section-intro">
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p>{summary}</p>
    </div>
  );
}
