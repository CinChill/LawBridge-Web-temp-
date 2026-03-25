import Link from "next/link";

import { GoogleLoginButton } from "@/components/auth/google-login-button";
import { uiText } from "@/constants/ui-text";

export function LoginForm() {
  return (
    <form className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {uiText.auth.login.eyebrow}
          </p>
          <p className="text-sm leading-6 text-slate-500">
            {uiText.auth.login.supportText}
          </p>
        </div>

        <GoogleLoginButton />

        <div className="my-4 flex items-center gap-3">
          <span className="h-px flex-1 bg-slate-200" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            {uiText.auth.shared.dividerText}
          </span>
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="mb-1.5 block text-[13px] font-medium text-slate-500"
            >
              {uiText.auth.login.emailLabel}
            </label>
            <input
              id="email"
              type="email"
              placeholder={uiText.auth.login.emailPlaceholder}
              className="h-12 w-full rounded-[10px] border border-[#E5E7EB] bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#6366F1] focus:shadow-[0_0_0_2px_rgba(99,102,241,0.15)]"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <label
                htmlFor="password"
                className="mb-1.5 block text-[13px] font-medium text-slate-500"
              >
                {uiText.auth.login.passwordLabel}
              </label>
              <span className="text-xs font-medium text-slate-500">
                {uiText.auth.login.passwordHint}
              </span>
            </div>
            <input
              id="password"
              type="password"
              placeholder={uiText.auth.login.passwordPlaceholder}
              className="h-12 w-full rounded-[10px] border border-[#E5E7EB] bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#6366F1] focus:shadow-[0_0_0_2px_rgba(99,102,241,0.15)]"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center rounded-[10px] bg-[#0F172A] px-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1E293B] hover:shadow-xl hover:shadow-slate-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950/20 focus-visible:ring-offset-2"
      >
        {uiText.auth.login.submit}
      </button>

      <div className="flex flex-col items-center justify-center gap-2 border-t border-slate-200 pt-4 text-center sm:flex-row sm:gap-1 sm:text-left">
        <span className="text-sm text-slate-500">
          {uiText.auth.login.alternatePrompt}
        </span>
        <Link
          href="/register"
          className="text-sm font-semibold text-slate-900 transition-colors duration-200 hover:text-blue-700"
        >
          {uiText.auth.login.alternateAction}
        </Link>
      </div>
    </form>
  );
}
