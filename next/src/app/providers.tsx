'use client'

import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { useServerInsertedHTML } from 'next/navigation'
import { useState } from 'react'
import { FlashMessage } from '@/components/FlashMessage'
import { SnackbarProvider } from '@/contexts/SnackbarContext'

export function Providers({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => {
    const cache = createCache({
      key: 'css',
      prepend: true
    })
    cache.compat = true
    return cache
  })

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(' ')
        }}
      />
    )
  })

  return (
    <SnackbarProvider>
      <CacheProvider value={cache}>
        {children}
        <FlashMessage />
      </CacheProvider>
    </SnackbarProvider>
  )
}
