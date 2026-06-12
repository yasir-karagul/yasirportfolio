import type { ReactNode } from "react";

type BusinessCardProps = {
  children: ReactNode;
  className?: string;
  density?: "normal" | "compact";
  tone?: "default" | "strong";
};

export function BusinessCard({
  children,
  className = "",
  density = "normal",
  tone = "default",
}: BusinessCardProps) {
  const densityClass =
    density === "compact" ? "business-card--compact" : "business-card--normal";
  const toneClass = tone === "strong" ? "business-card--strong" : "";

  return (
    <article className={`business-card ${densityClass} ${toneClass} ${className}`}>
      {children}
    </article>
  );
}
