import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-3xl font-display mb-4 sm:mb-0">
          ボドゲレビュー
        </Link>
        <nav>
          <ul className="flex flex-wrap justify-center sm:space-x-6">
            <li className="mx-2 my-1">
              <Link
                href="/"
                className="hover:text-accent transition-colors duration-300"
              >
                ホーム
              </Link>
            </li>
            <li className="mx-2 my-1">
              <Link
                href="/games"
                className="hover:text-accent transition-colors duration-300"
              >
                ゲーム一覧
              </Link>
            </li>
            <li className="mx-2 my-1">
              <Link
                href="/search"
                className="hover:text-accent transition-colors duration-300"
              >
                検索
              </Link>
            </li>
            <li className="mx-2 my-1">
              <Link href="/signup" className="btn btn-secondary">
                新規登録
              </Link>
            </li>
            <li className="mx-2 my-1">
              <Link href="/login" className="btn btn-secondary">
                ログイン
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
