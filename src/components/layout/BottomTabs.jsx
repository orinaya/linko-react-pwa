'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiHomeSmile2Line, RiHomeSmile2Fill } from 'react-icons/ri';
import { LuCircleAlert } from 'react-icons/lu';
import { IoAlertCircle } from 'react-icons/io5';
import { FaRegCompass } from 'react-icons/fa';
import { PiSuitcase } from 'react-icons/pi';
import { HiOutlineUserGroup, HiMiniUserGroup } from 'react-icons/hi2';

const icons = {
  HomeTabs: { icon: RiHomeSmile2Line, iconActive: RiHomeSmile2Fill },
  AlertTabs: { icon: LuCircleAlert, iconActive: IoAlertCircle },
  LocateTabs: { icon: FaRegCompass, iconActive: FaRegCompass },
  TripsTabs: { icon: PiSuitcase, iconActive: PiSuitcase },
  GroupsTabs: { icon: HiOutlineUserGroup, iconActive: HiMiniUserGroup },
};

const tabs = [
  { name: 'HomeTabs', label: 'Accueil', path: '/home' },
  { name: 'AlertTabs', label: 'Alertes', path: '/alert' },
  { name: 'LocateTabs', label: 'Localiser', path: '/', isPrimary: true },
  { name: 'TripsTabs', label: 'Sorties', path: '/trips' },
  { name: 'GroupsTabs', label: 'Groupes', path: '/groups' },
];

export default function BottomTabs() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 transform flex bg-gray-900 h-17 w-full"
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
                ? 'bg-yellow-400 text-yellow-50 rounded-xl w-12 h-full'
                : `py-3 rounded-full ${isActive
                  ? 'bg-transparent text-yellow-400'
                  : 'text-white hover:bg-gray-800'
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
  );
}