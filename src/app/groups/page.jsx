'use client'

import { useGroups } from "@/contexts/GroupContext";
import { useUsers } from "@/contexts/UserContext";

function Groups() {
  const { groups } = useGroups()
  const { users, state } = useUsers()
  return (
    <>
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
        {users && users.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {users.map((user) => (
              <li key={user.id} className="bg-white p-4 rounded-lg">
                <p >{user.firstname}</p>
                <p >{user.lastname}</p>
                <p >{user.email}</p>
              </li>

            ))}
          </ul>
        ) : (
          <p>Aucun utilisateur</p>
        )}
      </div>
    </>
  )
}

export default Groups;