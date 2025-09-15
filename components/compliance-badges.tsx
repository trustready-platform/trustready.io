export function ComplianceBadges() {
  const badges = ["SOC 2", "ISO 27001", "HIPAA", "GDPR"];

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {badges.map((label) => (
        <Badge key={label} variant="secondary" className="px-3 py-1 text-sm">
          {label}
        </Badge>
      ))}
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
