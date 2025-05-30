'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProtectedRoute({ children }) {
  const { state } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (state?.hasCheckedAuth && !state?.user) {
      router.replace('/')
    }
  }, [state?.user, state?.hasCheckedAuth, router])

  if (!state?.hasCheckedAuth) {
    return <p>Chargement...</p>
  }

  return <>{children}</>
}
