import { uiText } from "@/constants/ui-text";

export default function DashboardPanelPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-8">
        <h1 className="text-2xl font-semibold text-slate-900">
          {uiText.dashboard.panel.title}
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          {uiText.dashboard.panel.description}
        </p>
      </div>
    </main>
  );
}
