'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

// 仮のレビューデータ
const reviews = {
  1: {
    id: 1,
    title: 'カタンのレビュー',
    image: '/placeholder.svg?height=150&width=150',
    score: 8.5,
    content: '素晴らしいゲームです！戦略性が高く、毎回異なる展開が楽しめます。',
    date: '2024-03-15'
  },
  // 他のレビューデータ...
}

export default function ReviewPage() {
  const params = useParams()
  const id = params.id as string
  const review = reviews[id]

  if (!review) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold mb-4">レビューが見つかりません</h1>
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          ホームに戻る
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{review.title}</h1>
      <div className="relative w-full h-64 mb-6">
        <Image
          src={review.image}
          alt={review.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold">評価: {review.score}</span>
          <span className="text-gray-500">{review.date}</span>
        </div>
        <p className="text-gray-700 leading-relaxed">{review.content}</p>
      </div>
    </div>
  )
} 