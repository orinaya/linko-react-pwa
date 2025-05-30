'use client'
import { useAuth } from '@/contexts/AuthContext'
import { FiLogOut } from 'react-icons/fi';
import ButtonParticle from './particles/ButtonParticle';

export default function LogoutButton() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <ButtonParticle
      title="Se déconnecter"
      variant="ghost"
      color="danger"
      onClick={handleLogout}
      className="w-full"
      iconBefore={FiLogOut}
      justify='justify-start'
    />
  )
}
