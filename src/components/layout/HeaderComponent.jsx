'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useProfiles } from '@/contexts/ProfileContext';
import ButtonParticle from '../particles/ButtonParticle';
import ProfileSelectParticle from '../particles/ProfileSelectParticle';
import DropdownProfileParticle from '../particles/DropdownProfileParticle';
import { IoIosArrowBack } from 'react-icons/io';
import { IoArrowBackCircle } from 'react-icons/io5';

function HeaderComponent() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const { profiles, currentProfile, setCurrentProfile } = useProfiles();

  const firstname = user?.user_metadata?.firstname || 'utilisateur';
  const lastname = user?.user_metadata?.lastname || 'utilisateur';
  const initials = firstname[0]?.toUpperCase() + lastname[0]?.toUpperCase();

  const pathSegments = pathname.split('/').filter(Boolean);

  const showHeader = pathname !== '/' && pathname !== '/locate';
  const hideLogo = ['/', '/locate', '/account', '/auth/login', '/auth/signup', '/create-profile'].includes(pathname);
  const hideProfileDropdownOn = ['/', '/auth/login', '/auth/signup', '/create-profile', '/locate'];
  const showProfileDropdown = !hideProfileDropdownOn.includes(pathname);
  const showBackButtonOn = ['/auth/login', '/auth/signup', '/create-profile', '/account',];
  const showBackButton =
    showBackButtonOn.includes(pathname) ||
    (pathname.startsWith('/trips/') && pathname.split('/').filter(Boolean).length === 2);

  const pageTitles = {
    '/home': `Bienvenue, ${firstname}`,
    '/alerts': 'Les alertes',
    '/trips': 'Les sorties',
    '/groups': 'Gestion des groupes',
  };

  const title = pageTitles[pathname] || 'Titre';

  if (!showHeader) return null;

  return (
    <header className="w-full">
      {!hideLogo && (
        <div className="flex items-center justify-center h-10">
          <img
            src="/assets/images/linko-blue.svg"
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
            color={['/auth/login', '/auth/signup', '/create-profile'].includes(pathname) ? 'white' : 'blue'}
            onClick={() => router.back()}
            className="w-fit"
            iconBefore={['/auth/login', '/auth/signup'].includes(pathname) ? IoArrowBackCircle : IoIosArrowBack}
          />
        ) : (
          <div className="flex flex-col items-start justify-center mt-2">
            <div className={`${pathname === '/home' ? 'text-2xl' : 'text-xl'} font-semibold`}>
              {title}
            </div>

            {pathname === '/home' && (
              <>
                <p>Profil sélectionné</p>
                <ProfileSelectParticle
                  profiles={profiles}
                  selectedProfileId={currentProfile?.id}
                  onChange={(profile) =>
                    setCurrentProfile(profile)
                  }
                />
              </>
            )}
          </div>
        )}
        {showProfileDropdown && (
          <div className='absolute right-6 top-6'>
            <DropdownProfileParticle initials={initials} fullname={`${firstname} ${lastname}`} />
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderComponent;