import type { ReactNode } from "react";
import Link from "next/link";

import { uiText } from "@/constants/ui-text";

type AuthShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function AuthShell({ title, description, children }: AuthShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.06),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#ffffff_48%,#f8fafc_100%)] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm lg:grid-cols-[minmax(0,1fr)_minmax(420px,480px)]">
        <section className="relative flex flex-col justify-center border-b border-slate-200/80 px-5 py-6 sm:px-8 sm:py-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm shadow-slate-200/60 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
              LB
            </span>
            {uiText.brand.name}
          </Link>

          <div className="mt-8 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
              {uiText.auth.shell.badge}
            </p>
            <h1 className="max-w-[12ch] text-[28px] font-semibold tracking-[-0.04em] text-slate-950 sm:text-[32px] sm:leading-[1.05]">
              {title}
            </h1>
            <p className="max-w-lg text-[14px] leading-6 text-slate-500">
              {description}
            </p>
          </div>

          <div className="mt-8">{children}</div>
        </section>

        <aside className="relative flex flex-col justify-between bg-[linear-gradient(135deg,#F8FAFC,#EEF2FF)] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(15,23,42,0.08),_transparent_34%)]" />
          <div className="relative mx-auto flex h-full w-full max-w-[480px] flex-col justify-between gap-8">
            <div className="space-y-8">
              <div className="inline-flex w-fit rounded-full border border-white/80 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700 shadow-sm backdrop-blur">
                {uiText.auth.shell.panelEyebrow}
              </div>

              <div className="space-y-4">
                <h2 className="max-w-sm text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-[2rem] sm:leading-[1.08]">
                  {uiText.auth.shell.asideTitle}
                </h2>
                <p className="max-w-md text-[14px] leading-6 text-slate-600">
                  {uiText.auth.shell.asideDescription}
                </p>
              </div>

              <div className="grid gap-3">
                {uiText.auth.shell.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-xl border border-white/90 bg-white px-4 py-[14px] shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                      ✓
                    </span>
                    <p className="text-sm leading-6 text-slate-700">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-slate-950 p-5 text-white shadow-[0_10px_30px_rgba(15,23,42,0.25)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                      {uiText.auth.shell.signalTitle}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {uiText.auth.shell.signalDescription}
                    </p>
                  </div>
                  <div className="grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(96,165,250,0.15)]">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {uiText.auth.shell.stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/90 bg-white px-4 py-4 shadow-sm"
                >
                  <p className="text-xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-2xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
