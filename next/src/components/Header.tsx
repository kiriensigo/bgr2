'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link
            href="/"
            className="text-3xl font-display mb-4 sm:mb-0 text-white"
          >
            ボドゲレビュー
          </Link>
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-row justify-center items-center gap-4 flex-wrap">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-accent transition-colors duration-300"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="text-white hover:text-accent transition-colors duration-300"
                >
                  ゲーム一覧
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className="text-white hover:text-accent transition-colors duration-300"
                >
                  検索
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn btn-secondary">
                  新規登録
                </Link>
              </li>
              <li>
                <Link href="/login" className="btn btn-secondary">
                  ログイン
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
