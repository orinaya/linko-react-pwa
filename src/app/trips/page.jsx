'use client'

import useTripHook from "@/hooks/TripHook";

function Trips() {
  const { trips, setTrips } = useTripHook()


  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString.replace(" ", "T"));
    return date.toLocaleString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <>
      <div>
        {trips && trips.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {trips.map((trip) => (
              <li key={trip.id} className="bg-white p-4 rounded-lg">
                <p>{trip.title}</p>
                <p>{trip.description}</p>
                <p>{formatDate(trip.start_date)}</p>
                <p>{formatDate(trip.end_date)}</p>
                <p>{trip.place}</p>
                <p>{trip.state}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun utilisateur</p>
        )}
      </div>
    </>
  );
}

export default Trips;