// components/ui/SectionBadge.tsx

import type { ReactNode } from "react";

interface SectionBadgeProps {
  icon?: ReactNode;
  text: string;
  className?: string;
}

export default function SectionBadge({
  icon,
  text,
  className = "",
}: SectionBadgeProps) {
  return (
    <div
      className={`
        inline-flex items-center gap-2
        px-4 py-1.5
        rounded-full
        border border-border/40
        text-xs uppercase
        tracking-[0.2em]
        font-semibold
        text-primary
        neon-text-glow
        ${className}
      `}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}
