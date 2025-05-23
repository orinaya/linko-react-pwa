// import Image from 'next/image';
// import Logo from '../assets/images/comet-logo.png';
'use client';
import { usePathname } from 'next/navigation';

export default function HeaderComponent() {
  const pathname = usePathname();


  return (
    <div className="flex items-center justify-between p-3.5 bg-transparent">
      {pathname === '/home' ?
        (<h1 className="font-bold text-2xl">Bonjour Jean,</h1>)
        : (
          <h1 className="font-bold text-2xl">Titre</h1>
        )
      }

      <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
        <span className="text-green-700 font-bold">JB</span>
      </div>
    </div>
  );
}
