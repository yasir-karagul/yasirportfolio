import { ProfileLinks } from "@/components/profile-links";

const navItems = [
  { href: "#field-map", label: "Field Map" },
  { href: "#build-log", label: "Build Log" },
  { href: "#stack", label: "Stack" },
] as const;

export function SiteNav() {
  return (
    <nav aria-label="Primary navigation" className="nav-card">
      <a className="nav-card__brand" href="#top">
        Yasir Khalid
      </a>
      <div className="nav-card__links">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
        <ProfileLinks variant="nav" />
      </div>
    </nav>
  );
}
