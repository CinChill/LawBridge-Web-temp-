import { uiText } from "@/constants/ui-text";

export function TrustStatsSection() {
  return (
    <section className="border-y border-slate-200/80 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-sm text-3xl font-semibold tracking-[-0.03em] text-slate-950">
            {uiText.trustStats.title}
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:gap-5">
          {uiText.trustStats.items.map((stat) => (
            <div
              key={stat}
              className="relative min-h-[132px] rounded-3xl border border-slate-200/80 bg-white/90 p-6 pl-16 text-sm font-semibold leading-6 text-slate-700 shadow-[0_12px_36px_-24px_rgba(15,23,42,0.3)] backdrop-blur transition-all duration-200 before:absolute before:left-6 before:top-6 before:h-6 before:w-6 before:rounded-full before:border before:border-blue-200 before:bg-blue-50 before:shadow-[inset_0_0_0_6px_rgba(191,219,254,0.8)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_-24px_rgba(15,23,42,0.34)]"
            >
              {stat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
