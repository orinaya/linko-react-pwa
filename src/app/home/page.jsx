'use client'

import ProtectedRoute from "@/components/layout/ProtectedRoutes"
import { useProfiles } from "@/contexts/ProfileContext"
import useGroupsByProfileHook from "@/hooks/useGroupsByProfileHook"
import useTripsByProfileHook from "@/hooks/useTripsByProfileHook"
import { formatLongDate } from "@/utils/date"
import { useEffect } from "react"

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

function Home() {
  const { currentProfile } = useProfiles();
  const profileId = currentProfile?.id;
  const { trips, loading, error, setLoading, setTrips } = useTripsByProfileHook(profileId);
  const { groups, setGroups } = useGroupsByProfileHook(profileId);

  const ongoingTrips = trips?.filter(trip => trip.state === 'en cours') || []
  const upcomingTrips = trips?.filter(trip => trip.state === 'à venir') || []

  useEffect(() => {
    if (!profileId) {
      setTrips([]);
      setGroups([]);
      setLoading(false);
    }
  }, [profileId, setTrips, setLoading]);

  return (
    <>
      {/* <ProtectedRoute> */}
      <h2 className="text-xl font-semibold mb-4">Sorties en cours</h2>

      {loading && <p>Chargement...</p>}
      {error && <p className="text-red-500">Erreur : {error.message}</p>}

      <div>
        {ongoingTrips.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {ongoingTrips.map((trip) => (
              <li key={trip.id} className="bg-white p-4 rounded-lg shadow">
                <p className="font-bold">{trip.title}</p>
                <p>{trip.description}</p>
                <p>Début : {formatLongDate(trip.start_date)}</p>
                <p>Fin : {formatLongDate(trip.end_date)}</p>
                <p>Lieu : {trip.place}</p>
                <p>État : {trip.state}</p>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>Aucune sortie en cours</p>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-4">Prochaines sorties</h2>

      {loading && <p>Chargement...</p>}
      {error && <p className="text-red-500">Erreur : {error.message}</p>}

      <div>
        {upcomingTrips.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {upcomingTrips.map((trip) => (
              <li key={trip.id} className="bg-white p-4 rounded-lg shadow">
                <p className="font-bold">{trip.title}</p>
                <p>{trip.description}</p>
                <p>Début : {formatLongDate(trip.start_date)}</p>
                <p>Fin : {formatLongDate(trip.end_date)}</p>
                <p>Lieu : {trip.place}</p>
                <p>État : {trip.state}</p>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>Aucune sortie en cours</p>
        )}
      </div>

      <h2>Mes groupes</h2>
      {loading && <p>Chargement des groupes...</p>}
      {error && <p className="text-red-500">Erreur : {error.message}</p>}

      <div>
        {groups && groups.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {groups.map((group) => (
              <li key={group.id} className="bg-white p-4 rounded-lg">
                <p>{group.name}</p>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>Aucun groupe trouvé</p>
        )}
      </div>


      {/* </ProtectedRoute> */}
    </>
  )
}

export default Home;