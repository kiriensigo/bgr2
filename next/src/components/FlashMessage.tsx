'use client'

import { Snackbar, Alert } from '@mui/material'
import { useEffect } from 'react'
import { useSnackbar } from '@/contexts/SnackbarContext'

export function FlashMessage() {
  const { message, setMessage } = useSnackbar()

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('')
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [message, setMessage])

  if (!message) return null

  return (
    <Snackbar
      open={!!message}
      autoHideDuration={3000}
      onClose={() => setMessage('')}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}
