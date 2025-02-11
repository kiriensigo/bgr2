import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-8">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-4 sm:mb-0">&copy; 2023 ボードゲームレビュー. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/privacy" className="hover:text-accent transition-colors duration-300">
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-accent transition-colors duration-300">
                利用規約
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

