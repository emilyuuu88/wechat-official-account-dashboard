import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2026 公众号季度数据看板",
  description: "每刻科技微信公众号 Q1、Q2、Q3 用户增长与内容运营数据分析。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
