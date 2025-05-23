'use client'

import { useTripHook } from "@/hooks/useTripHook"

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

function Home() {
  const { trips, loading, error } = useTripHook()
  const ongoingTrips = trips?.filter(trip => trip.state === 'en cours') || []

  return (
    <>
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
                <p>Début : {formatDate(trip.start_date)}</p>
                <p>Fin : {formatDate(trip.end_date)}</p>
                <p>Lieu : {trip.place}</p>
                <p>État : {trip.state}</p>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>Aucune sortie en cours</p>
        )}
      </div>
    </>
  )
}

export default Home;