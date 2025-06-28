import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ThemeProvider } from "@/contexts/ThemeContext";
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
  title: "MovinWare | Intelligent Operations. Seamless Transformation.",
  description: "AI-Powered ERP designed for your workflow. Streamline operations, boost efficiency, and future-proof your business with MovinWare's intelligent solutions.",
  keywords: "ERP, AI, automation, digital transformation, business intelligence, Arabic ERP, bilingual ERP, UAE, MENA",
  authors: [{ name: "MovinWare" }],
  openGraph: {
    title: "MovinWare | Intelligent Operations. Seamless Transformation.",
    description: "AI-Powered ERP designed for your workflow. Streamline operations, boost efficiency, and future-proof your business.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ThemeProvider>
          <ClientBody>{children}</ClientBody>
          <StickyContactButton />
        </ThemeProvider>
      </body>
    </html>
  );
}