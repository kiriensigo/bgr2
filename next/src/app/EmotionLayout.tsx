'use client'

import ClientLayout from '@/components/ClientLayout'

export default function EmotionLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <ClientLayout>{children}</ClientLayout>
    </div>
  )
} 