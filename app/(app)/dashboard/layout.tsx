import { ReactNode } from "react";

import { ProtectedRouteGuard } from "@/components/auth/protected-route-guard";
import { AppShell } from "@/components/dashboard/app-shell";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRouteGuard>
      <AppShell>{children}</AppShell>
    </ProtectedRouteGuard>
  );
}
