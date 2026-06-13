import Image from "next/image";
import { ActionLink } from "@/components/action-link";
import { BusinessCard } from "@/components/business-card";
import { ProfileLinks } from "@/components/profile-links";
import { heroStats } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section className="hero-shell" id="top">
      <div className="hero-atmosphere" />
      <div className="hero-grid">
        <BusinessCard className="identity-card" tone="strong">
          <p className="card-kicker">
            Computer engineer / operational software / UAV systems
          </p>
          <h1 className="hero-title">Yasir Khalid</h1>
          <p className="hero-subtitle">
            Building practical systems across factories, mobile workflows,
            UAV projects, and real-time interfaces.
          </p>
          <p className="hero-copy">
            Based in Turkey, I work across Flutter production apps, Next.js
            platforms, Python AI experiments, UAV software integration, and
            UE5.7 real-time systems. This portfolio focuses on verifiable work:
            public repositories, CV-backed projects, and hosted media.
          </p>

          <div className="hero-actions">
            <ActionLink href="#selected-work" variant="primary">
              View work
            </ActionLink>
            <ActionLink href="#oktant">Oktant case</ActionLink>
            <ActionLink href="/resume">Resume</ActionLink>
            <ProfileLinks />
          </div>

          <div className="stat-strip" aria-label="Portfolio stats">
            {heroStats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <span>{stat.value}</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </BusinessCard>

        <BusinessCard className="character-business-card" tone="strong">
          <div className="character-card__label">Dark / Real-time / Systems</div>
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
