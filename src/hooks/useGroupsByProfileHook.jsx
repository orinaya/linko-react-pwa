'use client'

import { getGroupsByProfileId } from '@/services/user-datas/profile';
import { useEffect, useState } from 'react';

export default function useGroupsByProfileHook(profileId) {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!profileId) return;

    const fetchGroups = async () => {
      setLoading(true);
      try {
        const data = await getGroupsByProfileId(profileId);
        setGroups(data || []);
      } catch (err) {
        console.error('Erreur lors du chargement des groupes :', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, [profileId]);

  return { groups, loading, error, setGroups, setLoading, setError };
}