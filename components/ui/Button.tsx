/**
 * components/ui/Button.tsx — exact button specs from PROMPT.md §3.4.
 * Primary: accent-inverse bg, accent text, mono 13px, 2px radius.
 * Secondary: transparent, 1px edge border, text-primary, mono 13px.
 * Panels stay radius-0; only buttons get the subtle 2px radius.
 */

import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex min-h-11 items-center justify-center rounded-button font-mono text-label font-medium transition-[transform,border-color,background-color] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-accent";

const variants = {
  primary:
    "bg-accent-inverse text-accent border border-transparent px-4 py-3 hover:-translate-y-px hover:border-accent",
  secondary:
    "bg-transparent text-ink border border-edge px-4 py-3 hover:border-accent hover:-translate-y-px",
} as const;

export type ButtonVariant = keyof typeof variants;

interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({
  href,
  variant = "primary",
  external = false,
  className = "",
  children,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
