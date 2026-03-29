"use client";

import { useState } from "react";
import Link from "next/link";

import { uiText } from "@/constants/ui-text";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 shadow-sm shadow-slate-200/50 backdrop-blur-2xl transition-all duration-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5 lg:px-8">
        <div className="flex min-w-0 items-center">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-lg font-semibold tracking-[-0.03em] text-slate-950 transition-all duration-200 hover:text-blue-700"
          >
            {uiText.brand.name}
          </Link>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <nav aria-label="Birincil gezinme" className="flex items-center gap-1">
            {uiText.header.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3.5 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-white hover:text-slate-950 hover:shadow-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/login"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
          >
            {uiText.header.actions.login}
          </Link>
          <Link
            href="/register"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20"
          >
            {uiText.header.actions.register}
          </Link>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm shadow-slate-200/70 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
          >
            <span className="sr-only">
              {isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            </span>
            <span className="flex w-5 flex-col items-center justify-center gap-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-slate-200/70 bg-white/95 shadow-sm shadow-slate-200/50 backdrop-blur-2xl md:hidden">
          <nav
            id="mobile-navigation"
            aria-label="Mobil gezinme"
            className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4"
          >
            {uiText.header.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-3.5 py-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2">
              <Link
                href="/login"
                onClick={closeMenu}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/70 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
              >
                {uiText.header.actions.login}
              </Link>
              <Link
                href="/register"
                onClick={closeMenu}
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-900/15 transition-all duration-200 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20"
              >
                {uiText.header.actions.register}
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
