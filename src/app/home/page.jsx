'use client'

import CardComponent from "@/components/CardComponent"
import ProtectedRoute from "@/components/layout/ProtectedRoutes"
import TripCardComponent from "@/components/TripCardComponent"
import { useProfiles } from "@/contexts/ProfileContext"
import useGroupsByProfileHook from "@/hooks/useGroupsByProfileHook"
import useTripsByProfileHook from "@/hooks/useTripsByProfileHook"
import { useEffect } from "react"
import { LuImage } from "react-icons/lu"

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
      <h2 className="text-xl font-semibold mb-4">Sortie en cours</h2>

      {loading && <p>Chargement...</p>}
      {error && <p className="text-red-500">Erreur : {error.message}</p>}

      <div>
        {ongoingTrips.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {ongoingTrips.map((trip) => (
              <TripCardComponent key={trip.id} trip={trip} />
            ))}
          </ul>
        ) : (
          !loading && <p>Aucune sortie en cours</p>
        )}
      </div>
      <h2 className="text-xl font-semibold mb-4">Les dernières alertes</h2>

      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">Prochaines sorties <span className="font-semibold text-sm bg-[#FFE3CC] text-[#FF7401] px-2.5 py-1 rounded-md">{upcomingTrips.length}</span></h2>

      {loading && <p>Chargement...</p>}
      {error && <p className="text-red-500">Erreur : {error.message}</p>}

      <div className="my-6">
        {upcomingTrips.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {upcomingTrips.map((data) => (
              <CardComponent
                key={data.id}
                id={data.id}
                title={data.title}
                startDate={formatDate(data.start_date)}
                endDate={formatDate(data.end_date)}
                initials={"AA"}
              />
            ))}
          </ul>
        ) : (
          <p>Aucune donnée...</p>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">Mes groupes <span className="font-semibold text-sm bg-[#FFE3CC] text-[#FF7401] px-2.5 py-1 rounded-md">{upcomingTrips.length}</span></h2>

      {loading && <p>Chargement des groupes...</p>}
      {error && <p className="text-red-500">Erreur : {error.message}</p>}

      <div>
        {groups && groups.length > 0 ? (
          <ul className="flex gap-4">
            {groups.map((group) => (
              <li key={group.id} className="flex flex-col items-center justify-center rounded-lg gap-1.5">
                <div className="w-20 h-20 rounded-full bg-green-200 flex items-center justify-center">
                  <LuImage className="text-green-700 w-2/5 h-2/5" />
                </div>
                <p className="text-sm font-semibold">{group.name}</p>
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