import { WorkspacePage } from "@/components/dashboard/workspace-page";

export default function DashboardDilekcelerPage() {
  return (
    <WorkspacePage
      eyebrow="Dilekçeler"
      title="Analiz çıktılarını düzenli bir dilekçe hazırlık akışına dönüştürün."
      description="Hazırladığınız analizlerden hareketle dilekçe taslakları oluşturun, kayıtlı metinleri takip edin ve süreç notlarını aynı düzen içinde yönetin."
      primaryAction={{ href: "/dashboard/analizler", label: "Analizden taslak oluştur" }}
      secondaryAction={{ href: "/dashboard/gecmis", label: "Önceki taslakları aç" }}
      highlights={[
        {
          label: "Kayıtlı taslaklar",
          value: "6",
          detail: "Çalışılmaya devam eden dilekçe taslakları",
        },
        {
          label: "Hazır içerik",
          value: "3 bölüm",
          detail: "Olay özeti, talep ve delil notları için yapılandırılmış alan",
        },
        {
          label: "Son düzenleme",
          value: "Dün",
          detail: "En son taslak kaydı bir gün önce güncellendi",
        },
      ]}
      steps={[
        {
          title: "Analiz sonucunu seçin",
          description: "Dilekçe taslağına temel olacak yorumu veya değerlendirme çıktısını belirleyin.",
        },
        {
          title: "Taslak yapısını oluşturun",
          description: "Başvuru konusu, olay anlatımı ve talep başlıklarını çalışma alanına yerleştirin.",
        },
        {
          title: "Son kontrol için kaydedin",
          description: "Taslağı ekip içi değerlendirme veya sonraki revizyon için kayıt altına alın.",
        },
      ]}
      emptyState={{
        title: "Henüz açık bir dilekçe taslağı yok",
        description: "Analiz verisinden yeni bir taslak başlattığınızda burada son çalışmanızı göreceksiniz.",
      }}
    />
  );
}
