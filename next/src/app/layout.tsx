'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientWrapper from '@/components/ClientWrapper'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

//export const metadata = {
//title: 'ボードゲームレビュー',
//description: 'ボードゲームのレビューサイト'
//}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={inter.className}>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}
