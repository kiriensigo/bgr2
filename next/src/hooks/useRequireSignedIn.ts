'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSnackbar } from '@/contexts/SnackbarContext'
import { useUserState } from '@/hooks/useGlobalState'

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
