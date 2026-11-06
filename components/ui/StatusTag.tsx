/**
 * components/ui/StatusTag.tsx — mono status tags.
 * PROMPT.md §4.5/§4.7: state is NEVER communicated by color alone;
 * the tag text always accompanies the color.
 */

import type { SkillStatus } from "@/data/skills";

const statusColor: Record<string, string> = {
  experienced: "text-status-experienced",
  learning: "text-status-learning",
  familiar: "text-status-familiar",
  roadmap: "text-status-roadmap",
  "in-progress": "text-status-warning",
  earned: "text-status-experienced",
  planning: "text-ink-tertiary",
};

export default function StatusTag({
  status,
  label,
}: {
  status: string;
  label: string;
}) {
  return (
    <span
      className={`font-mono text-caption whitespace-nowrap ${statusColor[status] ?? "text-ink-tertiary"}`}
    >
      {label}
    </span>
  );
}

export type { SkillStatus };
