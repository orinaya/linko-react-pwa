'use client'

import { useParams } from "next/navigation";
import useTripHook from "@/hooks/useTripHook";
import { formatDate } from "@/utils/date";
import { useEffect, useState } from "react";
import useTripMembersHook from "@/hooks/useTripMembersHook";
import ProtectedRoute from "@/components/layout/ProtectedRoutes";

function TripDetails() {
  const params = useParams();
  const tripParam = params.path;
  const tripId = tripParam?.split("-")[0];

  const { trips } = useTripHook();
  const { members, loading: membersLoading, error: membersError } = useTripMembersHook(tripId);

  const [trip, setTrip] = useState(null);
  const [effectif, setEffectif] = useState(0);

  useEffect(() => {
    if (!tripId || !trips) return;

    const currentTrip = trips.find(t => String(t.id) === tripId);
    if (!currentTrip) return;

    setTrip(currentTrip);
  }, [tripId, trips]);

  useEffect(() => {
    if (members) {
      setEffectif(members.length);
    }
  }, [members]);

  if (!trip) {
    return <p className="p-6">Sortie non trouvée...</p>;
  }

  if (membersLoading) {
    return <p className="p-6">Chargement des utilisateurs...</p>;
  }

  if (membersError) {
    return <p className="p-6 text-red-600">Erreur lors du chargement des utilisateurs.</p>;
  }


  return (
    <ProtectedRoute>
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
              <span className="text-green-700 font-bold text-2xl">AA</span>
            </div>
          )}
          <h1 className="text-xl font-bold mt-2.5">{trip.title}</h1>

        </div>
        <div className="mt-6 w-full max-w-2xl p-4 bg-white rounded-xl gap-3 flex flex-col">
          <div className="flex gap-3 justify-between">
            <div className="flex flex-col gap-2 bg-[#EBF3FF] p-4 rounded-lg items-center justify-center w-full">
              <span className="text-[#0162EF] font-regular text-sm">Date de départ</span>
              <span>{formatDate(trip.start_date)}</span>
            </div>
            <div className="flex flex-col gap-2 bg-[#EBF3FF] p-4 rounded-lg items-center justify-center w-full">
              <span className="text-[#0162EF] font-regular text-sm">Date de départ</span>
              <span>{formatDate(trip.start_date)}</span>
            </div>
          </div>
          <div className="flex justify-between bg-[#EBF3FF] p-4 rounded-lg items-center">
            <span className="text-[#0162EF] font-regular text-sm">Effectif à prévoir</span>
            <span>{effectif}</span>
          </div>
        </div>


      </div>
    </ProtectedRoute>
  );
}

export default TripDetails;