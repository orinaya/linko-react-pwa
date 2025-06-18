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
import useGroupsByProfileHook from "@/hooks/useGroupsByProfileHook";
import useGroupMembersHook from "@/hooks/useGroupMembersHook";
import { FiMoreVertical, FiUserPlus } from "react-icons/fi";
import ButtonParticle from "@/components/particles/ButtonParticle";


function GroupDetails() {

  const params = useParams();
  const rawParam = params?.path;
  const groupId = rawParam ? parseInt(rawParam.split("-")[0]) : null;

  const { currentProfile } = useProfiles();
  const profileId = currentProfile?.id;

  const { groups, loading, error } = useGroupsByProfileHook(profileId);
  const { members, loading: membersLoading, error: membersError } = useGroupMembersHook(groupId);
  const [currentGroup, setCurrentGroup] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);
  useEffect(() => {
    if (!groups || !groupId) return;

    const found = groups.find(g => g.id === groupId);
    setCurrentGroup(found || null);
  }, [groups, groupId]);

  useEffect(() => {
    if (!members) return;
    const filtered = members.filter(member =>
      `${member.firstname} ${member.lastname}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMembers(filtered);
  }, [members, searchTerm]);
  console.log("Params:", params);
  console.log("groupId:", groupId);
  if (loading) return <p className="p-6">Chargement du groupe...</p>;
  if (error) return <p className="p-6 text-red-600">Erreur : {error.message}</p>;
  if (!currentGroup) return <p className="p-6">Groupe introuvable</p>;

  console.log("Members:", members);
  return (
    // <ProtectedRoute>
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        {currentGroup.image ? (
          <div className="mb-4">
            <img
              src={currentGroup.image}
              alt={currentGroup.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ) : (
          <div className="w-20 h-20 rounded-full bg-green-200 flex items-center justify-center">
            <LuImage className="text-green-700 w-2/5 h-2/5" />
          </div>
        )}
        <div className="flex flex-col items-center gap-0 mt-2.5">
          <h1 className="text-xl font-semibold">{currentGroup.name}</h1>
        </div>

        <div className="mt-6 w-full max-w-2xl p-4 bg-white rounded-xl gap-3 flex flex-col mb-8">
          <div className="flex gap-3 justify-between">
            <div className="flex flex-col gap-2 bg-[#EBF3FF] p-4 rounded-lg justify-center w-2/5 ">
              <span className="text-[#0162EF] font-regular text-sm">Effectif</span>
              <span>{members.length} pers.</span>
            </div>
            <div className="flex flex-col gap-2 bg-[#EBF3FF] p-4 rounded-lg justify-center w-3/5">
              <span className="text-[#0162EF] font-regular text-sm">Gérant du groupe</span>
              <span>Isabelle</span>
            </div>
          </div>
          <div className="flex justify-between items-center bg-[#EBF3FF] p-4 rounded-lg">
            <span className="text-[#0162EF] font-regular text-sm">Effectif connecté</span>
            <div className="font-medium text-md">
              <span className="font-bold text-2xl">12</span>
              {' '}/{members.length}
            </div>
          </div>
          <ButtonParticle
            title="Ajouter des membres"
            variant="primary"
            color="blue"
            onClick={() => setOpen(true)}
            className="w-full mb-1"
            iconBefore={FiUserPlus}
          />
          <ButtonParticle
            title="Ajouter des accompagnateurs"
            variant="secondary"
            color="blue"
            onClick={() => setOpen(true)}
            className="w-full"
            iconBefore={FiUserPlus}
          />
        </div>


      </div>
      <div className="flex flex-col justify-between items-start mb-3">
        {/* <h2 className="text-lg font-semibold">Membres ({members.length})</h2> */}
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">Membres <span className="font-semibold text-sm bg-[#FFE3CC] text-[#FF7401] px-2.5 py-1 rounded-md">{members.length}</span></h2>
        <input
          type="text"
          placeholder="Rechercher un membre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 bg-gray-50 rounded-lg px-3 py-3 text-sm w-full"
        />
      </div>
      {membersLoading && <p>Chargement des membres...</p>}
      {membersError && <p className="text-red-600">Erreur lors du chargement des membres</p>}
      {!membersLoading && members.length === 0 && <p>Aucun membre dans ce groupe</p>}

      {filteredMembers.length > 0 && (
        <ul className="flex flex-col gap-4 w-full">
          {filteredMembers.map((member) => (
            <li key={member.id} className="bg-white px-4 py-2 rounded-xl flex items-center gap-4">
              <img
                src={member.avatarUrl}
                alt={`Avatar de ${member.firstname}`}
                className="w-16 h-16 rounded-full object-cover"
              />
              <p>{member.firstname} {member.lastname}</p>
              <div className="ml-auto flex items-center relative">
                <button
                  onClick={() => {/* gérer menu options membre ici */ }}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                  aria-label="Options"
                >
                  <FiMoreVertical className="text-xl" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>


    // <div className="mt-6 w-full max-w-2xl p-4 bg-white rounded-xl gap-3 flex flex-col">
    //     <div className="flex gap-3 justify-between">
    //       <div className="flex flex-col gap-2 bg-[#EBF3FF] p-4 rounded-lg items-center justify-center w-full">
    //         <span className="text-[#0162EF] font-regular text-sm">Date de départ</span>
    //         <span>{formatDate(trip.start_date)}</span>
    //       </div>
    //       <div className="flex flex-col gap-2 bg-[#EBF3FF] p-4 rounded-lg items-center justify-center w-full">
    //         <span className="text-[#0162EF] font-regular text-sm">Date de retour</span>
    //         <span>{formatDate(trip.end_date)}</span>
    //       </div>
    //     </div>
    //     <div className="flex flex-col justify-center items-start bg-[#EBF3FF] p-4 rounded-lg">
    //       <span className="text-[#0162EF] font-regular text-sm">Description</span>
    //       <span>{trip.description}</span>
    //     </div>
    //     <div className="flex justify-between bg-[#EBF3FF] p-4 rounded-lg items-center">
    //       <span className="text-[#0162EF] font-regular text-sm">Effectif à prévoir</span>
    //       <span>{effectif}/{effectif}</span>
    //     </div>
    //     <div className="flex flex-col gap-2 bg-[#EBF3FF] p-4 rounded-lg">
    //       <span className="text-[#0162EF] font-regular text-sm mb-2">Groupes associés :</span>
    //       {groupNames.length === 0 && <p>Aucun groupe lié à cette sortie</p>}
    //       <ul>
    //         {groupNames.map(name => {
    //           return (
    //             <li key={name} className="flex justify-between items-center mb-1">
    //               <span>{name}</span>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //     <div className="mt-4 flex flex-col gap-2 items-center">
    //       <MultiselectParticle
    //         label="Ajouter des groupes"
    //         options={allGroups.filter(g => !groupIds.includes(g.id))}
    //         selected={allGroups.filter(g => groupIds.includes(g.id))}
    //         onChange={(selectedGroups) => {
    //           const newGroupIds = selectedGroups.map(g => g.id);
    //           handleUpdateGroupAssociations(newGroupIds);
    //         }}
    //       />
    //     </div>
    //   </div> 
    //   </div >
    // </div >
    // </ProtectedRoute>
  );
}

export default GroupDetails;