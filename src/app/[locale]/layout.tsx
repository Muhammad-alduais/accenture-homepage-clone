import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ClientBody from "../ClientBody";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import StickyContactButton from "@/components/StickyContactButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import arGlobalTranslations from '@/lib/translations/global/ar.json';
import enGlobalTranslations from '@/lib/translations/global/en.json';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const translations = locale === 'ar' ? arGlobalTranslations : enGlobalTranslations;
  
  return {
    title: "MovinWare | العمليات الذكية. التحول السلس.",
    description: locale === 'ar' 
      ? "نظام تخطيط موارد المؤسسات مدعوم بالذكاء الاصطناعي مصمم لسير عملك. تبسيط العمليات، وزيادة الكفاءة، وإعداد عملك للمستقبل مع حلول MovinWare الذكية."
      : "AI-powered ERP system designed for your workflow. Streamline operations, boost efficiency, and future-proof your business with MovinWare's intelligent solutions.",
    keywords: "ERP, AI, automation, digital transformation, business intelligence, Arabic ERP, bilingual ERP, UAE, MENA, نظام تخطيط موارد المؤسسات, ذكاء اصطناعي, أتمتة",
    authors: [{ name: "MovinWare" }],
    openGraph: {
      title: "MovinWare | العمليات الذكية. التحول السلس.",
      description: locale === 'ar'
        ? "نظام تخطيط موارد المؤسسات مدعوم بالذكاء الاصطناعي مصمم لسير عملك. تبسيط العمليات وزيادة الكفاءة."
        : "AI-powered ERP system designed for your workflow. Streamline operations and boost efficiency.",
      type: "website",
      locale: locale === 'ar' ? 'ar_AE' : 'en_US',
      alternateLocale: locale === 'ar' ? 'en_US' : 'ar_AE',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const isRTL = validLocale === 'ar';

  return (
    <html lang={validLocale} dir={isRTL ? 'rtl' : 'ltr'} className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className={`antialiased ${isRTL ? 'font-arabic' : 'font-english'}`}>
        <ThemeProvider>
          <LanguageProvider initialLocale={validLocale}>
            <ClientBody>
              {children}
              <StickyContactButton />
              <ScrollToTopButton />
            </ClientBody>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}