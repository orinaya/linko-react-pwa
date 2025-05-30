'use client'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/services/api'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function CreateProfile() {
  const { user } = useAuth()
  const router = useRouter()
  const [name, setName] = useState('')

  const handleCreate = async () => {
    if (!name) return

    // Créer le profil
    const { data: profile, error: profileError } = await supabase
      .from('Profile')
      .insert([{ name }])
      .select()
      .single()

    if (profileError) {
      console.error('Erreur création profil', profileError)
      return
    }

    // Lier le profil à l'utilisateur dans User_Profile
    const { error: linkError } = await supabase
      .from('User_Profile')
      .insert([{ user_id: user.id, profile_id: profile.id }])

    if (linkError) {
      console.error('Erreur liaison user/profile', linkError)
      return
    }

    // Redirige ensuite vers la page d’accueil
    router.push('/locate')
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Créer votre profil</h1>
      <input
        type="text"
        placeholder="Nom du profil"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <button
        onClick={handleCreate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Créer le profil
      </button>
    </div>
  )
}


export default CreateProfile