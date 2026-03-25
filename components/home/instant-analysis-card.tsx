"use client";

import { useState } from "react";
import { uiText } from "@/constants/ui-text";

export function InstantAnalysisCard() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleFileChange = () => {
    // File handling will be added when the upload flow is defined.
  };

  const handleAnalyze = () => {
    if (!text.trim()) {
      return;
    }

    setLoading(true);
    setResult(null);

    window.setTimeout(() => {
      setResult(uiText.instantAnalysis.result);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/95 p-6 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.28)] ring-1 ring-white/70 backdrop-blur sm:p-7 lg:p-8">
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(59,130,246,0.12),rgba(255,255,255,0))]" />
      <div className="relative space-y-6">
        <div className="space-y-3">
          <span className="inline-flex rounded-full border border-blue-200/70 bg-blue-50/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700">
            {uiText.instantAnalysis.eyebrow}
          </span>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-[1.75rem]">
            {uiText.instantAnalysis.title}
          </h2>
          <p className="max-w-lg text-sm leading-6 text-slate-600 sm:text-[15px]">
            {uiText.instantAnalysis.description}
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 sm:p-5">
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder={uiText.instantAnalysis.placeholder}
            className="min-h-[168px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-slate-900 shadow-inner shadow-slate-100 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15"
          />

          <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm shadow-slate-200/60 transition-all duration-200 hover:border-slate-300 hover:shadow-md">
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-xl file:border file:border-slate-200 file:bg-slate-50 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-slate-700 file:transition-all file:duration-200 hover:file:border-slate-300 hover:file:bg-slate-100"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full rounded-2xl bg-slate-950 px-4 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none"
        >
          {loading
            ? uiText.instantAnalysis.submitting
            : uiText.instantAnalysis.submit}
        </button>

        {result ? (
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 text-sm leading-6 text-slate-700 shadow-sm shadow-emerald-100/50">
            {result}
          </div>
        ) : null}
      </div>
    </div>
  );
}
