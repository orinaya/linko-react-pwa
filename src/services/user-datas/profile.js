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

async function getGroupsByProfileId(profileId) {
  const {data, error} = await supabase
    .from("Profile_Group")
    .select(
      `
    group:Group (
      id,
      name,
      created_by,
      created_at,
      image_url,
      notes,
      group_admin_id
    )
  `
    )
    .eq("profile_id", profileId);
  const groups = data?.map((pg) => pg.group) ?? [];
  if (error) {
    console.error("Erreur lors de la récupération des groupes :", error);
    return [];
  }
  return groups;
}

async function getMembersByProfileId(profileId) {
  const {data, error} = await supabase
    .from("Profile_Member")
    .select("member_id, Member(*)")
    .eq("profile_id", profileId);

  if (error) throw error;

  const members =
    data?.map((pm) => {
      const member = pm.Member;
      const avatarPath = member.avatar || "penguin.png";

      const cleanPath = avatarPath.startsWith("/") ? avatarPath.slice(1) : avatarPath;

      const {data: urlData} = supabase.storage.from("avatar").getPublicUrl(cleanPath);
      const publicUrl = urlData?.publicUrl;
      return {
        ...member,
        avatarUrl: publicUrl,
      };
    }) ?? [];

  return members;
}

async function getTripsByProfileId(profileId) {
  const {data, error} = await supabase
    .from("Profile_Trip")
    .select("trip_id, Trip(*)")
    .eq("profile_id", profileId);

  if (error) throw error;
  const trips = data?.map((pt) => pt.Trip) ?? [];

  return trips;
}

export {getMyProfiles, getMembersByProfileId, getGroupsByProfileId, getTripsByProfileId};
