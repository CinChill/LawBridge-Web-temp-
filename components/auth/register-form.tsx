"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { GoogleLoginButton } from "@/components/auth/google-login-button";
import { uiText } from "@/constants/ui-text";

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      router.replace("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {uiText.auth.register.eyebrow}
          </p>
          <p className="text-sm leading-6 text-slate-500">
            {uiText.auth.register.supportText}
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
              htmlFor="name"
              className="mb-1.5 block text-[13px] font-medium text-slate-500"
            >
              {uiText.auth.register.nameLabel}
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder={uiText.auth.register.namePlaceholder}
              className="h-12 w-full rounded-[10px] border border-[#E5E7EB] bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#6366F1] focus:shadow-[0_0_0_2px_rgba(99,102,241,0.15)]"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="register-email"
              className="mb-1.5 block text-[13px] font-medium text-slate-500"
            >
              {uiText.auth.register.emailLabel}
            </label>
            <input
              id="register-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={uiText.auth.register.emailPlaceholder}
              className="h-12 w-full rounded-[10px] border border-[#E5E7EB] bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#6366F1] focus:shadow-[0_0_0_2px_rgba(99,102,241,0.15)]"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="register-password"
              className="mb-1.5 block text-[13px] font-medium text-slate-500"
            >
              {uiText.auth.register.passwordLabel}
            </label>
            <input
              id="register-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder={uiText.auth.register.passwordPlaceholder}
              className="h-12 w-full rounded-[10px] border border-[#E5E7EB] bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#6366F1] focus:shadow-[0_0_0_2px_rgba(99,102,241,0.15)]"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center rounded-[10px] bg-[#0F172A] px-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1E293B] hover:shadow-xl hover:shadow-slate-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950/20 focus-visible:ring-offset-2"
      >
        {uiText.auth.register.submit}
      </button>

      <div className="flex flex-col items-center justify-center gap-2 border-t border-slate-200 pt-4 text-center sm:flex-row sm:gap-1 sm:text-left">
        <span className="text-sm text-slate-500">
          {uiText.auth.register.alternatePrompt}
        </span>
        <Link
          href="/login"
          className="text-sm font-semibold text-slate-900 transition-colors duration-200 hover:text-blue-700"
        >
          {uiText.auth.register.alternateAction}
        </Link>
      </div>
    </form>
  );
}
