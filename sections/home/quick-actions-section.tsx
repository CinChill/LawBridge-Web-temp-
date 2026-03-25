import Link from "next/link";
import { uiText } from "@/constants/ui-text";

export function QuickActionsSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <p className="inline-flex rounded-full border border-blue-200/80 bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700 shadow-sm shadow-blue-100/60">
            {uiText.quickActions.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
            {uiText.quickActions.title}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:leading-8">
            {uiText.quickActions.description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-3">
          {uiText.quickActions.items.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="group flex h-full cursor-pointer flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_34px_-20px_rgba(15,23,42,0.22)] transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_22px_44px_-24px_rgba(15,23,42,0.3)] sm:p-7"
            >
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-950 sm:text-[1.125rem]">
                    {action.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    {action.description}
                  </p>
                </div>

                <span className="inline-flex items-center text-sm font-semibold text-slate-900 transition-all duration-200 after:ml-2 after:text-slate-400 after:transition-transform after:duration-200 after:content-['→'] group-hover:text-blue-700 group-hover:after:translate-x-0.5 group-hover:after:text-blue-700">
                  {uiText.quickActions.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
