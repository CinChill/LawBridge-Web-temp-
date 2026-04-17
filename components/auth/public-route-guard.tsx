"use client";

import { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useAuth } from "@/contexts/AuthContext";

type PublicRouteGuardProps = {
  children: ReactNode;
};

function AuthLoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="rounded-[1.5rem] border border-slate-200/80 bg-white px-6 py-5 text-center shadow-sm shadow-slate-200/70">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          LawBridge
        </p>
        <p className="mt-2 text-sm text-slate-600">Çalışma alanınız hazırlanıyor.</p>
      </div>
    </div>
  );
}

export function PublicRouteGuard({ children }: PublicRouteGuardProps) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/dashboard");
    }
  }, [loading, pathname, router, user]);

  if (loading || user) {
    return <AuthLoadingScreen />;
  }

  return <>{children}</>;
}
