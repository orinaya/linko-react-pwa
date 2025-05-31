import {supabase} from "../api";

async function getAllTrips() {
  const {data, error} = await supabase.from("Trip").select("*");

  if (error) {
    console.error("Erreur lors de la récupération :", error);
    return [];
  }

  return data;
}

async function getMembersByTripId(tripId) {
  // get all group with trip_id
  const {data: tripGroups, error: tripGroupsError} = await supabase
    .from("Trip_Group")
    .select("group_id")
    .eq("trip_id", tripId);

  if (tripGroupsError) {
    console.error("Erreur lors de la récupération des Trip_Group :", tripGroupsError);
    return [];
  }

  const groupIds = tripGroups.map((tg) => tg.group_id);

  if (groupIds.length === 0) return [];

  // get all member_id from Group_Member
  const {data: groupMembers, error: groupMembersError} = await supabase
    .from("Group_Member")
    .select("member_id")
    .in("group_id", groupIds);

  if (groupMembersError) {
    console.error("Erreur lors de la récupération des Group_Member :", groupMembersError);
    return [];
  }

  const memberIds = groupMembers.map((gu) => gu.member_id);
  if (membersIds.length === 0) return [];

  // get all members
  const {data: members, error: membersError} = await supabase
    .from("Member")
    .select("*")
    .in("id", memberIds);

  if (membersError) {
    console.error("Erreur lors de la récupération des utilisateurs :", membersError);
    return [];
  }

  return members;
}

export {getAllTrips, getMembersByTripId};
