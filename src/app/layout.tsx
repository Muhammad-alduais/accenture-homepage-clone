import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import StickyContactButton from "@/components/StickyContactButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MovinWare | العمليات الذكية. التحول السلس.",
  description: "نظام تخطيط موارد المؤسسات مدعوم بالذكاء الاصطناعي مصمم لسير عملك. تبسيط العمليات، وزيادة الكفاءة، وإعداد عملك للمستقبل مع حلول MovinWare الذكية.",
  keywords: "ERP, AI, automation, digital transformation, business intelligence, Arabic ERP, bilingual ERP, UAE, MENA, نظام تخطيط موارد المؤسسات, ذكاء اصطناعي, أتمتة",
  authors: [{ name: "MovinWare" }],
  openGraph: {
    title: "MovinWare | العمليات الذكية. التحول السلس.",
    description: "نظام تخطيط موارد المؤسسات مدعوم بالذكاء الاصطناعي مصمم لسير عملك. تبسيط العمليات وزيادة الكفاءة.",
    type: "website",
    locale: "ar_AE",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased font-arabic">
        <ThemeProvider>
          <LanguageProvider>
            <ClientBody>{children}</ClientBody>
            <StickyContactButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}