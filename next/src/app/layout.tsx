import './globals.css'
import { Inter } from 'next/font/google'
import ClientWrapper from '@/components/ClientWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ボードゲームレビュー',
  description: 'ボードゲームのレビューと情報を共有するサイト'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}
