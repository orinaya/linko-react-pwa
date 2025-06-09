'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiHomeSmile2Line, RiHomeSmile2Fill } from 'react-icons/ri';
import { LuCircleAlert } from 'react-icons/lu';
import { IoAlertCircle } from 'react-icons/io5';
import { FaRegCompass } from 'react-icons/fa';
import { HiOutlineUserGroup, HiMiniUserGroup } from 'react-icons/hi2';
import { BsSuitcaseLg, BsSuitcaseLgFill } from 'react-icons/bs';

const icons = {
  HomeTabs: { icon: RiHomeSmile2Line, iconActive: RiHomeSmile2Fill },
  GroupsTabs: { icon: HiOutlineUserGroup, iconActive: HiMiniUserGroup },
  LocateTabs: { icon: FaRegCompass, iconActive: FaRegCompass },
  TripsTabs: { icon: BsSuitcaseLg, iconActive: BsSuitcaseLgFill },
  AlertTabs: { icon: LuCircleAlert, iconActive: IoAlertCircle },
};

const tabs = [
  { name: 'HomeTabs', label: 'Accueil', path: '/home' },
  { name: 'GroupsTabs', label: 'Groupes', path: '/groups' },
  { name: 'LocateTabs', label: 'Localiser', path: '/locate', isPrimary: true },
  { name: 'TripsTabs', label: 'Sorties', path: '/trips' },
  { name: 'AlertTabs', label: 'Alertes', path: '/alerts' },
];

export default function BottomTabs() {
  const pathname = usePathname();
  const hiddenTabRoutes = ['/', '/auth/login', '/auth/signup', '/create-profile', '/mentions-legales', '/conditions-generales-de-vente', '/conditions-generales-d-utilisation', '/politique-de-confidentialite'];

  const shouldShowTabs = !hiddenTabRoutes.includes(pathname);
  return (
    <>
      {shouldShowTabs && (
        <nav
          className="fixed bottom-0 left-0 transform flex bg-gray-50 h-17 w-full border-t-gray-200 border-t-1"
        >
          {tabs.map(({ name, label, path, isPrimary }) => {
            const isActive = pathname === path;
            const Icon = isPrimary
              ? icons[name].icon
              : isActive
                ? icons[name].iconActive
                : icons[name].icon;

            return (
              <Link
                key={name}
                href={path}
                className={`
              flex-1 flex flex-col items-center justify-center transition-colors duration-200
              ${isPrimary
                    ? 'bg-[#FF8F33] text-yellow-50 rounded-xl w-12 h-full'
                    : `py-3 rounded-full ${isActive
                      ? 'bg-transparent text-[#FF8F33]'
                      : 'text-black hover:bg-gray-100'
                    }`
                  }
            `}
                aria-current={isActive ? 'page' : undefined}
                aria-label={label}
              >
                <Icon size={isPrimary ? 28 : 24} />
                {!isPrimary && <span className="text-xs mt-1">{label}</span>}
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
}