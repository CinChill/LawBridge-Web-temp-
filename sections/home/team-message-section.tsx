import { uiText } from "@/constants/ui-text";

export function TeamMessageSection() {
  return (
    <section
      id="team-message"
      className="scroll-mt-24 border-t border-slate-200/80 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl space-y-5">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950">
            {uiText.teamMessage.title}
          </h2>
          <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {uiText.teamMessage.description}
          </p>
        </div>
      </div>
    </section>
  );
}
