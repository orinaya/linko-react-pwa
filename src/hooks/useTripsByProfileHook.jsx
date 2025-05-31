'use client'

import { getTripsByProfileId } from '@/services/user-datas/profile';
import { useEffect, useState } from 'react';


export default function useTripsByProfileHook(profileId) {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!profileId) return;

    const fetchTrips = async () => {
      setLoading(true);
      try {
        const data = await getTripsByProfileId(profileId);
        setTrips(data || []);
      } catch (err) {
        console.error('Erreur lors du chargement des membres :', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, [profileId]);

  return { trips, loading, error, setTrips, setLoading, setError };
}