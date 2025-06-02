'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import useTripsByProfileHook from "@/hooks/useTripsByProfileHook";
import useTripMembersHook from "@/hooks/useTripMembersHook";
import { useProfiles } from "@/contexts/ProfileContext";
import { addGroupToTrip, removeGroupFromTrip } from "@/services/user-datas/trip";
import { getAllGroups } from "@/services/user-datas/group";
import { formatDate } from "@/utils/date";
import { LuImage } from "react-icons/lu";
import MultiselectParticle from "@/components/particles/MultiselectParticle";


function TripDetails() {
  const params = useParams()
  const tripParam = params?.path
  const tripId = tripParam?.split("-")[0]

  const { currentProfile } = useProfiles()
  const profileId = currentProfile?.id

  const { trips, loading: tripsLoading } = useTripsByProfileHook(profileId)
  const { members, loading: membersLoading, error: membersError, groupNames, groupIds } = useTripMembersHook(tripId)

  const [trip, setTrip] = useState(null)
  const [effectif, setEffectif] = useState(0)

  const [allGroups, setAllGroups] = useState([])

  useEffect(() => {
    if (!tripId || !trips) return;

    const currentTrip = trips.find(t => String(t.id) === tripId);
    if (!currentTrip) return;

    setTrip(currentTrip);
  }, [tripId, trips]);

  useEffect(() => {
    setEffectif(members.length || 0);
  }, [members]);

  useEffect(() => {
    async function fetchGroups() {
      const groups = await getAllGroups();
      setAllGroups(groups);
    }
    fetchGroups();
  }, []);

  const handleUpdateGroupAssociations = async (newGroupIds) => {
    const toAdd = newGroupIds.filter(id => !groupIds.includes(id))
    const toRemove = groupIds.filter(id => !newGroupIds.includes(id))

    try {
      await Promise.all(toAdd.map(id => addGroupToTrip(tripId, id)))
      await Promise.all(toRemove.map(id => removeGroupFromTrip(tripId, id)))
      window.location.reload()
    } catch (error) {
      console.error("Erreur lors de la mise à jour des groupes :", error)
    }
  };
  if (!trip) {
    return <p className="p-6">Sortie non trouvée...</p>;
  }

  if (membersLoading) {
    return <p className="p-6">Chargement des utilisateurs...</p>;
  }

  if (membersError) {
    return <p className="p-6 text-red-600">Erreur lors du chargement des membres.</p>;
  }


  return (
    // <ProtectedRoute>
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        {trip.image ? (
          <div className="mb-4">
            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ) : (
          <div className="w-20 h-20 rounded-full bg-green-200 flex items-center justify-center">
            <LuImage className="text-green-700 w-2/5 h-2/5" />
          </div>
        )}
        <div className="flex flex-col items-center gap-0 mt-2.5">
          <h1 className="text-xl font-semibold">{trip.title}</h1>
          <p className="text-gray-600">{trip.place}</p>
        </div>
      </div>
      <div className="mt-6 w-full max-w-2xl p-4 bg-white rounded-xl gap-3 flex flex-col">
        <div className="flex gap-3 justify-between">
          <div className="flex flex-col gap-2 bg-[#EBF3FF] p-4 rounded-lg items-center justify-center w-full">
            <span className="text-[#0162EF] font-regular text-sm">Date de départ</span>
            <span>{formatDate(trip.start_date)}</span>
          </div>
          <div className="flex flex-col gap-2 bg-[#EBF3FF] p-4 rounded-lg items-center justify-center w-full">
            <span className="text-[#0162EF] font-regular text-sm">Date de retour</span>
            <span>{formatDate(trip.end_date)}</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start bg-[#EBF3FF] p-4 rounded-lg">
          <span className="text-[#0162EF] font-regular text-sm">Description</span>
          <span>{trip.description}</span>
        </div>
        <div className="flex justify-between bg-[#EBF3FF] p-4 rounded-lg items-center">
          <span className="text-[#0162EF] font-regular text-sm">Effectif à prévoir</span>
          <span>{effectif}/{effectif}</span>
        </div>
        <div className="flex flex-col gap-2 bg-[#EBF3FF] p-4 rounded-lg">
          <span className="text-[#0162EF] font-regular text-sm mb-2">Groupes associés :</span>
          {groupNames.length === 0 && <p>Aucun groupe lié à cette sortie</p>}
          <ul>
            {groupNames.map(name => {
              return (
                <li key={name} className="flex justify-between items-center mb-1">
                  <span>{name}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-4 flex flex-col gap-2 items-center">
          <MultiselectParticle
            label="Ajouter des groupes"
            options={allGroups.filter(g => !groupIds.includes(g.id))}
            selected={allGroups.filter(g => groupIds.includes(g.id))}
            onChange={(selectedGroups) => {
              const newGroupIds = selectedGroups.map(g => g.id);
              handleUpdateGroupAssociations(newGroupIds);
            }}
          />
        </div>
      </div>
    </div>
    // </ProtectedRoute>
  );
}

export default TripDetails;