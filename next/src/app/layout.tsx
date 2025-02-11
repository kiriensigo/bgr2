import { Metadata } from "next";
import "./globals.css";
// import { Inter } from "next/font/google"; // 削除
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import type React from "react";

// const inter = Inter({ subsets: ["latin"] }); // 削除

export const metadata: Metadata = {
  title: "ボードゲームレビュー",
  description: "ボードゲームのレビューサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-background text-text">
        <Providers>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
