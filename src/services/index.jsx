import { useCallback, useEffect, useState } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

export function useServices() {
  const user = useUser();
  const supabase = useSupabaseClient();
  const profileFields = "id, username, full_name, avatar_url, website, roles";
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    async function loadProfile() {
      const { data } = await supabase.from("profiles").select(profileFields);
      setUserProfile(data[0]);
    }
    // Only run query once user is logged in.
    if (user) loadProfile();
  }, [supabase, user]);

  const logout = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    console.log("logout error", error);
  }, [supabase.auth]);

  const login = useCallback(
    async (email, password) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      return { data, error };
    },
    [supabase.auth]
  );

  const signup = useCallback(
    async (email, password) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      return { data, error };
    },
    [supabase.auth]
  );

  return { login, logout, signup, user, userProfile };
}
