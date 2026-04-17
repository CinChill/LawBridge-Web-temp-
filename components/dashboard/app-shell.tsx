"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { uiText } from "@/constants/ui-text";
import { useAuth } from "@/contexts/AuthContext";

type AppShellProps = {
  children: ReactNode;
};

const navigationItems = [
  { href: "/dashboard/analizler", label: "Analizler" },
  { href: "/dashboard/gecmis", label: "Geçmiş Analizler" },
  { href: "/dashboard/dilekceler", label: "Dilekçeler" },
  { href: "/dashboard/emsal", label: "Emsal Kararlar" },
  { href: "/dashboard/profil", label: "Profil" },
];

function isActivePath(pathname: string, href: string) {
  return pathname === href;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const displayName = user?.displayName || "LawBridge Kullanıcısı";
  const email = user?.email || "Hesap bilgisi hazır";

  const activeItem =
    navigationItems.find((item) => isActivePath(pathname, item.href)) ??
    (pathname === "/dashboard"
      ? { href: "/dashboard", label: "Çalışma Alanı" }
      : navigationItems[0]);

  async function handleLogout() {
    await logout();
    router.replace("/login");
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_24%),linear-gradient(180deg,#f8fafc_0%,#ffffff_48%,#f8fafc_100%)] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-[1440px]">
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-[288px] border-r border-slate-200/80 bg-white/95 px-5 py-5 shadow-[0_24px_48px_-28px_rgba(15,23,42,0.24)] backdrop-blur-2xl transition-transform duration-300 lg:static lg:translate-x-0 lg:shadow-none ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-3 border-b border-slate-200/80 pb-5">
              <div className="space-y-1">
                <Link
                  href="/dashboard"
                  className="text-lg font-semibold tracking-[-0.03em] text-slate-950 transition-colors duration-200 hover:text-blue-700"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {uiText.brand.name}
                </Link>
                <p className="text-sm leading-6 text-slate-500">
                  Hukuki iş akışlarınızı tek çalışma alanında yönetin.
                </p>
              </div>

              <button
                type="button"
                aria-label="Menüyü kapat"
                onClick={() => setIsSidebarOpen(false)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm shadow-slate-200/70 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 lg:hidden"
              >
                Kapat
              </button>
            </div>

            <nav aria-label="Dashboard gezinme" className="mt-5 space-y-1.5">
              <Link
                href="/dashboard"
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center rounded-[1rem] px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  pathname === "/dashboard"
                    ? "border border-slate-200 bg-slate-950 text-white shadow-md shadow-slate-900/10"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                Çalışma Alanı
              </Link>

              {navigationItems.map((item) => {
                const isActive = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center rounded-[1rem] px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border border-slate-200 bg-slate-950 text-white shadow-md shadow-slate-900/10"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto space-y-4 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-900">{displayName}</p>
                <p className="text-sm text-slate-500">{email}</p>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
              >
                Çıkış Yap
              </button>
            </div>
          </div>
        </aside>

        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 px-4 py-3.5 shadow-sm shadow-slate-200/50 backdrop-blur-2xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <button
                  type="button"
                  aria-label="Menüyü aç"
                  onClick={() => setIsSidebarOpen(true)}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm shadow-slate-200/70 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 lg:hidden"
                >
                  Menü
                </button>

                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    LawBridge çalışma alanı
                  </p>
                  <h1 className="truncate text-base font-semibold tracking-[-0.03em] text-slate-950 sm:text-lg">
                    {activeItem.label}
                  </h1>
                </div>
              </div>

              <div className="hidden items-center gap-3 sm:flex">
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-900">{displayName}</p>
                  <p className="text-sm text-slate-500">Hesabınız aktif</p>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            {children}
          </main>
        </div>
      </div>

      {isSidebarOpen ? (
        <button
          type="button"
          aria-label="Menüyü kapat"
          className="fixed inset-0 z-30 bg-slate-950/20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      ) : null}
    </div>
  );
}
