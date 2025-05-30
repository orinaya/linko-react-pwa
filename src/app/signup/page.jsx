'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'

function Signup() {
  const { register, state } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    lastname: '',
    firstname: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await register(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Inscription</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="lastname"
        placeholder="Nom"
        value={formData.lastname}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="firstname"
        placeholder="Prénom"
        value={formData.firstname}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        S'inscrire
      </button>

      {state?.error && <p className="text-red-600">{state?.error}</p>}
    </form>
  )
}
export default Signup