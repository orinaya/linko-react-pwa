'use client'

import ProtectedRoute from "@/components/layout/ProtectedRoutes";
import LogoutButton from "@/components/Logout";
import { useGroups } from "@/contexts/GroupContext";
import { useMembers } from "@/contexts/MemberContext";

function Groups() {
  const { groups } = useGroups()
  const { members, state } = useMembers()
  return (
    <>
      {/* <ProtectedRoute> */}
      <h2>Membres</h2>
      <div>
        {groups && groups.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {groups.map((group) => (
              <li key={group.id} className="bg-white p-4 rounded-lg">
                <p >{group.name}</p>
              </li>

            ))}
          </ul>
        ) : (
          <p>Aucun utilisateur</p>
        )}
      </div>

      <h2>Membres</h2>
      <div >
        {members && members.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {members.map((member) => (
              <li key={member.id} className="bg-white p-4 rounded-lg">
                <p >{member.firstname}</p>
                <p >{member.lastname}</p>
                <p >{member.email}</p>
              </li>

            ))}
          </ul>
        ) : (
          <p>Aucun utilisateur</p>
        )}
      </div>
      {/* </ProtectedRoute> */}
    </>
  )
}

export default Groups;