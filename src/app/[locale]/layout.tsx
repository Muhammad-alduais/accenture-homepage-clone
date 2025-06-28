import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ClientBody from "../ClientBody";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import StickyContactButton from "@/components/StickyContactButton";
import { locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Await the params object before accessing its properties
  const awaitedParams = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(awaitedParams.locale as Locale)) {
    notFound();
  }

  const locale = awaitedParams.locale as Locale;
  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className={`${geistSans.variable} ${geistMono.variable}`}>
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
          <LanguageProvider initialLocale={locale}>
            <ClientBody>{children}</ClientBody>
            <StickyContactButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}