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

export {getAllGroups, getTripGroups};
