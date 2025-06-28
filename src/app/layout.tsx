import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "MovinWare | العمليات الذكية. التحول السلس.",
  description: "نظام تخطيط موارد المؤسسات مدعوم بالذكاء الاصطناعي مصمم لسير عملك.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout should never be rendered as we redirect to /ar
  return null;
}