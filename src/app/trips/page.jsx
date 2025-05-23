'use client'

import ButtonParticle from "@/components/particles/ButtonParticle";
import useTripHook from "@/hooks/useTripHook";
import { IoFootstepsOutline } from "react-icons/io5";

function Trips() {
  const { trips, setTrips } = useTripHook()
  const ongoingTrips = trips?.filter(trip => trip.state === 'en cours') || []
  const upcomingTrips = trips?.filter(trip => trip.state === 'à venir') || []
  const pastTrips = trips?.filter(trip => trip.state === 'terminée') || []
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString.replace(" ", "T"));
    return date.toLocaleString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      // hour: "2-digit",
      // minute: "2-digit",
      // hour12: false,
    });
  };

  return (
    <>
      <ButtonParticle
        title="Créer une sortie"
        routeLink="/"
        colorBg={"bg-[#0162EF]"}
        colorText="text-[#edf9ff]"
        iconAfter={IoFootstepsOutline}
      />
      <div className="my-6">
        <div className="flex items-center gap-2 py-3.5 bg-transparent">
          <h2 className="font-semibold">Sorties en cours</h2>
          <span className="bg-[#d6efff] text-[#077cff] py-1 px-3 rounded-md text-sm font-medium">{ongoingTrips.length}</span>
        </div>
        {ongoingTrips && ongoingTrips.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {ongoingTrips.map((trip) => (
              <li key={trip.id} className="flex gap-4 bg-white p-4 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                  <span className="text-green-700 font-bold">AA</span>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">{trip.title}</p>
                  <div className="flex text-sm gap-1 text-gray-500">
                    <p className="text-sm text-gray-500">{formatDate(trip.start_date)}</p>
                    <span>au</span>
                    <p className="text-sm text-gray-500">{formatDate(trip.end_date)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucune sortie</p>
        )}
      </div >
      <div className="my-6">
        <div className="flex items-center gap-2 py-3.5 bg-transparent">
          <h2 className="font-semibold">Sorties à venir</h2>
          <span className="bg-[#d6efff] text-[#077cff] py-1 px-3 rounded-md text-sm font-medium">{upcomingTrips.length}</span>
        </div>
        {upcomingTrips && upcomingTrips.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {upcomingTrips.map((trip) => (
              <li key={trip.id} className="flex gap-4 bg-white p-4 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                  <span className="text-green-700 font-bold">AA</span>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">{trip.title}</p>
                  <div className="flex text-sm gap-1 text-gray-500">
                    <p className="text-sm text-gray-500">{formatDate(trip.start_date)}</p>
                    <span>au</span>
                    <p className="text-sm text-gray-500">{formatDate(trip.end_date)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucune sortie</p>
        )}
      </div>
      <div className="my-6">
        <div className="flex items-center gap-2 py-3.5 bg-transparent">
          <h2 className="font-semibold">Sorties terminées</h2>
          <span className="bg-[#d6efff] text-[#077cff] py-1 px-3 rounded-md text-sm font-medium">{pastTrips.length}</span>
        </div>
        {pastTrips && pastTrips.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {pastTrips.map((trip) => (
              <li key={trip.id} className="flex gap-4 bg-white p-4 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                  <span className="text-green-700 font-bold">AA</span>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">{trip.title}</p>
                  <div className="flex text-sm gap-1 text-gray-500">
                    <p className="text-sm text-gray-500">{formatDate(trip.start_date)}</p>
                    <span>au</span>
                    <p className="text-sm text-gray-500">{formatDate(trip.end_date)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucune sortie</p>
        )}
      </div>
    </>
  );
}

export default Trips;