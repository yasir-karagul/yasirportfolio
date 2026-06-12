import Image from "next/image";
import { ActionLink } from "@/components/action-link";
import { BusinessCard } from "@/components/business-card";
import { ProfileLinks } from "@/components/profile-links";
import { stats } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section className="hero-shell" id="top">
      <div className="hero-atmosphere" />
      <div className="hero-grid">
        <BusinessCard className="identity-card" tone="strong">
          <p className="card-kicker">
            Computer engineer / game systems / product interfaces
          </p>
          <h1 className="hero-title">Yasir Khalid</h1>
          <p className="hero-subtitle">
            Building software with tactical precision and game-engine energy.
          </p>
          <p className="hero-copy">
            Based in Turkey, I work across Unreal Engine 5.7, modern web
            technologies, Flutter mobile development, and practical AI
            integration. The interface is dark, fast, and red-lit by design.
          </p>

          <div className="hero-actions">
            <ActionLink href="#field-map" variant="primary">
              Enter Field Map
            </ActionLink>
            <ActionLink href="#build-log">View Systems</ActionLink>
            <ProfileLinks />
          </div>

          <div className="stat-strip" aria-label="Portfolio stats">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <span>{stat.value}</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </BusinessCard>

        <BusinessCard className="character-business-card" tone="strong">
          <div className="character-card__label">Crimson / Tactical / Neon</div>
          <Image
            src="/images/cyber-red-character.png"
            alt="Original cyber red tactical character with neon blade"
            fill
            priority
            sizes="(min-width: 960px) 48vw, 100vw"
            className="character-card__image"
          />
          <div className="character-card__shade" />
        </BusinessCard>
      </div>
    </section>
  );
}
