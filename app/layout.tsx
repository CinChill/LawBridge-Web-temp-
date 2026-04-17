import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Import the AuthProvider you created in the context file
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LawBridge",
  description: "Hukuki analiz, dilekçe ve emsal karar çalışma alanı.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white font-sans antialiased`}
      >
        {/* 2. Wrap the children so Auth state is accessible globally */}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
