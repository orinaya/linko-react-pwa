'use client';

import { useState, useRef, useEffect } from 'react';
import { FiSettings, FiLogOut, FiUser } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import LogoutButton from '../Logout';
import ButtonParticle from './ButtonParticle';

function DropdownProfileParticle({ fullname, email, initials }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !(menuRef.current).contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div className="relative" ref={menuRef}>
      <button
        className="w-10 h-10 rounded-full bg-green-200 border-solid flex items-center justify-center"
        onClick={() => setOpen(!open)}
      >
        <span className="text-green-700 font-bold">{initials}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 z-50">
          <div className="px-4 py-2 font-semibold border-b border-gray-300">
            <p className="text-gray-900 font-bold">{fullname}</p>
            <p className="text-gray-900 font-normal">{email}</p>
          </div>
          <ButtonParticle
            title="Profil"
            variant="ghost"
            color="neutral"
            onClick={() => router.push('/account/personal-info')}
            className="w-full"
            iconBefore={FiUser}
            justify='justify-start'
          />
          <ButtonParticle
            title="Paramètres"
            variant="ghost"
            color="neutral"
            onClick={() => router.push('/account')}
            className="w-full"
            iconBefore={FiSettings}
            justify='justify-start'
          />
          <LogoutButton />
        </div>
      )}
    </div>
  );
}

export default DropdownProfileParticle;