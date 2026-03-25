import { uiText } from "@/constants/ui-text";

export function CompactFeatureSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950">
          {uiText.compactFeatures.title}
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {uiText.compactFeatures.items.map((feature) => (
            <div
              key={feature}
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold leading-6 text-slate-700 shadow-sm shadow-slate-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
