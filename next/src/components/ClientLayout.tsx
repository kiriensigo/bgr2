'use client'

import React from 'react'
import { Providers } from '@/app/providers'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function ClientLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </div>
    </Providers>
  )
}
