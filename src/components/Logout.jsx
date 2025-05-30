'use client'
import { useAuth } from '@/contexts/AuthContext'

export default function LogoutButton() {
  const { logout } = useAuth()

  return (
    <button onClick={logout} className="bg-red-500 text-white p-2 rounded">
      Déconnexion
    </button>
  )
}
