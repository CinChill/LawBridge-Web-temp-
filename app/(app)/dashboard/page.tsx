"use client";

import Link from "next/link";

import { useAuth } from "@/contexts/AuthContext";

type DashboardAction = {
  href: string;
  title: string;
  description: string;
  actionLabel: string;
};

type ActivityItem = {
  id: number;
  type: string;
  summary: string;
  date: string;
  status: string;
};

type OverviewItem = {
  label: string;
  value: string;
  detail: string;
};

const quickActions: DashboardAction[] = [
  {
    href: "/dashboard/panel",
    title: "Yorum Analizi",
    description:
      "Sosyal medya yorumlarını hızlıca inceleyin, hukuki riskleri yapılandırılmış şekilde görüntüleyin.",
    actionLabel: "Yeni analiz başlat",
  },
  {
    href: "/dashboard/petition",
    title: "Dilekçe Oluşturma",
    description:
      "Analiz çıktılarından hareketle düzenli ve geliştirilebilir dilekçe taslakları hazırlayın.",
    actionLabel: "Taslak oluşturmaya geç",
  },
  {
    href: "/dashboard/precedents",
    title: "Emsal Karar Araştırması",
    description:
      "Benzer uyuşmazlıklara ait kararları bularak araştırma sürecinizi aynı akış içinde sürdürün.",
    actionLabel: "Araştırmayı aç",
  },
  {
    href: "/dashboard/history",
    title: "Geçmiş Analizler",
    description:
      "Önceki değerlendirmeleri, araştırmaları ve hazırlık kayıtlarını tek yerden gözden geçirin.",
    actionLabel: "Geçmişi görüntüle",
  },
];

const recentActivities: ActivityItem[] = [
  {
    id: 1,
    type: "Yorum Analizi",
    summary: "X platformu kullanıcı yorumu için hakaret ve kişilik hakkı ihlali ön incelemesi",
    date: "14 Nisan 2026",
    status: "Tamamlandı",
  },
  {
    id: 2,
    type: "Dilekçe Taslağı",
    summary: "Hakaret içerikli paylaşım için başvuru taslağı üzerinde çalışma",
    date: "13 Nisan 2026",
    status: "Taslak",
  },
  {
    id: 3,
    type: "Emsal Araştırması",
    summary: "Sosyal medya paylaşımına dayalı manevi tazminat kararlarının kısa listesi",
    date: "11 Nisan 2026",
    status: "İnceleniyor",
  },
];

const overviewItems: OverviewItem[] = [
  {
    label: "Toplam analiz",
    value: "28",
    detail: "Son 30 gün içinde oluşturulan kayıtlar",
  },
  {
    label: "Son işlem",
    value: "Bugün",
    detail: "En son çalışma 14 Nisan 2026 tarihinde kaydedildi",
  },
  {
    label: "Kaydedilen taslaklar",
    value: "6",
    detail: "Dilekçe ve araştırma notları dahil",
  },
  {
    label: "Aktif kullanım özeti",
    value: "Düzenli",
    detail: "Bu hafta üç ayrı çalışma akışı devam ediyor",
  },
];

function StatusBadge({ status }: { status: string }) {
  const statusClassName =
    status === "Tamamlandı"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : status === "Taslak"
        ? "border-amber-200 bg-amber-50 text-amber-700"
        : "border-blue-200 bg-blue-50 text-blue-700";

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClassName}`}
    >
      {status}
    </span>
  );
}

export default function DashboardPage() {
  const { user } = useAuth();
  const firstName = user?.displayName?.split(" ")[0] ?? "Tekrar hoş geldiniz";

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_26%),linear-gradient(180deg,#f8fafc_0%,#ffffff_48%,#f8fafc_100%)] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm">
          <div className="relative px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
                  LawBridge çalışma alanı
                </p>
                <div className="space-y-2">
                  <h1 className="text-[28px] font-semibold tracking-[-0.04em] text-slate-950 sm:text-[32px] sm:leading-[1.05]">
                    {firstName}, bugün hangi hukuki iş akışıyla devam etmek istersiniz?
                  </h1>
                  <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                    Yorum analizi başlatabilir, dilekçe taslağı hazırlayabilir,
                    emsal karar araştırmasına geçebilir ve önceki çalışmalarınızı
                    aynı ekrandan takip edebilirsiniz.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/dashboard/panel"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20"
                >
                  Yeni yorum analizi
                </Link>
                <Link
                  href="/dashboard/history"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                >
                  Son çalışmaları görüntüle
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[1.5rem] border border-slate-200/80 bg-white/85 p-5 shadow-sm shadow-slate-200/70 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.22)]"
            >
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="space-y-3">
                  <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Modül
                  </span>
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                      {item.title}
                    </h2>
                    <p className="text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center text-sm font-semibold text-slate-900 transition-colors duration-200 group-hover:text-blue-700">
                  {item.actionLabel}
                </span>
              </div>
            </Link>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.8fr)]">
          <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-5 shadow-sm shadow-slate-200/60 sm:p-6">
            <div className="flex flex-col gap-2 border-b border-slate-200/80 pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  Son işlemler
                </h2>
                <p className="text-sm leading-6 text-slate-500">
                  Yakın zamanda üzerinde çalıştığınız analiz ve hazırlık kayıtları.
                </p>
              </div>
              <Link
                href="/dashboard/history"
                className="text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-blue-700"
              >
                Tüm geçmişi aç
              </Link>
            </div>

            <div className="mt-4">
              {recentActivities.length > 0 ? (
                <div className="overflow-hidden rounded-2xl border border-slate-200/80">
                  <div className="hidden grid-cols-[minmax(0,0.95fr)_minmax(0,2fr)_auto_auto] gap-4 bg-slate-50/80 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 md:grid">
                    <span>İşlem türü</span>
                    <span>Başlık / içerik özeti</span>
                    <span>Tarih</span>
                    <span>Durum</span>
                  </div>

                  <div className="divide-y divide-slate-200/80">
                    {recentActivities.map((item) => (
                      <div
                        key={item.id}
                        className="grid gap-3 px-4 py-4 transition-colors duration-200 hover:bg-slate-50/70 md:grid-cols-[minmax(0,0.95fr)_minmax(0,2fr)_auto_auto] md:items-center md:gap-4"
                      >
                        <div className="space-y-1 md:space-y-0">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">
                            İşlem türü
                          </p>
                          <p className="text-sm font-semibold text-slate-900">
                            {item.type}
                          </p>
                        </div>

                        <div className="space-y-1 md:space-y-0">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">
                            Başlık / içerik özeti
                          </p>
                          <p className="text-sm leading-6 text-slate-600">
                            {item.summary}
                          </p>
                        </div>

                        <div className="space-y-1 md:space-y-0">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">
                            Tarih
                          </p>
                          <p className="text-sm text-slate-500">{item.date}</p>
                        </div>

                        <div className="space-y-1 md:space-y-0 md:justify-self-end">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">
                            Durum
                          </p>
                          <StatusBadge status={item.status} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 px-5 py-10 text-center">
                  <p className="text-sm font-semibold text-slate-900">
                    Henüz kayıtlı bir işlem görünmüyor.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    İlk yorum analizini başlattığınızda çalışma geçmişiniz burada listelenecek.
                  </p>
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-6">
            <section className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-5 shadow-sm shadow-slate-200/60 sm:p-6">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  Çalışma alanı özeti
                </h2>
                <p className="text-sm leading-6 text-slate-500">
                  Güncel kullanım durumunuzu tek bakışta takip edin.
                </p>
              </div>

              <div className="mt-4 grid gap-3">
                {overviewItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-4"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-sm font-medium text-slate-500">
                        {item.label}
                      </p>
                      <p className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                        {item.value}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-slate-200/80 bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_100%)] p-5 shadow-sm shadow-slate-200/60 sm:p-6">
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700">
                  Hızlı başlangıç
                </p>
                <h2 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                  Yeni bir çalışma başlatmak için en kısa yol
                </h2>
                <p className="text-sm leading-6 text-slate-600">
                  Ön değerlendirme için yorum analiziyle başlayın; ardından
                  dilekçe ve emsal araştırmasını aynı akışta ilerletin.
                </p>
              </div>

              <div className="mt-4 grid gap-3">
                <Link
                  href="/dashboard/panel"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20"
                >
                  Yorum analizi aç
                </Link>
                <Link
                  href="/dashboard/petition"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                >
                  Dilekçe taslağına geç
                </Link>
              </div>
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}
