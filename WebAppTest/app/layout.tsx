import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "프로필",
  description: "프로필 이미지와 정보를 보여주는 웹앱",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
