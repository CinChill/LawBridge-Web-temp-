import Link from "next/link";
import { uiText } from "@/constants/ui-text";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 shadow-sm shadow-slate-200/50 backdrop-blur-2xl transition-all duration-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5 lg:px-8">
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="text-lg font-semibold tracking-[-0.03em] text-slate-950 transition-all duration-200 hover:text-blue-700"
          >
            {uiText.brand.name}
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {uiText.header.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3.5 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-white hover:text-slate-950 hover:shadow-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/login"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20"
          >
            {uiText.header.actions.login}
          </Link>
          <Link
            href="/register"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
          >
            {uiText.header.actions.register}
          </Link>
        </div>
      </div>
    </header>
  );
}
