import Image from "next/image";
import Link from "next/link";
import { ProfileLinks } from "@/components/profile-links";
import { profileImage } from "@/lib/portfolio-data";

const navItems = [
  { href: "/#selected-work", label: "Work" },
  { href: "/#oktant", label: "Oktant" },
  { href: "/#experience", label: "Experience" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#resume", label: "Resume" },
] as const;

export function SiteNav() {
  return (
    <nav aria-label="Primary navigation" className="nav-card">
      <Link className="nav-card__brand" href="/">
        <span className="nav-card__avatar-slot" aria-hidden="true">
          <Image
            alt=""
            className="nav-card__avatar"
            height={36}
            src={profileImage.src}
            width={36}
          />
        </span>
        <span>Yasir Khalid</span>
      </Link>
      <div className="nav-card__links">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
        <ProfileLinks variant="nav" />
      </div>
    </nav>
  );
}
