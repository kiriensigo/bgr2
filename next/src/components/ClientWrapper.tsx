'use client'

import ClientLayout from '@/components/ClientLayout'

export default function ClientWrapper({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <ClientLayout>{children}</ClientLayout>
    </div>
  )
} 