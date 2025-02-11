'use client'

import { Snackbar, Alert } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSnackbar } from '@/contexts/SnackbarContext'

type Severity = 'success' | 'error' | 'warning' | 'info'

const SuccessSnackbar = () => {
  const router = useRouter()
  const { message, setMessage } = useSnackbar()
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState<Severity>('success')

  useEffect(() => {
    if (message) {
      setOpen(true)
    }
  }, [message])

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
    setMessage('')
  }

  return (
    <>
      {message && (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: '100%' }}
          >
            {message}
          </Alert>
        </Snackbar>
      )}
    </>
  )
}

export default SuccessSnackbar
