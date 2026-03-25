import { uiText } from "@/constants/ui-text";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 text-sm text-slate-500/70 lg:px-8">
        <p>{uiText.footer.summary}</p>
      </div>
    </footer>
  );
}
