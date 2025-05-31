import {supabase} from "../api";

async function getCurrentUser() {
  const {data, error} = await supabase
    .from("Users")
    .select("*, auth:auth.users(email)")
    .eq("id", userId);
  if (error) {
    console.error("Erreur lors de la récupération de l'utilisateur :", error);
    return null;
  }
  return user;
}
export {getCurrentUser};
