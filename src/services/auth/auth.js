import {supabase} from "../api";

export const supabaseLogin = async ({email, password}) => {
  const {data, error} = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return {
    user: data.user,
    jwt: data.session.access_token,
  };
};

export const supabaseRegister = async ({email, password, firstname, lastname}) => {
  const {data: user, error} = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        // firstname,
        // lastname,
        full_name: `${firstname} ${lastname}`,
      },
    },
  });
  const userId = user?.id;
  if (userId) {
    const {error: insertError} = await supabase.from("User").insert({
      id: userId,
      firstname,
      lastname,
    });

    if (insertError) throw insertError;
  }

  if (error) throw error;
  return {
    user: user.user,
    jwt: user.session?.access_token || null,
  };
};

export const supabaseGetUser = async () => {
  const {
    data: {user},
    error,
  } = await supabase.auth.getUser();
  if (error) throw error;
  return user;
};
