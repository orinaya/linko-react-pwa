'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useProfiles } from '@/contexts/ProfileContext';
import { useState } from 'react';
import ButtonParticle from '../particles/ButtonParticle';
import ProfileSelectParticle from '../particles/ProfileSelectParticle';
import DropdownProfileParticle from '../particles/DropdownProfileParticle';
import { IoIosArrowBack } from 'react-icons/io';

function HeaderComponent() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const { profiles, currentProfile, setCurrentProfile } = useProfiles();

  const firstname = user?.user_metadata?.firstname || 'utilisateur';
  const lastname = user?.user_metadata?.lastname || 'utilisateur';
  const initials = firstname[0]?.toUpperCase() + lastname[0]?.toUpperCase();

  const pathSegments = pathname.split('/').filter(Boolean);
  const isDynamicPage = pathSegments.length > 1;

  const showHeader = pathname !== '/';
  const hideLogo = ['/', '/locate', '/account'].includes(pathname);
  const showBackButton = isDynamicPage || pathname === '/account';
  const showProfileDropdown = pathname !== '/';
  const showTitleAndProfile = pathname === '/home';

  const pageTitles = {
    '/home': `Bonjour ${firstname},`,
    '/alerts': 'Les alertes',
    '/trips': 'Les sorties',
    '/groups': 'Gestion des groupes',
  };

  const title = pageTitles[pathname] || 'Titre';

  if (!showHeader) return null;

  return (
    <header className="w-full">
      {!hideLogo && (
        <div className="flex items-center justify-center">
          <img
            src="/assets/images/linko-orange.svg"
            alt="Linko Logo"
            className="w-18 h-auto object-contain"
          />
        </div>
      )}
      <div className="flex items-center justify-between py-3.5 bg-transparent">
        {showBackButton ? (
          <ButtonParticle
            title="Retour"
            variant="ghost"
            color="blue"
            onClick={() => router.back()}
            className="w-fit"
            iconBefore={IoIosArrowBack}
          />
        ) : showTitleAndProfile ? (
          <div className="flex flex-col items-start justify-center">
            <div className="text-xl font-bold">{title}</div>
            <p>Profil sélectionné</p>
            {/* <ProfileSelectParticle
              profiles={profiles}
              selected={currentProfile}
              onChange={(profile) => {
                setCurrentProfile(profile);
              }}
            /> */}

            <ProfileSelectParticle
              profiles={profiles}
              selectedProfileId={currentProfile?.id}
              onChange={(profile) =>
                setCurrentProfile(profile)
              }
            />
          </div>
        ) : (
          <div />
        )}
        {showProfileDropdown && (
          <div className='absolute right-4 top-8'>
            <DropdownProfileParticle initials={initials} fullname={`${firstname} ${lastname}`} />
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderComponent;