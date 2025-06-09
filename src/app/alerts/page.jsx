'use client'

import { FaPhone, FaTrash, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';
import { FiAlertTriangle } from "react-icons/fi";

const alertLabels = {
  zone: 'Sortie de zone',
  disconnect: 'Déconnexion',
  fall: 'Chute',
};

const alertColors = {
  zone: 'bg-red-100 text-red-600',
  disconnect: 'bg-red-100 text-red-600',
  fall: 'bg-red-100 text-red-600',
};

const alertsUrgence = [
  { id: 1, type: 'zone', name: 'Mathéo LEBEHOT', level: 'CM1', date: '17/05/2025', time: '20:12' },
  { id: 2, type: 'disconnect', name: 'Mathéo LEBEHOT', level: 'CM1', date: '17/05/2025', time: '20:12' },
  { id: 3, type: 'fall', name: 'Mathéo LEBEHOT', level: 'CM1', date: '17/05/2025', time: '20:12' },
];

const AlertCard = ({ alert, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="bg-white rounded-xl mb-3 p-3">
      <div
        className={`flex justify-between items-center ${alertColors[alert.type]} px-2 py-1 rounded-md text-sm font-semibold cursor-pointer`}
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center gap-1">
          <FiAlertTriangle />
          {alertLabels[alert.type]}
        </span>
        <span className="text-red-600 font-light">
          {alert.date} <span className="font-semibold">{alert.time}</span>
        </span>
      </div>

      {open && (
        <>
          <div className="mt-2 text-sm font-semibold text-black text-center">
            {alert.level} – {alert.name}
          </div>

          <div className="flex gap-2 mt-3 justify-center">
            <button className="flex items-center gap-1 bg-gray-100 text-black text-sm px-3 py-1.5 rounded-lg">
              <FaTrash /> Archiver
            </button>
            <button className="flex items-center gap-1 bg-[#E8FDCE] text-[#539207] text-sm px-3 py-1.5 rounded-lg">
              <FaPhone /> Appeler
            </button>
            <button className="flex items-center gap-1 bg-[#CFEBFC] text-[#085C91] text-sm px-3 py-1.5 rounded-lg">
              <FaPaperPlane /> Rejoindre
            </button>
          </div>

        </>
      )}
    </div>
  );
};

function Alert() {
  const [filter, setFilter] = useState('Toutes');

  return (
    <div>
      <section>
        <h3 className="font-semibold mb-2">Les urgences</h3>
        {alertsUrgence.map((alert) => (
          <AlertCard key={alert.id} alert={alert} defaultOpen={true} />
        ))}
      </section>

      <section>
        <h3 className="font-semibold mb-2 mt-6">Les dernières alertes</h3>
        {alertsUrgence.map((alert) => (
          <AlertCard key={alert.id + '-recent'} alert={alert} />
        ))}
      </section>

      <section>
        <h3 className="font-semibold mb-2 mt-6">Anciennes alertes</h3>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-2 border px-3 py-2 rounded-md text-sm"
        >
          <option>Toutes</option>
          <option>Sortie de zone</option>
          <option>Déconnexion</option>
          <option>Chute</option>
        </select>
        {alertsUrgence.map((alert) => (
          <AlertCard key={alert.id + '-old'} alert={alert} />
        ))}
      </section>
    </div>
  );
}
export default Alert