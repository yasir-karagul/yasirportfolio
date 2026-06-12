import type { AnchorHTMLAttributes, ReactNode } from "react";

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ActionLink({
  children,
  className = "",
  variant = "secondary",
  ...props
}: ActionLinkProps) {
  const variantClass =
    variant === "primary" ? "red-action--primary" : "red-action--secondary";

  return (
    <a className={`red-action ${variantClass} ${className}`} {...props}>
      {children}
    </a>
  );
}
