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
    .select("group_id, Group(name)")
    .eq("trip_id", tripId);

  if (tripGroupsError) {
    console.error("Erreur lors de la récupération des Trip_Group :", tripGroupsError);
    return {members: [], groupNames: [], groupIds: []};
  }

  const groupIds = tripGroups.map((tg) => tg.group_id);
  const groupNames = tripGroups.map((tg) => tg.Group?.name).filter(Boolean);

  if (groupIds.length === 0) return {members: [], groupNames, groupIds};

  // get all member_id from Group_Member
  const {data: groupMembers, error: groupMembersError} = await supabase
    .from("Group_Member")
    .select("member_id")
    .in("group_id", groupIds);

  if (groupMembersError) {
    console.error("Erreur lors de la récupération des Group_Member :", groupMembersError);
    return {members: [], groupNames, groupIds};
  }

  const memberIds = groupMembers.map((gu) => gu.member_id);
  if (memberIds.length === 0) return {members: [], groupNames, groupIds};

  const {data: members, error: membersError} = await supabase
    .from("Member")
    .select("*")
    .in("id", memberIds);

  if (membersError) {
    console.error("Erreur lors de la récupération des utilisateurs :", membersError);
    return {members: [], groupNames, groupIds};
  }

  return {members, groupNames, groupIds};
}

async function addGroupToTrip(tripId, groupId) {
  const {data, error} = await supabase
    .from("Trip_Group")
    .insert({trip_id: tripId, group_id: groupId})
    .select();

  // .single();

  if (error && error.code === "23505") {
    return {error: new Error("Groupe déjà associé à cette sortie.")};
  }
  console.log("Ajout du groupe :", {trip_id: tripId, group_id: groupId});

  return {data, error};
}

async function removeGroupFromTrip(tripId, groupId) {
  const {data, error} = await supabase
    .from("Trip_Group")
    .delete()
    .eq("trip_id", tripId)
    .eq("group_id", groupId);

  return {data, error};
}

export {getAllTrips, getMembersByTripId, addGroupToTrip, removeGroupFromTrip};
