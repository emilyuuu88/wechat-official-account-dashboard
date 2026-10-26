import type { Metadata } from "next";
import "./globals.css";

const title = "2026 公众号季度数据看板";
const description = "每刻科技微信公众号 Q1、Q2、Q3 用户增长与内容运营数据分析。";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.GITHUB_ACTIONS
  ? `https://emilyuuu88.github.io${basePath}/`
  : "https://gorgeous-churros-1c0a1f.netlify.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: `${basePath}/og.png`, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${basePath}/og.png`],
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
