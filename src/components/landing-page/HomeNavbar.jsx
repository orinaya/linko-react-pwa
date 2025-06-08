'use client';

import { useState, useRef, useEffect } from 'react';
import { FiUser, FiUserPlus, FiMenu } from 'react-icons/fi'
import ButtonParticle from '../particles/ButtonParticle'
import { IoClose } from 'react-icons/io5'

function HomeNavbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !(menuRef.current).contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header id="home-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <a href="/">
          <img
            src="/assets/images/linko-blue.svg"
            alt="Linko Logo"
            className="w-20 h-auto object-contain"
          />
        </a>

        <div className="hidden sm:flex flex-row items-center gap-4">
          <ButtonParticle
            title="Se connecter"
            variant="secondary"
            color="blue"
            routeLink="/login"
            iconBefore={FiUser}
          />
          <ButtonParticle
            title="S'inscrire"
            variant="primary"
            color="blue"
            routeLink="/signup"
            iconBefore={FiUserPlus}
          />
        </div>

        <div className="sm:hidden relative" ref={menuRef}>
          <button
            onClick={() => setOpen(!open)}
            className="text-blue-600 text-2xl p-2 focus:outline-none"
          >
            {!open ? <FiMenu /> : <IoClose />}
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-4 z-50">
              <ButtonParticle
                title="Se connecter"
                variant="secondary"
                color="blue"
                routeLink="/login"
                iconBefore={FiUser}
                justify="justify-start"
                className="w-full px-4 py-2 mb-2"
              />
              <ButtonParticle
                title="S'inscrire"
                variant="primary"
                color="blue"
                routeLink="/signup"
                iconBefore={FiUserPlus}
                justify="justify-start"
                className="w-full px-4 py-2"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default HomeNavbar;