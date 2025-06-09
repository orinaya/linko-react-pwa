'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/services/api'
import { useAuth } from '@/contexts/AuthContext'
import { FaCheck } from 'react-icons/fa'
import ButtonParticle from '@/components/particles/ButtonParticle'
import RegisterFormParticle from '@/components/particles/RegisterFormParticle'

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

    router.push('/locate')
  }

  return (
    <div className="">
      <h2 className="text-xl font-semibold text-center text-white mb-6">Création d'un profil</h2>
      <RegisterFormParticle
        label="Nom du profil"
        type="text"
        id="name"
        name="name"
        placeholder="Entrez un nom de profil"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='mb-4 w-full'
      />
      <ButtonParticle
        title="Enregistrer"
        variant="secondary"
        color="orange"
        className="w-full mb-8"
        onClick={handleCreate}
        iconBefore={FaCheck}
      />
    </div>
  )
}


export default CreateProfile