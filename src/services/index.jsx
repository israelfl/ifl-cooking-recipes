import { supabase } from "../supabase/client";

export const getUserData = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

// export const getSession = async () => {
//   const { data, error } = await supabase.auth.getSession()
//   return { data, error };
// };
