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

  if (!state?.hasCheckedAuth || state?.loading) {
    return <p>Chargement...</p>
  }

  if (!state?.user) {
    return <p>Vous devez être connecté pour accéder à cette page.</p>
  }

  if (state?.error) {
    return <p className="text-red-600">Erreur : {state.error.message}</p>
  }

  return <>{children}</>
}
