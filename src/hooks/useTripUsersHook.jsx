'use client'

import { useEffect, useState } from "react";
import { getUsersByTripId } from "@/services/api";

function useTripUsersHook(tripId) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!tripId) return;

    const fetchUsers = async () => {
      setLoading(true);
      try {
        const data = await getUsersByTripId(tripId);
        setUsers(data || []);
      } catch (err) {
        console.error("Erreur lors du chargement des utilisateurs de la sortie :", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [tripId]);

  return { users, loading, error };
}

export default useTripUsersHook;
