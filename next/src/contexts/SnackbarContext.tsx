'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type SnackbarContextType = {
  message: string
  setMessage: (message: string) => void
}

const SnackbarContext = createContext<SnackbarContextType | null>(null)

export function SnackbarProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState('')

  return (
    <SnackbarContext.Provider value={{ message, setMessage }}>
      {children}
    </SnackbarContext.Provider>
  )
}

export function useSnackbar() {
  const context = useContext(SnackbarContext)
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider')
  }
  return context
}
