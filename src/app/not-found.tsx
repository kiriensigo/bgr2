'use client'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">ページが見つかりませんでした。</p>
      <a href="/" className="text-blue-500 hover:text-blue-700">
        ホームに戻る
      </a>
    </div>
  )
} 