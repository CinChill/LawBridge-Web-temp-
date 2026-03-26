# LawBridge Web

LawBridge Web is a frontend-focused legal workflow interface built with Next.js. It provides a polished landing page, authentication screens, and dashboard entry points for legal text analysis, petition drafting, and precedent research workflows.

## 📌 Overview

LawBridge Web is designed to present a unified workspace for legal operations. The current implementation focuses on the user interface layer: onboarding users through landing and authentication screens, introducing core product modules, and exposing dashboard routes that can later be connected to backend services for analysis, history, petition generation, and precedent lookup.

## ✨ Features

### Implemented Features

- Responsive landing page with a hero section, instant analysis card, quick action links, trust/statistics section, and compact feature summary
- Reusable layout components including a global header and footer
- Authentication UI with login and registration pages
- Reusable split-layout auth shell for consistent authentication screens
- Google sign-in button UI
- Dashboard route scaffolding for:
  - `/dashboard`
  - `/dashboard/history`
  - `/dashboard/panel`
  - `/dashboard/petition`
  - `/dashboard/precedents`
- Centralized UI copy via a shared constants file
- Tailwind CSS v4 styling with responsive layouts, cards, gradients, and utility-driven design
- TypeScript-based component structure using the Next.js App Router

### Planned Features

- Real legal text analysis backed by an API or AI service
- File upload processing for legal documents
- Persistent analysis history
- Functional dashboard analytics and metrics
- Petition drafting workflow backed by generated content
- Precedent and case-law research flow
- Backend-backed authentication
- Working Google OAuth integration

## 🛠 Tech Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- PostCSS
- ESLint 9
- Next.js App Router
- `next/font` with Geist and Geist Mono

## 📁 Project Structure

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
├── public/
├── sections/
│   └── home/
│       ├── compact-feature-section.tsx
│       ├── hero-tool-section.tsx
│       ├── quick-actions-section.tsx
│       └── trust-stats-section.tsx
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## 🚀 Setup & Installation

### Prerequisites

- Node.js 18 or newer recommended
- npm

### Install dependencies

```bash
npm install
```

## ▶️ Usage

### Run in development

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build for production

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

### Lint the project

```bash
npm run lint
```

## 🖼 Screenshots

Add screenshots here when product visuals are available.

```md
![Home Page](./docs/screenshots/home.png)
![Login Page](./docs/screenshots/login.png)
![Dashboard](./docs/screenshots/dashboard.png)
```

## 🔌 API Integration

This repository is currently frontend-only.

At the moment, there are no confirmed backend API routes, server actions, or integrated external services in the codebase. The instant analysis flow is simulated in the UI, the file upload handler is a placeholder, and the Google login button currently provides UI-only behavior without OAuth integration.

A backend layer for analysis, authentication, history persistence, and legal research is still pending.

## 🏗 Architecture Notes

- The project uses the Next.js App Router with route groups for `(auth)` and `(app)`
- UI copy is centralized in `constants/ui-text.ts` for consistency across pages and components
- The homepage is composed from reusable section components rather than one large page file
- Authentication pages share a common `AuthShell` layout for consistent structure and styling
- Most current business behavior is presentation-driven, with only minimal placeholder interactivity

## 🔮 Future Improvements

- Replace placeholder analysis behavior with real API integration
- Implement document upload and parsing
- Add form handling, validation, and submission states for authentication flows
- Integrate real authentication and session management
- Add protected routes for dashboard pages
- Populate dashboard modules with real data and user workflows
- Improve metadata, SEO, and social sharing configuration
- Add tests for critical UI components and flows
- Add screenshots and deployment documentation
