// import Image from 'next/image';
// import Logo from '../assets/images/comet-logo.png';
'use client';
import { usePathname } from 'next/navigation';

export default function HeaderComponent() {
  const pathname = usePathname();


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
      {pathname !== '/' && (
        <div className="flex items-center justify-between py-3.5 bg-transparent">
          <h1 className="font-bold text-2xl">{title}</h1>
          <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
            <span className="text-green-700 font-bold">JB</span>
          </div>
        </div>
      )}
    </>
  );
}
