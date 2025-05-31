'use client'

import { getMembersByTripId } from "@/services/user-datas/trip";
import { useEffect, useState } from "react";

function useTripMembersHook(tripId) {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!tripId) return;

    const fetchMembers = async () => {
      setLoading(true);
      try {
        const data = await getMembersByTripId(tripId);
        setMembers(data || []);
      } catch (err) {
        console.error("Erreur lors du chargement des utilisateurs de la sortie :", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [tripId]);

  return { members, loading, error };
}

export default useTripMembersHook;
