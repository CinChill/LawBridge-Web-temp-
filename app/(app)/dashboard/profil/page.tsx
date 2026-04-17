"use client";

import { useAuth } from "@/contexts/AuthContext";

type PreferenceItem = {
  label: string;
  value: string;
  detail: string;
};

const notificationPreferences: PreferenceItem[] = [
  {
    label: "E-posta bildirimleri",
    value: "Açık",
    detail: "Analiz tamamlandığında ve taslak güncellendiğinde özet gönderilir.",
  },
  {
    label: "Çalışma hatırlatmaları",
    value: "Haftalık",
    detail: "Devam eden taslak ve araştırmalar için düzenli hatırlatma alınır.",
  },
  {
    label: "Ürün güncellemeleri",
    value: "Seçili",
    detail: "Yeni modül ve iyileştirmeler için kısa bilgilendirme paylaşılır.",
  },
];

function ProfileCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-5 shadow-sm shadow-slate-200/60 sm:p-6">
      <div className="border-b border-slate-200/80 pb-4">
        <h2 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
          {title}
        </h2>
        <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-[1.25rem] border border-slate-200/80 bg-slate-50/80 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-sm font-medium text-slate-900">{value}</p>
    </div>
  );
}

export default function DashboardProfilPage() {
  const { user } = useAuth();

  const name = user?.displayName || "LawBridge Kullanıcısı";
  const email = user?.email || "ornek@lawbridge.com";
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm">
        <div className="relative px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-slate-950 text-lg font-semibold text-white shadow-lg shadow-slate-900/15">
                {initials || "LB"}
              </div>

              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
                  Profil ve hesap
                </p>
                <div>
                  <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-slate-950 sm:text-[32px] sm:leading-[1.05]">
                    Hesap ayarlarınızı tek yerden yönetin.
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                    Kullanıcı bilgilerinizi, iletişim tercihlerinizi ve hesap
                    güvenliğinizi mevcut çalışma düzeninizi bozmadan takip edin.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 px-5 py-4">
              <p className="text-sm text-slate-500">Aktif hesap</p>
              <p className="mt-1 text-base font-semibold text-slate-950">{name}</p>
              <p className="mt-1 text-sm text-slate-500">{email}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.85fr)]">
        <div className="space-y-6">
          <ProfileCard
            title="Kullanıcı bilgileri"
            description="Hesabınıza bağlı temel kullanıcı bilgileri bu alanda yer alır."
          >
            <div className="space-y-3">
              <InfoRow label="Ad Soyad" value={name} />
              <InfoRow label="Kullanıcı tipi" value="Hukuk profesyoneli" />
              <InfoRow label="Çalışma alanı rolü" value="Birincil kullanıcı" />
            </div>
          </ProfileCard>

          <ProfileCard
            title="Hesap bilgileri"
            description="Oturum ve üyelik durumunuza ilişkin özet bilgiler."
          >
            <div className="space-y-3">
              <InfoRow label="Kayıtlı e-posta" value={email} />
              <InfoRow label="Hesap durumu" value="Aktif" />
              <InfoRow label="Son oturum" value="16 Nisan 2026" />
            </div>
          </ProfileCard>

          <ProfileCard
            title="İletişim bilgileri"
            description="Bildirim ve hesap iletişimi için kullanılan alanlar."
          >
            <div className="space-y-3">
              <InfoRow label="İletişim e-postası" value={email} />
              <InfoRow label="Telefon" value="Henüz eklenmedi" />
              <InfoRow label="Ofis / kurum" value="Bilgi bekleniyor" />
            </div>
          </ProfileCard>
        </div>

        <div className="space-y-6">
          <ProfileCard
            title="Güvenlik / şifre"
            description="Hesap güvenliğiniz için kullanılan temel ayarlar."
          >
            <div className="space-y-3">
              <InfoRow
                label="Giriş yöntemi"
                value={
                  user?.providerData[0]?.providerId === "google.com"
                    ? "Google hesabı"
                    : "E-posta ve şifre"
                }
              />
              <InfoRow label="Şifre durumu" value="Güncelleme ekranına hazır" />
              <InfoRow label="Ek doğrulama" value="Yakında eklenecek" />
            </div>
          </ProfileCard>

          <ProfileCard
            title="Bildirim tercihleri"
            description="Çalışma akışınıza uygun bilgilendirme seçenekleri."
          >
            <div className="space-y-3">
              {notificationPreferences.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.25rem] border border-slate-200/80 bg-slate-50/80 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-slate-900">{item.label}</p>
                    <span className="inline-flex rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
                      {item.value}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </ProfileCard>
        </div>
      </div>
    </div>
  );
}
