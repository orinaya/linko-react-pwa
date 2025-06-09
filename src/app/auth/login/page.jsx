'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import RegisterFormParticle from '@/components/particles/RegisterFormParticle';
import ButtonParticle from '@/components/particles/ButtonParticle'

function Login() {
  const { login, loginWithProvider, state } = useAuth()
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(formData)
  }

  return (
    <section className='bg-[#0162EF] text-white mx-auto'>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-semibold text-center">Connexion</h2>
        <ButtonParticle
          title="Connexion avec Google"
          variant="secondary"
          color="neutral"
          onClick={() => loginWithProvider('google')}
          className="w-full mb-2"
          iconBefore={FcGoogle}
        />
        <ButtonParticle
          title="Connexion avec Facebook"
          variant="secondary"
          color="facebook"
          onClick={() => loginWithProvider('facebook')}
          className="w-full mb-8"
          iconBefore={FaFacebook}
        />

        <p className='uppercase text-xl font-semibold text-center'>ou</p>
        <RegisterFormParticle
          label="Adresse email"
          type="email"
          id="email"
          name="email"
          placeholder="Entrez votre email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <RegisterFormParticle
          label="Mot de passe"
          type="password"
          id="password"
          name="password"
          placeholder="Entrez votre mot de passe"
          value={formData.password}
          onChange={handleChange}
          required
          className='mb-8'
        />
        <ButtonParticle
          title="Se connecter"
          variant="secondary"
          color="orange"
          className="w-full mb-8"
          iconBefore={FiLogIn}
        />
        <a href='#' className='underline text-white text-sm text-center w-full block'>Mot de passe oublié ?</a>

        {state?.error && <p className="text-red-600">{state?.error}</p>}
      </form>
    </section>
  )
}

export default Login