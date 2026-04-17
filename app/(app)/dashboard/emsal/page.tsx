import { WorkspacePage } from "@/components/dashboard/workspace-page";

export default function DashboardEmsalPage() {
  return (
    <WorkspacePage
      eyebrow="Emsal kararlar"
      title="Benzer uyuşmazlıklar için araştırma sürecinizi tek yerde toplayın."
      description="Yorum analiziyle ilişkili kararları, dava başlıklarını ve araştırma notlarını düzenli biçimde takip edin. Bu alan backend entegrasyonu için sonuç listelerine hazır yapıdadır."
      primaryAction={{ href: "/dashboard/analizler", label: "Analizden araştırmaya geç" }}
      secondaryAction={{ href: "/dashboard/gecmis", label: "Araştırma geçmişini aç" }}
      highlights={[
        {
          label: "Kaydedilen araştırma",
          value: "9",
          detail: "Kısa listeye alınmış emsal karar ve not kayıtları",
        },
        {
          label: "Aktif konu",
          value: "Hakaret",
          detail: "Bu hafta en sık incelenen araştırma başlığı",
        },
        {
          label: "Son eşleştirme",
          value: "2 gün önce",
          detail: "Benzer karar araştırması en son iki gün önce güncellendi",
        },
      ]}
      steps={[
        {
          title: "Uyuşmazlık başlığını netleştirin",
          description: "Yorum analizi sonucundaki temel hukuki iddiayı araştırma ekseni olarak belirleyin.",
        },
        {
          title: "Karar notlarını gruplayın",
          description: "Benzer dosyaları kısa açıklamalarla sınıflandırarak tekrar kullanıma uygun hale getirin.",
        },
        {
          title: "Dilekçe akışına aktarın",
          description: "Araştırma sonucunu ihtiyaç duyduğunuz anda dilekçe taslağına veya analiz notlarına taşıyın.",
        },
      ]}
      emptyState={{
        title: "Henüz görüntülenecek emsal kararı yok",
        description: "Araştırma verileri bağlandığında bu alanda son eşleşmelerinizi listeleyebileceksiniz.",
      }}
    />
  );
}
