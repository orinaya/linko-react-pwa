import {supabase} from "../api";

async function getMyProfiles() {
  const {
    data: {user},
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    console.error("Erreur lors de la récupération de l'utilisateur:", userError);
    return [];
  }
  if (!user) {
    console.error("Utilisateur non connecté");
    return [];
  }

  const {data, error} = await supabase
    .from("User_Profile")
    .select("Profile(*)")
    .eq("user_id", user.id);

  const profiles = data?.map((item) => item.profile || item.Profile);

  if (error) {
    console.error("Erreur lors de la récupération des profils:", error);
    return [];
  }

  return profiles;
}

export {getMyProfiles};
