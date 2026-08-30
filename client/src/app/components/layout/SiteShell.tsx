import type { ReactNode } from "react";

interface SiteShellProps {
  children: ReactNode;
}

export default function SiteShell({ children }: SiteShellProps) {
  return <div className="min-h-screen bg-background ">{children}</div>;
}
