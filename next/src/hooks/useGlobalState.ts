"use client"

import { createContext, useContext, useState } from 'react'
import useSWR from 'swr'

type SnackbarContextType = [
  {
    message: string | null
    severity: 'success' | 'error' | 'warning' | 'info' | null
    pathname: string | null
  },
  React.Dispatch<React.SetStateAction<{
    message: string | null
    severity: 'success' | 'error' | 'warning' | 'info' | null
    pathname: string | null
  }>>
]

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined)

export const useUserState = () => {
  type UserStateType = {
    id: number
    name: string
    email: string
    isSignedIn: boolean
    isFetched: boolean
  }

  const fallbackData: UserStateType = {
    id: 0,
    name: "",
    email: "",
    isSignedIn: false,
    isFetched: false,
  }

  const { data: state, mutate: setState } = useSWR("user", null, {
    fallbackData,
  })
  return [state, setState] as [UserStateType, (value: UserStateType) => void]
}

export const useSnackbarState = () => {
  const context = useContext(SnackbarContext)
  if (context === undefined) {
    throw new Error('useSnackbarState must be used within a SnackbarProvider')
  }
  return context
}

export const SnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [snackbar, setSnackbar] = useState({
    message: null,
    severity: null,
    pathname: null,
  })

  return (
    <SnackbarContext.Provider value={[snackbar, setSnackbar]}>
      {children}
    </SnackbarContext.Provider>
  )
}
