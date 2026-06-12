"use client";

import { type MouseEvent, useEffect, useState } from "react";

type ProfileLink = {
  href: string;
  label: string;
};

const profileLinks: ProfileLink[] = [
  {
    href: "https://github.com/yasir-karagul",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/yasir-abed/",
    label: "LinkedIn",
  },
];

type ProfileLinksProps = {
  variant?: "nav" | "hero";
};

export function ProfileLinks({ variant = "hero" }: ProfileLinksProps) {
  const [opensInNewWindow, setOpensInNewWindow] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 640px)");
    const updateTarget = () => setOpensInNewWindow(query.matches);

    updateTarget();
    query.addEventListener("change", updateTarget);

    return () => query.removeEventListener("change", updateTarget);
  }, []);

  const targetProps = opensInNewWindow
    ? { target: "_blank", rel: "noreferrer" }
    : {};

  const openProfile = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!opensInNewWindow) {
      return;
    }

    event.preventDefault();
    const openedWindow = window.open(href, "_blank", "noopener,noreferrer");

    if (openedWindow) {
      openedWindow.opener = null;
      openedWindow.focus();
    }
  };

  if (variant === "nav") {
    return (
      <div className="profile-links profile-links--nav">
        {profileLinks.map((link) => (
          <a
            className="profile-link"
            href={link.href}
            key={link.href}
            onClick={(event) => openProfile(event, link.href)}
            {...targetProps}
          >
            {link.label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="profile-links">
      {profileLinks.map((link) => (
        <a
          className="red-action red-action--profile"
          href={link.href}
          key={link.href}
          onClick={(event) => openProfile(event, link.href)}
          {...targetProps}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
