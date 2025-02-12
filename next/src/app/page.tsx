'use client'

import Link from 'next/link'
import Image from 'next/image'

const recentGames = [
  {
    id: 1,
    name: 'カタン',
    image: '/placeholder.svg?height=150&width=150',
    averageScore: 8.5
  },
  {
    id: 2,
    name: 'カルカソンヌ',
    image: '/placeholder.svg?height=150&width=150',
    averageScore: 8.2
  },
  {
    id: 3,
    name: 'ドミニオン',
    image: '/placeholder.svg?height=150&width=150',
    averageScore: 8.7
  },
  {
    id: 4,
    name: 'パンデミック',
    image: '/placeholder.svg?height=150&width=150',
    averageScore: 8.3
  },
  {
    id: 5,
    name: 'チケット・トゥ・ライド',
    image: '/placeholder.svg?height=150&width=150',
    averageScore: 8.4
  }
]

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl sm:text-4xl font-display text-primary text-center">
        最近レビューされたゲーム
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {recentGames.map((game) => (
          <Link href={`/games/${game.id}`} key={game.id} className="card group">
            <div className="relative aspect-square">
              <Image
                src={game.image || '/placeholder.svg'}
                alt={game.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">詳細を見る</span>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{game.name}</h2>
              <p className="text-black font-bold">
                評価: {game.averageScore.toFixed(1)}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <Link href="/games" className="btn btn-primary">
          もっと見る
        </Link>
      </div>
    </div>
  )
}
