'use client';

import { usePathname, useRouter } from 'next/navigation';
import ButtonParticle from '../particles/ButtonParticle';
import { IoIosArrowBack } from 'react-icons/io';

function HeaderComponent() {
  const pathname = usePathname();
  const router = useRouter();

  const pathSegments = pathname.split('/').filter(Boolean);
  const isDynamicPage = pathSegments.length > 1;

  let title;
  switch (pathname) {
    case '/home':
      title = 'Bonjour Jean,';
      break;
    case '/alerts':
      title = 'Les alertes';
      break;
    case '/trips':
      title = 'Les sorties';
      break;
    case '/groups':
      title = 'Gestion des groupes';
      break;
    default:
      title = 'Titre';
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <img
          src="/assets/images/linko-orange.svg"
          alt="Linko Logo"
          className="w-18 h-auto object-contain"
        />
      </div>
      {pathname !== '/' && (
        <div className="flex items-center justify-between py-3.5 bg-transparent">

          {isDynamicPage ? (
            <ButtonParticle
              title="Retour"
              colorBg="transparent"
              colorText="text-[#0162EF]"
              colorBgHover="hover:bg-blue-700"
              colorTextHover="hover:text-gray-100"
              iconBefore={IoIosArrowBack}
              onClick={() => router.back()}
            />
          ) : (
            <div className="text-xl font-bold">{title}</div>
          )}

          <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
            <span className="text-green-700 font-bold">JB</span>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderComponent;