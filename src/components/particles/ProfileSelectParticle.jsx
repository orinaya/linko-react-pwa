'use client'

import { useState } from 'react';

function ProfileSelectParticle({ profiles = [], onChange }) {
  const [selectedProfileId, setSelectedProfileId] = useState(
    profiles.length > 0 ? profiles[0].id : null
  );

  const handleChange = (event) => {
    const id = event.target.value;
    setSelectedProfileId(id);
    if (onChange) {
      const selectedProfile = profiles.find(p => p.id.toString() === id);
      onChange(selectedProfile);
    }
  };

  return (
    <select value={selectedProfileId || ''} onChange={handleChange} className="p-2 border rounded">
      {profiles.length === 0 && <option value="">Aucun profil disponible</option>}
      {profiles.map(profile => (
        <option key={profile.id} value={profile.id}>
          {profile.name}
        </option>
      ))}
    </select>
  );
}

export default ProfileSelectParticle;
