import {supabase} from "../api";

async function getAllGroups() {
  const {data, error} = await supabase.from("Group").select("*");

  if (error) {
    console.error("Erreur lors de la récupération :", error);
    return [];
  }

  return data;
}

async function getTripGroups() {
  const {data, error} = await supabase.from("Trip_Group").select("*");

  if (error) {
    console.error("Erreur lors de la récupération des Trip_Group :", error);
    return [];
  }
  return data;
}

async function getMembersByGroup(groupId) {
  const {data, error} = await supabase
    .from("Group_Member")
    .select("member:Member(*, roles:Member_Role(role_id))")
    .eq("group_id", groupId);

  if (error) {
    console.error("Erreur lors de la récupération des membres du groupe :", error);
    return [];
  }

  const members = await Promise.all(
    (data ?? []).map(async ({member}) => {
      if (!member) return null;

      const avatarPath = member.avatar || "penguin.png";
      const cleanPath = avatarPath.startsWith("/") ? avatarPath.slice(1) : avatarPath;

      const {data: urlData, error: urlError} = supabase.storage
        .from("avatar")
        .getPublicUrl(cleanPath);

      if (urlError) {
        console.error("Erreur lors de la récupération de l'URL de l'avatar :", urlError);
      }

      return {
        ...member,
        avatarUrl: urlData?.publicUrl || null,
        roleIds: member.roles?.map((r) => r.role_id) || [],
      };
    })
  );

  console.log("Members (après enrichissement):", members);
  return members.filter(Boolean);
}
// async function getMembersByGroup(groupId) {
//   const {data, error} = await supabase
//     .from("Group_Member")
//     .select("member:Member(*, roles:Member_Role(role_id))")
//     .eq("group_id", groupId);

//   if (error) {
//     console.error("Erreur récupération membres du groupe :", error);
//     return [];
//   }

//   const rawMembers = (data ?? []).map((entry) => entry.member).filter(Boolean);

//   const members = await Promise.all(
//     rawMembers.map(async (member) => {
//       const avatarPath = member.avatar || "penguin.png";
//       const cleanPath = avatarPath.startsWith("/") ? avatarPath.slice(1) : avatarPath;

//       const {data: urlData, error: urlError} = supabase.storage
//         .from("avatar")
//         .getPublicUrl(cleanPath);

//       return {
//         ...member,
//         avatarUrl: urlData?.publicUrl || null,
//         roleIds: member.roles?.map((r) => r.role_id) || [],
//       };
//     })
//   );
//   console.log("Members:", members);
//   return members;
// }

async function getMembersAndSupervisorsByGroup(groupId) {
  const {data, error} = await supabase
    .from("Group_Member")
    .select("member:Member(*, roles:Member_Role(*))")
    .eq("group_id", groupId);

  if (error) {
    console.error("Erreur lors de la récupération des membres du groupe :", error);
    return {members: [], supervisors: []};
  }

  const rawMembers = (data ?? []).map((entry) => entry.member).filter(Boolean);

  const memberIds = rawMembers.map((m) => m.id);

  const {data: rolesData, error: rolesError} = await supabase
    .from("Member_Role")
    .select("member_id, role_id")
    .in("member_id", memberIds);

  if (rolesError) {
    console.error("Erreur lors de la récupération des rôles des membres :", rolesError);
    return {members: [], supervisors: []};
  }

  const supervisorIds = rolesData.filter((r) => r.role_id === 2).map((r) => r.member_id);

  const fullMembers = await Promise.all(
    rawMembers.map(async (member) => {
      const avatarPath = member.avatar || "penguin.png";
      const cleanPath = avatarPath.startsWith("/") ? avatarPath.slice(1) : avatarPath;

      const {data: urlData, error: urlError} = supabase.storage
        .from("avatar")
        .getPublicUrl(cleanPath);

      if (urlError) {
        console.error("Erreur URL avatar :", urlError);
      }

      return {
        ...member,
        avatarUrl: urlData?.publicUrl || null,
      };
    })
  );

  const members = fullMembers.filter((m) => !supervisorIds.includes(m.id));
  const supervisors = fullMembers.filter((m) => supervisorIds.includes(m.id));

  return {members, supervisors};
}

const createGroup = async (profileId, name) => {
  const {data, error} = await supabase
    .from("Group")
    .insert([{name, profile_id: profileId}])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export {
  getAllGroups,
  getTripGroups,
  getMembersByGroup,
  getMembersAndSupervisorsByGroup,
  createGroup,
};
