'use client'

import ProtectedRoute from "@/components/layout/ProtectedRoutes";
import ButtonParticle from "@/components/particles/ButtonParticle";
import { useProfiles } from "@/contexts/ProfileContext";
import useGroupsByProfileHook from "@/hooks/useGroupsByProfileHook";
import useMembersByProfileHook from "@/hooks/useMembersByProfile";
import { useEffect } from "react";
import { FiMoreVertical, FiUser } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LuImage } from "react-icons/lu";

function Groups() {
  const { currentProfile } = useProfiles();
  const profileId = currentProfile?.id;
  const { groups, loading, error, setLoading, setGroups } = useGroupsByProfileHook(profileId);
  const { members, setMembers } = useMembersByProfileHook(profileId);

  useEffect(() => {
    if (profileId === null || profileId === undefined) {
      setGroups([]);
      setMembers([]);
      setLoading(false);
    }
  }, [profileId]);

  if (!profileId) {
    return <p>Aucun profil sélectionné</p>;
  }
  return (
    <>
      {/* <ProtectedRoute> */}
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">Groupes <span className="font-semibold text-sm bg-[#FFE3CC] text-[#FF7401] px-2.5 py-1 rounded-md">{groups.length}</span></h2>

      {loading && <p>Chargement des groupes...</p>}
      {error && <p className="text-red-500">Erreur : {error.message}</p>}

      <div>
        {groups && groups.length > 0 ? (
          <ul className="flex flex-col gap-4 mb-4">
            {groups.map((group) => (
              <li key={group.id} className="bg-white px-4 py-2 rounded-xl flex items-center gap-4">
                {/* <img
                  src={groups.avatarUrl}
                  alt={`Avatar de ${member.firstname}`}
                  className="w-16 h-16 rounded-full object-cover"
                /> */}
                <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                  <LuImage className="text-green-700 w-2/5 h-2/5" />
                </div>
                <p>{group.name}</p>
                <div className="ml-auto flex items-center relative">
                  <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="p-2 rounded-full hover:bg-gray-100 transition"
                    aria-label="Options"
                  >
                    <FiMoreVertical className="text-xl" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>Aucun membre trouvé</p>
        )}
      </div>
      <ButtonParticle
        title="Créer un groupe"
        variant="primary"
        color="blue"
        onClick={() => setOpen(true)}
        className="w-full mb-8"
        iconBefore={HiOutlineUserGroup}
      />

      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">Membres <span className="font-semibold text-sm bg-[#FFE3CC] text-[#FF7401] px-2.5 py-1 rounded-md">{members.length}</span></h2>
      {loading && <p>Chargement des membres...</p>}
      {error && <p>Erreur : {error.message}</p>}
      <div>
        {members && members.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {members.map((member) => (
              <li key={member.id} className="bg-white px-4 py-2 rounded-xl flex items-center gap-4">
                <img
                  src={member.avatarUrl}
                  alt={`Avatar de ${member.firstname}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <p>{member.firstname}{' '}{member.lastname}</p>
                {/* <p>{member.email}</p> */}
                <div className="ml-auto flex items-center relative">
                  <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="p-2 rounded-full hover:bg-gray-100 transition"
                    aria-label="Options"
                  >
                    <FiMoreVertical className="text-xl" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>Aucun membre trouvé</p>
        )}
      </div>

      <ButtonParticle
        title="Créer un membre"
        variant="primary"
        color="blue"
        onClick={() => setOpen(true)}
        className="w-full"
        iconBefore={FiUser}
      />
      {/* </ProtectedRoute> */}
    </>
  );
}

export default Groups;