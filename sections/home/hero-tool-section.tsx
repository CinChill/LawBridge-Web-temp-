import Link from "next/link";

import { InstantAnalysisCard } from "@/components/home/instant-analysis-card";
import { uiText } from "@/constants/ui-text";

export function HeroToolSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_34%),linear-gradient(180deg,#f8fafc_0%,#ffffff_62%,#f8fafc_100%)]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-14 sm:py-18 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-14 lg:px-8 lg:py-20">
        <div className="max-w-2xl space-y-8 self-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-blue-200/80 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700 shadow-sm shadow-blue-100/60 backdrop-blur">
              {uiText.hero.eyebrow}
            </p>
            <h1 className="max-w-[12ch] text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl sm:leading-[1.02] lg:text-[3.75rem] lg:leading-[1.02]">
              {uiText.hero.title}
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {uiText.hero.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <Link
              href="#analysis"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950/20 focus-visible:ring-offset-2"
            >
              {uiText.hero.primaryCta}
            </Link>
            <Link
              href="/dashboard/history"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white/75 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:text-slate-950 hover:shadow-md"
            >
              {uiText.hero.secondaryCta}
            </Link>
          </div>

          <div className="grid gap-3 pt-1 text-sm text-slate-600 sm:grid-cols-2">
            {uiText.hero.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-4 leading-6 shadow-sm shadow-slate-200/60 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <section
          id="analysis"
          className="relative w-full scroll-mt-24 self-center lg:pl-2"
        >
          <InstantAnalysisCard />
        </section>
      </div>
    </section>
  );
}
