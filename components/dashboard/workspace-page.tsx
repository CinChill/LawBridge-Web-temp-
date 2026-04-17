import Link from "next/link";

type WorkspacePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: {
    href: string;
    label: string;
  };
  secondaryAction?: {
    href: string;
    label: string;
  };
  highlights: Array<{
    label: string;
    value: string;
    detail: string;
  }>;
  steps: Array<{
    title: string;
    description: string;
  }>;
  emptyState: {
    title: string;
    description: string;
  };
};

export function WorkspacePage({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  highlights,
  steps,
  emptyState,
}: WorkspacePageProps) {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm">
        <div className="relative px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
                {eyebrow}
              </p>
              <div className="space-y-2">
                <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-slate-950 sm:text-[32px] sm:leading-[1.05]">
                  {title}
                </h2>
                <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                  {description}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryAction.href}
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20"
              >
                {primaryAction.label}
              </Link>

              {secondaryAction ? (
                <Link
                  href={secondaryAction.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                >
                  {secondaryAction.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.label}
            className="rounded-[1.5rem] border border-slate-200/80 bg-white/85 p-5 shadow-sm shadow-slate-200/70"
          >
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-3 text-[28px] font-semibold tracking-[-0.04em] text-slate-950">
              {item.value}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)]">
        <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-5 shadow-sm shadow-slate-200/60 sm:p-6">
          <div className="border-b border-slate-200/80 pb-4">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
              Çalışma akışı
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Bu modül içinde ilerlerken kullanabileceğiniz temel adımlar.
            </p>
          </div>

          <div className="mt-4 space-y-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[1.25rem] border border-slate-200/80 bg-slate-50/80 p-4"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Adım {index + 1}
                </p>
                <h4 className="mt-2 text-base font-semibold tracking-[-0.02em] text-slate-950">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-5 shadow-sm shadow-slate-200/60 sm:p-6">
          <div className="border-b border-slate-200/80 pb-4">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
              Bekleyen içerik
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Veri bağlanana kadar bu alan modül durumunu yalın biçimde gösterir.
            </p>
          </div>

          <div className="mt-4 rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50/70 px-5 py-8 text-center">
            <h4 className="text-base font-semibold text-slate-950">{emptyState.title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {emptyState.description}
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
