'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useSnackbar } from '@/contexts/SnackbarContext'

// 仮のゲームデータ（実際の実装では、APIからデータを取得します）
const game = {
  id: 1,
  name: 'カタン',
  image: '/placeholder.svg?height=300&width=300',
  bggLink: 'https://boardgamegeek.com/boardgame/13/catan',
  amazonLink: 'https://www.amazon.co.jp/dp/B00005BFUU?tag=youraffiliateid-22',
  rakutenLink:
    'https://hb.afl.rakuten.co.jp/hgc/youraffiliateid/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fboardgame%2F10000001%2F',
}

const mechanics = [
  'オークション',
  'ダイスロール',
  'タイル/カード配置',
  'ブラフ',
  'エリアマジョリティ',
  'ワーカープレイスメント',
  '正体隠匿系',
  'モジュラーボード',
  'チキンレース',
  'ドラフト',
  'デッキ/バッグビルディング',
  'トリックテイキング',
  '拡大再生産',
]

const tags = [
  '子どもと大人が遊べる',
  '子どもにおすすめ',
  '大人におすすめ',
  '二人におすすめ',
  'ソロにおすすめ',
  'デザイン性が高い',
  'リプレイ性が高い',
  'パーティ向き',
  '謎解き',
  'チーム戦',
  '協力',
  'パズル',
  'レガシー（ストーリー）',
  '動物',
]

type ReviewState = {
  overallScore: number
  playTime: number
  ruleComplexity: number
  luckFactor: number
  interaction: number
  downtime: number
  recommendedPlayers: string[]
  mechanics: string[]
  tags: string[]
  customTags: string
  shortComment: string
}

export default function ReviewForm() {
  const { setMessage } = useSnackbar()
  const [review, setReview] = useState<ReviewState>({
    overallScore: 5,
    playTime: 2,
    ruleComplexity: 3,
    luckFactor: 3,
    interaction: 3,
    downtime: 3,
    recommendedPlayers: [],
    mechanics: [],
    tags: [],
    customTags: '',
    shortComment: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setReview((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
            ? [...(prev[name as keyof ReviewState] as string[]), value]
            : (prev[name as keyof ReviewState] as string[]).filter(
                (item) => item !== value,
              )
          : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // レビュー送信処理
    try {
      // APIコール等の処理
      setMessage('レビューを投稿しました！')
    } catch (error) {
      setMessage('エラーが発生しました')
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* <Header /> */}
      <h1 className="text-3xl font-bold mb-6">{game.name}のレビュー</h1>
      <div className="flex mb-6">
        <Image
          src={game.image || '/placeholder.svg'}
          alt={game.name}
          width={300}
          height={300}
          className="rounded-lg"
        />
        <div className="ml-6">
          <h2 className="text-2xl font-semibold mb-2">{game.name}</h2>
          <Link
            href={game.bggLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline block mb-2"
          >
            BoardGameGeekで見る
          </Link>
          <Link
            href={game.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline block mb-2"
          >
            Amazonで見る
          </Link>
          <Link
            href={game.rakutenLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline block mb-2"
          >
            楽天で見る
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold">
            総合得点: {review.overallScore}
          </label>
          <input
            type="range"
            name="overallScore"
            min="1"
            max="10"
            step="0.5"
            value={review.overallScore}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">プレイ時間</label>
          <input
            type="range"
            name="playTime"
            min="1"
            max="5"
            step="0.5"
            value={review.playTime}
            onChange={handleChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>30分以内</span>
            <span>45分</span>
            <span>1時間</span>
            <span>1時間半</span>
            <span>2時間</span>
            <span>2時間半以上</span>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold">
            ルール難度: {review.ruleComplexity}
          </label>
          <input
            type="range"
            name="ruleComplexity"
            min="1"
            max="5"
            step="0.5"
            value={review.ruleComplexity}
            onChange={handleChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>優しい</span>
            <span>難しい</span>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold">
            運要素: {review.luckFactor}
          </label>
          <input
            type="range"
            name="luckFactor"
            min="1"
            max="5"
            step="0.5"
            value={review.luckFactor}
            onChange={handleChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>低い</span>
            <span>高い</span>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold">
            インタラクション: {review.interaction}
          </label>
          <input
            type="range"
            name="interaction"
            min="1"
            max="5"
            step="0.5"
            value={review.interaction}
            onChange={handleChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>弱い</span>
            <span>強い</span>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold">
            ダウンタイム: {review.downtime}
          </label>
          <input
            type="range"
            name="downtime"
            min="1"
            max="5"
            step="0.5"
            value={review.downtime}
            onChange={handleChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>短い</span>
            <span>長い</span>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold">おすすめプレイ人数</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5, '6人以上'].map((num) => (
              <label key={num} className="flex items-center">
                <input
                  type="checkbox"
                  name="recommendedPlayers"
                  value={num.toString()}
                  checked={review.recommendedPlayers.includes(num.toString())}
                  onChange={handleChange}
                  className="mr-2"
                />
                {num}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold">メカニクス</label>
          <div className="grid grid-cols-2 gap-2">
            {mechanics.map((mechanic) => (
              <label key={mechanic} className="flex items-center">
                <input
                  type="checkbox"
                  name="mechanics"
                  value={mechanic}
                  checked={review.mechanics.includes(mechanic)}
                  onChange={handleChange}
                  className="mr-2"
                />
                {mechanic}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold">タグ</label>
          <div className="grid grid-cols-2 gap-2">
            {tags.map((tag) => (
              <label key={tag} className="flex items-center">
                <input
                  type="checkbox"
                  name="tags"
                  value={tag}
                  checked={review.tags.includes(tag)}
                  onChange={handleChange}
                  className="mr-2"
                />
                {tag}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold">カスタムタグ</label>
          <input
            type="text"
            name="customTags"
            value={review.customTags}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="カンマ区切りで入力"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">一言コメント</label>
          <textarea
            name="shortComment"
            value={review.shortComment}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={3}
            placeholder="このゲームの魅力を一言で表現してください"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          レビューを投稿
        </button>
      </form>
    </div>
  )
}
