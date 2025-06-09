'use client';

import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';

const members = [
  { id: 1, name: 'Mathéo', distance: 'à 200m', avatar: '/avatars/matheo.png' },
  { id: 2, name: 'Cali', distance: 'à 200m', avatar: '/avatars/cali.png' },
  { id: 3, name: 'Ysée', distance: 'à 200m', avatar: '/avatars/ysee.png' },
  { id: 4, name: 'Oriane', distance: 'à 200m', avatar: '/avatars/oriane.png' },
  { id: 5, name: 'Arthur', distance: 'à 200m', avatar: '/avatars/arthur.png' },
];

export default function ConnectedMembersComponent() {
  return (
    <div className="fixed bottom-17 bg-white rounded-t-2xl shadow-lg  py-3 w-full">

      <div className="flex items-center justify-between mb-2 px-4">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-gray-800 ">Membres connectés</h3>

          <span className="font-semibold text-md bg-[#DBEAFF] text-[#0162EF] px-2.5 py-1 rounded-md">{members.length}</span>
        </div>
        <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
          Voir les membres <FaChevronRight size={12} />
        </button>
      </div>

      <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-1">
        {members.map((member) => (
          <div key={member.id} className="flex flex-col items-center w-16 flex-shrink-0">
            <div className="w-14 h-14 rounded-full border-4 border-blue-400 overflow-hidden">
              <Image src={member.avatar} alt={member.name} width={56} height={56} />
            </div>
            <p className="text-sm font-semibold text-gray-800 mt-1 truncate">{member.name}</p>
            <p className="text-xs text-gray-500">{member.distance}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
