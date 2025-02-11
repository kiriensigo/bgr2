'use client'

import useSWR from 'swr'

// ユーザー状態の型定義
type UserStateType = {
  id: number
  name: string
  email: string
  isSignedIn: boolean
  isFetched: boolean
}

// ユーザー状態のカスタムフック
export const useUserState = () => {
  const fallbackData: UserStateType = {
    id: 0,
    name: '',
    email: '',
    isSignedIn: false,
    isFetched: false,
  }

  const { data: state, mutate: setState } = useSWR('user', null, {
    fallbackData,
  })
  return [state, setState] as [UserStateType, (value: UserStateType) => void]
}
