'use client'

import ButtonParticle from "@/components/particles/ButtonParticle";
import { useState } from 'react';
import { useGroups } from "@/contexts/GroupContext";
import useTripHook from "@/hooks/useTripHook";
import { IoFootstepsOutline } from "react-icons/io5";
import ImageInputParticle from '@/components/particles/ImageInputParticle';
import MultiselectParticle from '@/components/particles/MultiselectParticle';
import FormInputParticle from '@/components/particles/FormInputParticle';
import SectionComponent from "@/components/SectionComponent";
import BottomSheetComponent from '@/components/BottomSheetComponent';
import { formatDate, getTodayDateString } from "@/utils/date";
import ProtectedRoute from "@/components/layout/ProtectedRoutes";

function Trips() {
  const { trips, setTrips } = useTripHook()

  // filter trips by state
  // 'en cours', 'à venir', 'terminée'
  const ongoingTrips = trips?.filter(trip => trip.state === 'en cours') || []
  const upcomingTrips = trips?.filter(trip => trip.state === 'à venir') || []
  const pastTrips = trips?.filter(trip => trip.state === 'terminée') || []

  // group context
  const { groups } = useGroups();

  // State for the bottom sheet
  const [open, setOpen] = useState(false);
  // State for the form inputs
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(getTodayDateString());
  const [endDate, setEndDate] = useState(getTodayDateString());
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [image, setImage] = useState(null);


  return (
    <>
      {/* <ProtectedRoute> */}
      <ButtonParticle
        title="Créer une sortie"
        variant="primary"
        color="blue"
        onClick={() => setOpen(true)}
        className="w-full"
        iconBefore={IoFootstepsOutline}
      />
      <SectionComponent title="Sorties en cours" datas={ongoingTrips} formatDate={formatDate} />
      <SectionComponent title="Sorties à venir" datas={upcomingTrips} formatDate={formatDate} />
      <SectionComponent title="Sorties terminées" datas={pastTrips} formatDate={formatDate} />

      <BottomSheetComponent isOpen={open} onClose={() => setOpen(false)}>
        <form className="flex flex-col gap-4">
          <FormInputParticle
            label="Nom de la sortie"
            type="text"
            id="title"
            name="title"
            placeholder="Entrez le nom de la sortie"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className='flex gap-4'>
            <FormInputParticle
              label="Date de début"
              type="date"
              id="startDate"
              name="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <FormInputParticle
              label="Date de fin"
              type="date"
              id="endDate"
              name="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>


          <MultiselectParticle
            label="Groupe(s)"
            options={groups}
            selected={selectedGroups}
            onChange={setSelectedGroups}
          />
          <ImageInputParticle
            label="Image de la sortie"
            onChange={(file) => setImage(file)}
          />
          <button type="submit" className="bg-[#0162EF] text-white px-4 py-2 rounded-md">
            Enregistrer
          </button>
        </form>
      </BottomSheetComponent>
      {/* </ProtectedRoute> */}
    </>
  );
}

export default Trips;