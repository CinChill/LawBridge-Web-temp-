# LawBridge Web

## Project Overview

LawBridge Web, sosyal medya yorumlarının hukuki açıdan değerlendirilmesi etrafında kurgulanan bir Next.js istemci uygulamasıdır. Mevcut kod tabanı; landing page, authentication ekranları ve dashboard altındaki modül giriş sayfalarını içerir.

Uygulamanın hedef kapsamı, yorum analizi, geçmiş analizler, analiz paneli, dilekçe üretimi ve emsal karar araştırmasını tek bir arayüz altında toplamak olarak görünüyor. Ancak repository’nin şu anki durumu ağırlıklı olarak frontend/UI seviyesindedir:

- Landing page ve navigation uygulanmış durumda
- Login / register akışı Firebase Authentication ile temel seviyede bağlı
- Google ile giriş butonu mevcut, fakat henüz gerçek OAuth entegrasyonu yok
- Dashboard route’ları oluşturulmuş, fakat içerikleri çoğunlukla placeholder açıklama ekranı
- Yorum analizi kartı etkileşimli, ancak sonuç üretimi `setTimeout` tabanlı mock akış
- Kod tabanında backend API route, server action veya veri persistansı bulunmuyor

## Tech Stack

| Teknoloji | Rolü |
| --- | --- |
| Next.js 16 | Uygulama çatısı, App Router, production export yapılandırması |
| React 19 | Bileşen tabanlı UI katmanı |
| TypeScript 5 | Tip güvenliği ve editör desteği |
| Tailwind CSS 4 | Tüm görsel stil katmanı; utility-first yaklaşım |
| Firebase Auth | E-posta/şifre ile login ve register işlemleri için istemci tarafı kimlik doğrulama |
| `next/font` | Geist ve Geist Mono fontlarının yüklenmesi |
| ESLint 9 + `eslint-config-next` | Kod kalitesi ve Next.js uyumluluk kontrolleri |

Ek notlar:

- Paket yöneticisi `npm` ve lock dosyası `package-lock.json`
- `next.config.ts` içinde `output: "export"` kullanılıyor; bu, uygulamanın static export hedeflediğini gösterir
- `basePath` ve `assetPrefix`, production ortamında `/LawBridge-Web` olarak ayarlanmış

## Project Structure

Gerçek repo yapısı özetle aşağıdaki gibi:

```text
lawbridge-web/
├── app/
│   ├── (app)/
│   │   └── dashboard/
│   │       ├── history/page.tsx
│   │       ├── panel/page.tsx
│   │       ├── petition/page.tsx
│   │       ├── precedents/page.tsx
│   │       └── page.tsx
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── auth/
│   │   ├── auth-shell.tsx
│   │   ├── google-login-button.tsx
│   │   ├── login-form.tsx
│   │   └── register-form.tsx
│   ├── home/
│   │   └── instant-analysis-card.tsx
│   └── layout/
│       ├── footer.tsx
│       └── header.tsx
├── constants/
│   └── ui-text.ts
├── contexts/
│   └── AuthContext.tsx
├── lib/
│   └── firebase.ts
├── public/
├── sections/
│   └── home/
│       ├── about-section.tsx
│       ├── compact-feature-section.tsx
│       ├── hero-tool-section.tsx
│       ├── quick-actions-section.tsx
│       ├── team-message-section.tsx
│       └── trust-stats-section.tsx
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

### `app/`

Next.js App Router giriş noktasıdır.

- `app/layout.tsx`: Global layout. Font yükleme burada yapılır ve tüm uygulama `AuthProvider` ile sarılır.
- `app/page.tsx`: Landing page kompozisyonu. Header, ana bölümler ve footer burada birleştirilir.
- `app/(auth)/...`: Login ve register sayfaları için route group.
- `app/(app)/dashboard/...`: Uygulama içi modül giriş sayfaları için route group.
- `app/globals.css`: Tailwind import’u, tema değişkenleri ve global stil tanımları.

### `components/`

Yeniden kullanılabilir UI bileşenleri burada tutuluyor.

- `components/auth/`: Kimlik doğrulama ekranlarında kullanılan form ve kabuk bileşenleri
- `components/layout/`: Üst gezinme ve footer
- `components/home/`: Landing page içindeki etkileşimli, daha küçük ölçekli bileşenler

### `sections/`

Landing page, section bazlı parçalanmış durumda. Sayfa bileşeninden farklı olarak bunlar tek bir ekranın içerik bloklarıdır. Ana sayfanın okunabilirliğini artırıyor ve her bölümü bağımsız çalışılabilir hale getiriyor.

### `constants/`

- `constants/ui-text.ts`: Metinlerin merkezi kaynağı. Navigasyon etiketleri, landing page içerikleri, auth ekran metinleri ve dashboard placeholder açıklamaları burada tutuluyor.

Bu dosya şu an uygulamadaki içerik katmanının büyük bölümünü taşıyor. Yeni bir metin, CTA veya dashboard başlığı değişecekse ilk bakılacak dosyalardan biri burası.

### `contexts/`

- `contexts/AuthContext.tsx`: Firebase auth durumunu global olarak dinleyen React context.

### `lib/`

- `lib/firebase.ts`: Firebase app ve auth örneğinin başlatıldığı yardımcı modül.

### `public/`

Şu an standart statik asset dosyaları (`globe.svg`, `next.svg`, `vercel.svg`, vb.) var. Ürünle doğrudan ilişkili özel medya varlıkları henüz belirgin değil.

### Dizinler Bulunmayan Alanlar

Bu repository’de şu an için ayrı bir `services/`, `hooks/`, `types/`, `api/` veya `docs/` klasörü bulunmuyor. Veri erişimi ve auth işlemleri doğrudan bileşenler ile `lib/firebase.ts` / `contexts/AuthContext.tsx` etrafında organize edilmiş.

## Routing / Page Map

App Router’a göre mevcut route’lar:

| Route | Kaynak dosya | Amaç |
| --- | --- | --- |
| `/` | `app/page.tsx` | Landing page. Ürün tanıtımı, hızlı aksiyonlar ve mock analiz kartı burada |
| `/login` | `app/(auth)/login/page.tsx` | Kullanıcı giriş ekranı |
| `/register` | `app/(auth)/register/page.tsx` | Kullanıcı kayıt ekranı |
| `/dashboard` | `app/(app)/dashboard/page.tsx` | Dashboard ana giriş ekranı, şu anda placeholder |
| `/dashboard/history` | `app/(app)/dashboard/history/page.tsx` | Geçmiş analizler modül girişi, placeholder |
| `/dashboard/panel` | `app/(app)/dashboard/panel/page.tsx` | Analiz paneli girişi, placeholder |
| `/dashboard/petition` | `app/(app)/dashboard/petition/page.tsx` | Dilekçe oluşturma girişi, placeholder |
| `/dashboard/precedents` | `app/(app)/dashboard/precedents/page.tsx` | Emsal karar araştırma girişi, placeholder |

Notlar:

- `(auth)` ve `(app)` route group’ları URL’ye yansımaz; sadece klasör organizasyonu amaçlıdır.
- Dashboard route’ları şu an korumalı değil. Auth kontrolü olsa da route guard uygulanmıyor.

## Component Documentation

### Layout Components

#### `Header`

Dosya: `components/layout/header.tsx`

- Landing page üst gezinmesi
- Mobil menü aç/kapat state’ini local `useState` ile yönetiyor
- `uiText.header.navigation` içeriğini kullanıyor
- Login ve register CTA’larını içeriyor

#### `Footer`

Dosya: `components/layout/footer.tsx`

- Landing page alt bilgi alanı
- İçeriği `uiText.footer.summary` üzerinden geliyor

### Home / Landing Components

#### `HeroToolSection`

Dosya: `sections/home/hero-tool-section.tsx`

- Ana hero alanı
- Sol tarafta ürün mesajı ve CTA’lar, sağ tarafta `InstantAnalysisCard`
- `#analysis` anchor hedefini tanımlar

#### `InstantAnalysisCard`

Dosya: `components/home/instant-analysis-card.tsx`

- Metin girişi, dosya input’u ve “analiz” butonunu içerir
- `text`, `loading`, `result` state’leri local olarak tutulur
- Dosya yükleme akışı henüz boş fonksiyon (`handleFileChange`)
- Analiz akışı gerçek API çağrısı yapmaz; `setTimeout` sonrası sabit sonuç gösterir

#### `CompactFeatureSection`

Dosya: `sections/home/compact-feature-section.tsx`

- Dört çözüm modülünü kartlar halinde gösterir
- Kart linkleri landing içi anchor veya dashboard route’larına yönlenir

#### `QuickActionsSection`

Dosya: `sections/home/quick-actions-section.tsx`

- Hızlı erişim kartları sunar
- Uygulamadaki modül giriş route’larını öne çıkarır

#### `TrustStatsSection`

Dosya: `sections/home/trust-stats-section.tsx`

- Statik güven göstergeleri listesi
- Veri kaynağı gerçek backend değil, `uiText` sabitleri

#### `AboutSection`

Dosya: `sections/home/about-section.tsx`

- `#about` anchor hedefi
- Ürün amacı ve bağlamı için statik açıklama alanı

#### `TeamMessageSection`

Dosya: `sections/home/team-message-section.tsx`

- `#team-message` anchor hedefi
- Ekip mesajı / ürün vizyonu metni

### Authentication Components

#### `AuthShell`

Dosya: `components/auth/auth-shell.tsx`

- Login ve register sayfaları için ortak iki kolonlu shell
- Props:
  - `title`
  - `description`
  - `children`
- Auth sayfalarında görsel tutarlılığı sağlar

#### `LoginForm`

Dosya: `components/auth/login-form.tsx`

- E-posta / şifre ile Firebase login formu
- `signInWithEmailAndPassword` kullanır
- Başarılı girişte `router.push("/")` ile ana sayfaya döner
- Hata durumunda sadece `console.error` çalışır; kullanıcıya hata UI’sı gösterilmez

#### `RegisterForm`

Dosya: `components/auth/register-form.tsx`

- İsim, e-posta ve şifre ile kullanıcı oluşturur
- `createUserWithEmailAndPassword` sonrası `updateProfile` ile `displayName` ayarlar
- Başarılı kayıt sonrası `router.push("/")`
- Form validasyonu temel HTML `required` seviyesindedir

#### `GoogleLoginButton`

Dosya: `components/auth/google-login-button.tsx`

- UI olarak mevcut
- Tıklama durumunda yalnızca `console.log("Google login clicked")` çalışır
- Gerçek Google sign-in henüz uygulanmamış

## Data / State / Service Flow

### UI State

State yönetimi şu an tamamen component-local veya context tabanlı:

- `Header`: mobil menü durumu için local state
- `InstantAnalysisCard`: analiz form state’i local
- `LoginForm` / `RegisterForm`: form alanları local state
- `AuthContext`: global auth user ve loading state

Bu repository’de Redux, Zustand, React Query veya ayrı bir global store bulunmuyor.

### Service Flow

#### Firebase

`lib/firebase.ts`, environment variable’lardan Firebase config alır ve singleton bir Firebase app başlatır. Buradan `auth` export edilir.

#### Auth Context

`contexts/AuthContext.tsx` içinde:

- `onAuthStateChanged(auth, callback)` ile auth değişiklikleri dinlenir
- `user` ve `loading` global context’e yazılır
- `logout` helper’ı `signOut(auth)` çağırır

#### Form to Service Flow

Login akışı:

1. Kullanıcı `LoginForm` üzerinden e-posta/şifre girer
2. `handleSubmit` içinde `signInWithEmailAndPassword(auth, email, password)` çağrılır
3. Firebase başarılı dönerse kullanıcı `/` route’una yönlendirilir

Register akışı:

1. Kullanıcı `RegisterForm` üzerinden ad, e-posta ve şifre girer
2. `createUserWithEmailAndPassword` çağrılır
3. Sonrasında `updateProfile` ile `displayName` yazılır
4. Başarılı işlem sonrası kullanıcı `/` route’una yönlendirilir

### API Integration Status

- Kod tabanında `fetch`, `axios`, route handler (`route.ts`) veya server action kullanılmıyor
- `.env.local` içinde `NEXT_PUBLIC_API_BASE_URL` tanımlı, ancak mevcut kaynak kodda kullanılmıyor
- Analiz, geçmiş, panel, dilekçe ve emsal karar modülleri için backend entegrasyonu henüz yapılmamış

## Authentication Flow

Auth ile ilişkili dosyalar:

- `lib/firebase.ts`
- `contexts/AuthContext.tsx`
- `components/auth/login-form.tsx`
- `components/auth/register-form.tsx`
- `components/auth/google-login-button.tsx`
- `app/(auth)/login/page.tsx`
- `app/(auth)/register/page.tsx`
- `app/layout.tsx`

Mevcut auth davranışı:

- Firebase app başlatılıyor
- Global auth state dinleniyor
- Email/password login ve register formu çalışacak şekilde bağlı
- Register sonrası `displayName` set ediliyor
- Logout helper’ı context içinde tanımlı

Eksik veya tamamlanmamış alanlar:

- Protected route mantığı yok
- Kullanıcı giriş yaptıysa `/login` veya `/register` sayfalarından yönlendirme yok
- Dashboard sayfalarında auth zorunluluğu yok
- Kullanıcı profil bilgisi hiçbir sayfada kullanılmıyor
- Google sign-in UI-only
- Hata ve loading durumları kullanıcıya görünür şekilde işlenmiyor

## Key Files Explained

Yeni bir geliştirici için ilk bakılması gereken dosyalar:

| Dosya | Neden önemli |
| --- | --- |
| `app/page.tsx` | Landing page’in hangi section’lardan oluştuğunu hızlıca gösterir |
| `app/layout.tsx` | Global provider ve font setup burada |
| `constants/ui-text.ts` | Uygulamadaki içerik katmanının merkezidir |
| `contexts/AuthContext.tsx` | Auth state’in uygulama geneline nasıl yayıldığını gösterir |
| `lib/firebase.ts` | Firebase entegrasyonunun giriş noktası |
| `components/auth/login-form.tsx` | Login işleminin gerçek servis bağlantısı burada |
| `components/auth/register-form.tsx` | Register ve profil güncelleme akışı burada |
| `components/home/instant-analysis-card.tsx` | Şu anki mock analiz davranışı burada |
| `next.config.ts` | Static export ve production base path davranışı burada |

## Environment Variables

Repository’de `.env.local` mevcut. Kod tabanında görülen environment variable’lar:

| Değişken | Rolü |
| --- | --- |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase app kimlik bilgisi |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase proje kimliği |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket bilgisi |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase app ID |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | Firebase measurement / analytics kimliği |
| `NEXT_PUBLIC_API_BASE_URL` | Olası backend API kök adresi; mevcut kodda kullanılmıyor |

Notlar:

- Repo içinde `.env.example` bulunmuyor
- README’ye gizli değerler yazılmamalı; sadece değişken isimleri paylaşılmalı
- Firebase yapılandırması istemci tarafında `NEXT_PUBLIC_*` prefix’i ile tüketiliyor

## Setup and Run

### Prerequisites

- Node.js
- npm

Node sürümü repo içinde sabitlenmemiş. `next@16`, `react@19` ve modern TypeScript/Tailwind sürümleri kullanıldığı için güncel bir Node.js LTS sürümü tercih edilmeli.

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Varsayılan adres:

```text
http://localhost:3000
```

### Production Build

```bash
npm run build
```

### Production Start

```bash
npm run start
```

### Lint

```bash
npm run lint
```

Mevcut repository durumunda lint komutu başarılı çalışıyor.

### Environment Setup

Çalışan auth akışı için `.env.local` içinde Firebase değişkenlerinin tanımlı olması gerekir. Eğer Firebase konfigürasyonu eksikse login/register akışı çalışmaz.

## Current Implementation Status

### Implemented

- Landing page section tabanlı olarak uygulanmış
- Header / footer ve responsive navigation mevcut
- Login ve register ekranları mevcut
- Firebase email/password auth entegrasyonu temel seviyede uygulanmış
- Auth state için global context mevcut
- Dashboard altında modül route’ları tanımlanmış

### UI-Only / Placeholder

- `InstantAnalysisCard` sonucu mock veri üretir
- Dosya yükleme alanı işlevsiz placeholder
- Dashboard alt sayfaları yalnızca başlık/açıklama ekranı
- Güven göstergeleri ve ürün metinleri sabit içerik
- Google sign-in butonu sadece görsel/placeholder

### Not Yet Implemented

- Backend API entegrasyonu
- Analiz sonucu persistansı
- Geçmiş analiz verilerinin gerçek listelenmesi
- Dilekçe üretim motoru
- Emsal karar arama entegrasyonu
- Protected routes / session-based erişim kontrolü
- Kullanıcıya gösterilen hata, başarı ve loading feedback katmanı

Genel olgunluk seviyesi: erken aşama frontend iskeleti + temel auth entegrasyonu.

## Development Notes

- Uygulama metinleri `constants/ui-text.ts` içinde merkezileştirilmiş; yeni UI kopyaları mümkün olduğunca aynı yapıda tutulmalı
- Landing page’e yeni bölüm eklenecekse önce `sections/home/` altında izole bir section oluşturup sonra `app/page.tsx` içine compose etmek mevcut yapıyla uyumlu olur
- Auth ile ilgili yeni işlerde `AuthContext` ile form bileşenleri arasındaki sorumluluk ayrımı korunmalı
- Firebase dışı servisler eklenecekse bunları doğrudan component içine gömmek yerine ayrı bir `services/` veya `lib/` katmanına taşımak daha sürdürülebilir olur
- Dashboard modülleri şu an route iskeleti halinde; yeni feature geliştirirken ilgili `app/(app)/dashboard/.../page.tsx` dosyasından başlanabilir
- `next.config.ts` içindeki static export ve base path ayarları deployment davranışını etkiler; routing veya asset kullanımında bu yapı göz önünde bulundurulmalı



