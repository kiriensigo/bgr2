"use client"

import { SnackbarProvider } from '@/hooks/useGlobalState'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider>
      {children}
    </SnackbarProvider>
  )
} 