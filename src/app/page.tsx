'use client'
import Image from 'next/image'
import Link from 'next/link'

const recentReviews = [
  {
    id: 1,
    title: 'カタンのレビュー',
    image: '/placeholder.svg?height=150&width=150',
    score: 8.5,
  },
  // ... 他のレビュー
]

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl sm:text-4xl font-display text-primary text-center">
        最近のレビュー
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {recentReviews.map((review) => (
          <Link
            href={`/reviews/${review.id}`}  // ここのパスを確認
            key={review.id}
            className="card group"
          >
            {/* ... 残りのコード ... */}
          </Link>
        ))}
      </div>
      {/* ... 残りのコード ... */}
    </div>
  )
} 