import { getMembersByGroup } from "@/services/user-datas/group";
import { useEffect, useState } from "react";

function useGroupMembersHook(groupId) {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!groupId) return;

    async function fetchMembers() {
      try {
        const result = await getMembersByGroup(groupId);
        setMembers(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchMembers();
  }, [groupId]);

  console.log("Members in useGroupMembersHook:", members);
  return {
    all: members,
    accompagnateurs: members.filter((m) => m.roleIds.includes(2)),
    eleves: members.filter((m) => m.roleIds.includes(5)),
    loading,
    error,
  };
}

export default useGroupMembersHook;