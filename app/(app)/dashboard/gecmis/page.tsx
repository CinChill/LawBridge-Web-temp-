import { WorkspacePage } from "@/components/dashboard/workspace-page";

export default function DashboardGecmisPage() {
  return (
    <WorkspacePage
      eyebrow="Geçmiş analizler"
      title="Önceki çalışmalarınıza düzenli ve hızlı şekilde geri dönün."
      description="Tamamlanan analizleri, taslak durumundaki kayıtları ve araştırma geçmişini aynı listede izleyin. Bu alan ileride filtreleme ve arama ile genişletilmeye hazırdır."
      primaryAction={{ href: "/dashboard/analizler", label: "Yeni analiz başlat" }}
      secondaryAction={{ href: "/dashboard/dilekceler", label: "Taslakları görüntüle" }}
      highlights={[
        {
          label: "Toplam kayıt",
          value: "28",
          detail: "Analiz, araştırma ve taslak çalışmalarının toplamı",
        },
        {
          label: "Bu hafta",
          value: "7 kayıt",
          detail: "Son yedi gün içinde güncellenen çalışma sayısı",
        },
        {
          label: "Taslak durum",
          value: "4 kayıt",
          detail: "Devam etmeyi bekleyen son içerikler",
        },
      ]}
      steps={[
        {
          title: "Geçmiş çalışmayı bulun",
          description: "Kayıt tarihine, işlem türüne veya içeriğin kısa özetine göre ilgili dosyaya geri dönün.",
        },
        {
          title: "Analizi yeniden değerlendirin",
          description: "Daha önce oluşturulmuş değerlendirmeyi genişletin veya bağlantılı modüllere taşıyın.",
        },
        {
          title: "Yeni sürümü kaydedin",
          description: "Güncellenen analiz veya araştırma sonucunu sonraki işlem için hazır hale getirin.",
        },
      ]}
      emptyState={{
        title: "Henüz analiz geçmişi oluşmadı",
        description: "İlk çalışma kaydınız tamamlandığında bu alanda geçmiş listesini görmeye başlayacaksınız.",
      }}
    />
  );
}
