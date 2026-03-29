import Link from "next/link";

import { uiText } from "@/constants/ui-text";

export function CompactFeatureSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950">
            {uiText.compactFeatures.title}
          </h2>
          <p className="text-base leading-7 text-slate-600 sm:leading-8">
            {uiText.compactFeatures.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {uiText.compactFeatures.items.map((feature, index) => (
            <article
              key={feature.title}
              className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-6 shadow-[0_12px_34px_-20px_rgba(15,23,42,0.22)] transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_22px_44px_-24px_rgba(15,23,42,0.3)] sm:p-7"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-200/80 bg-blue-50 text-sm font-semibold text-blue-700 shadow-sm shadow-blue-100/60">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-8 space-y-3">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-8 pt-2">
                  <Link
                    href={feature.href}
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                  >
                    {uiText.compactFeatures.cta}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
