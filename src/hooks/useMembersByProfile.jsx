'use client'

import { getMembersByProfileId } from '@/services/user-datas/profile';
import { useEffect, useState } from 'react';

export default function useMembersByProfileHook(profileId) {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!profileId) return;

    const fetchMembers = async () => {
      setLoading(true);
      try {
        const data = await getMembersByProfileId(profileId);
        setMembers(data || []);
      } catch (err) {
        console.error('Erreur lors du chargement des membres :', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [profileId]);

  return { members, loading, error, setMembers, setLoading, setError };
}