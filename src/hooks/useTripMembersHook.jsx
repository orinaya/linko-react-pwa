'use client'

import { getMembersByTripId } from "@/services/user-datas/trip";
import { useEffect, useState } from "react";

function useTripMembersHook(tripId) {
  const [members, setMembers] = useState([]);
  const [groupIds, setGroupIds] = useState([]);
  const [groupNames, setGroupNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!tripId) return;

    const fetchMembers = async () => {
      setLoading(true);
      try {
        const { members, groupNames, groupIds } = await getMembersByTripId(tripId);
        setMembers(members || []);
        setGroupNames(groupNames || []);
        setGroupIds(groupIds || []);
      } catch (err) {
        console.error("Erreur lors du chargement des utilisateurs de la sortie :", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [tripId]);

  return { members, loading, error, groupNames, groupIds };
}

export default useTripMembersHook;
