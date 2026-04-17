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
    href: "/dashboard/analizler",
    title: "Yorum Analizi",
    description:
      "Sosyal medya yorumlarını hızlıca inceleyin, hukuki riskleri yapılandırılmış şekilde görüntüleyin.",
    actionLabel: "Yeni analiz başlat",
  },
  {
    href: "/dashboard/dilekceler",
    title: "Dilekçe Oluşturma",
    description:
      "Analiz çıktılarından hareketle düzenli ve geliştirilebilir dilekçe taslakları hazırlayın.",
    actionLabel: "Taslak oluşturmaya geç",
  },
  {
    href: "/dashboard/emsal",
    title: "Emsal Karar Araştırması",
    description:
      "Benzer uyuşmazlıklara ait kararları bularak araştırma sürecinizi aynı akış içinde sürdürün.",
    actionLabel: "Araştırmayı aç",
  },
  {
    href: "/dashboard/gecmis",
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
    label: "Son işlem tarihi",
    value: "14 Nisan 2026",
    detail: "En son çalışma yorum analizi modülünde kaydedildi",
  },
  {
    label: "Kayıtlı taslaklar",
    value: "6",
    detail: "Dilekçe ve araştırma notları dahil",
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
  const firstName = user?.displayName?.split(" ")[0] ?? "Merhaba";

  return (
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
                <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-slate-950 sm:text-[32px] sm:leading-[1.05]">
                  {firstName}, bugün hangi hukuki iş akışıyla devam etmek istersiniz?
                </h2>
                <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                  Yeni bir yorum analizi başlatabilir, dilekçe hazırlayabilir,
                  emsal karar araştırmasına geçebilir ve önceki çalışmalarınızı
                  aynı çalışma alanından takip edebilirsiniz.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard/analizler"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20"
              >
                Yeni yorum analizi
              </Link>
              <Link
                href="/dashboard/gecmis"
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
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                    {item.title}
                  </h3>
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
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                Son işlemler
              </h3>
              <p className="text-sm leading-6 text-slate-500">
                Yakın zamanda üzerinde çalıştığınız analiz ve hazırlık kayıtları.
              </p>
            </div>
            <Link
              href="/dashboard/gecmis"
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
              <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50/70 px-5 py-10 text-center">
                <h4 className="text-base font-semibold text-slate-950">
                  Henüz kayıtlı işlem bulunmuyor
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  İlk yorum analizinizi başlattığınızda çalışma geçmişiniz burada
                  listelenecek.
                </p>
              </div>
            )}
          </div>
        </div>

        <aside className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-5 shadow-sm shadow-slate-200/60 sm:p-6">
          <div className="border-b border-slate-200/80 pb-4">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
              Çalışma özeti
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Kullanım durumunuzu gürültüsüz bir özetle izleyin.
            </p>
          </div>

          <div className="mt-4 space-y-3">
            {overviewItems.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.25rem] border border-slate-200/80 bg-slate-50/80 p-4"
              >
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
