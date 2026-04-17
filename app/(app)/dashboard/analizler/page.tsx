import { WorkspacePage } from "@/components/dashboard/workspace-page";

export default function DashboardAnalizlerPage() {
  return (
    <WorkspacePage
      eyebrow="Yorum analizi"
      title="Yeni bir yorumu hukuki açıdan değerlendirmeye başlayın."
      description="Yorum metnini, olay bağlamını ve hedeflenen riski aynı çalışma düzeni içinde ele alın. Bu alan analiz sonucu, risk seviyesi ve sonraki adımlar için hazırlandı."
      primaryAction={{ href: "/dashboard", label: "Yeni analiz oluştur" }}
      secondaryAction={{ href: "/dashboard/gecmis", label: "Geçmiş analizleri aç" }}
      highlights={[
        {
          label: "Hazır şablonlar",
          value: "4",
          detail: "Sık kullanılan sosyal medya yorum senaryoları için başlangıç yapıları",
        },
        {
          label: "Bekleyen inceleme",
          value: "3 kayıt",
          detail: "Detaylandırılmayı bekleyen son analiz girişleri",
        },
        {
          label: "Son güncelleme",
          value: "Bugün",
          detail: "Analiz akışınız en son bugün üzerinde çalışıldı",
        },
      ]}
      steps={[
        {
          title: "Yorum metnini ve bağlamı ekleyin",
          description: "İlgili paylaşımı, yorum metnini ve gerekiyorsa olayın kısa özetini ekleyerek ilk analizi başlatın.",
        },
        {
          title: "Risk başlıklarını gözden geçirin",
          description: "Hakaret, kişilik hakkı ihlali ve benzeri değerlendirme başlıklarını yapılandırılmış biçimde inceleyin.",
        },
        {
          title: "Sonraki iş akışına geçin",
          description: "Gerekirse aynı analizden dilekçe taslağına veya emsal karar araştırmasına devam edin.",
        },
      ]}
      emptyState={{
        title: "Henüz açık analiz bulunmuyor",
        description: "Yeni bir yorum eklediğinizde aktif çalışma kaydı burada görüntülenecek.",
      }}
    />
  );
}
