'use client'

import ProtectedRoute from "@/components/layout/ProtectedRoutes";
import { useProfiles } from "@/contexts/ProfileContext";
import useGroupsByProfileHook from "@/hooks/useGroupsByProfileHook";
import useMembersByProfileHook from "@/hooks/useMembersByProfile";
import { useEffect } from "react";

function Groups() {
  const { currentProfile } = useProfiles();
  const profileId = currentProfile?.id;
  const { groups, loading, error, setLoading, setGroups } = useGroupsByProfileHook(profileId);
  const { members, setMembers } = useMembersByProfileHook(profileId);

  useEffect(() => {
    if (!profileId) {
      setGroups([]);
      setMembers([]);
      setLoading(false);
    }
  }, [profileId, setGroups, setMembers, setLoading]);


  if (!profileId) {
    return <p>Aucun profil sélectionné</p>;
  }
  return (
    <>
      {/* <ProtectedRoute> */}
      <h2>Groupes</h2>
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

      <h2>Membres</h2>
      {loading && <p>Chargement des membres...</p>}
      {error && <p>Erreur : {error.message}</p>}
      <div>
        {members && members.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {members.map((member) => (
              <li key={member.id} className="bg-white p-4 rounded-lg">
                <p>{member.id}</p>
                <p>{member.firstname}</p>
                <p>{member.lastname}</p>
                <p>{member.email}</p>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>Aucun membre trouvé</p>
        )}
      </div>
      {/* </ProtectedRoute> */}
    </>
  );
}

export default Groups;