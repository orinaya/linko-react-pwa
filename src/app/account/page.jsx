'use client';

import { useRouter } from 'next/navigation';
import {
  LuUserRound,
  LuSettings,
  LuCreditCard,
  LuMoon,
} from 'react-icons/lu';
import {
  FiLock,
  FiSmartphone,
  FiMail,
  FiHelpCircle,
  FiUserCheck,
  FiShield,
} from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import { MdOutlineDeleteForever } from 'react-icons/md';

const settingsSections = [
  {
    title: 'Gérer mon compte',
    items: [
      {
        label: 'Informations personnelles',
        icon: <LuUserRound />,
        href: '/account/personal-info',
      },
      {
        label: 'Connexion et sécurité',
        icon: <FiLock />,
        href: '/account/security',
      },
      {
        label: 'Comptes liés',
        icon: <FiUserCheck />,
        href: '/account/linked-accounts',
      },
      {
        label: 'Paramètres de confidentialité',
        icon: <LuSettings />,
        href: '/account/privacy-settings',
      },
    ],
  },
  {
    title: 'Préférences',
    items: [
      {
        label: "Paramètres de l'appareil",
        icon: <FiSmartphone />,
        href: '/account/device',
      },
      {
        label: 'Notifications et e-mails',
        icon: <FiMail />,
        href: '/account/email-settings',
      },
      {
        label: 'Apparence & accessibilité',
        icon: <LuMoon />,
        href: '/account/appearance',
      },
    ],
  },
  {
    title: 'Abonnement & Paiement',
    items: [
      {
        label: 'Mon abonnement',
        icon: <LuCreditCard />,
        href: '/account/subscription',
      },
      {
        label: 'Méthode de paiement',
        icon: <FiShield />,
        href: '/account/billing',
      },
    ],
  },
  {
    title: 'Aide',
    items: [
      {
        label: 'Contacter le support',
        icon: <FiHelpCircle />,
        href: '/account/support',
      },
    ],
  },
  {
    title: 'Zone sensible',
    items: [
      {
        label: 'Supprimer mon compte',
        icon: <MdOutlineDeleteForever />,
        href: '/account/delete',
      },
    ],
  },
];


export default function AccountPage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-6 text-xl font-semibold">
        Paramètres du compte
      </div>

      {settingsSections.map((section) => (
        <div key={section.title} className="mb-6">
          <h2 className="text-sm text-gray-700 uppercase font-medium mb-2">{section.title}</h2>
          <div className="bg-white rounded-xl divide-y border divide-gray-300 border-gray-300">
            {section.items.map((item) => (
              <button
                key={item.label}
                onClick={() => router.push(item.href)}
                className="w-full flex items-center px-4 py-4 text-left hover:bg-gray-50"
              >
                <div className="text-xl text-gray-600 mr-4">{item.icon}</div>
                <div className="flex-1 text-gray-800">{item.label}</div>
                <IoIosArrowForward className='text-gray-600' />
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
