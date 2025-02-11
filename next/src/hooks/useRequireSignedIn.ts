"use client"

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useUserState } from '@/hooks/useGlobalState'
import { useSnackbar } from '@/contexts/SnackbarContext'

export function useRequireSignedIn() {
  const router = useRouter()
  const [user] = useUserState()
  const { setMessage } = useSnackbar()

  useEffect(() => {
    if (user.isFetched && !user.isSignedIn) {
      setMessage('サインインしてください')
      router.push('/sign_in')
    }
  }, [user, router, setMessage])
}