import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { supabase } from "../supabase/client";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const getSession = useCallback(async () => {
    const { data, error } = await supabase.auth.getSession();
    return { data, error };
  }, []);

  const login = useCallback(async (email, password) => {
    try {
      const { data, error } = await supabase.auth
        .signInWithPassword({
          email,
          password,
        })
        .then((response) => {
          if (response.data.user) setIsAuthenticated(true);
          return response;
        });
      return { data, error };
    } catch (error) {
      console.error(error);
    }
  }, []);

  const logout = useCallback(async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
  }, []);

  const signup = useCallback(async (email, password) => {
    try {
      return await supabase.auth.signUp({ email, password });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getSession()
      .then(async (result) => {
        if (result.data.session) {
          const { data: profile } = await supabase
          .from('profiles')
          .select('id, username, avatar_url, website, roles')
          setUser({...result.data.session.user, 'profile': profile[0]});
          setIsAuthenticated(true);
        }
      })
      .catch((error) => console.error("error", "error"));
  }, [getSession]);

  const value = useMemo(
    () => ({
      login,
      logout,
      signup,
      isAuthenticated,
      user,
      getSession,
    }),
    [login, logout, signup, getSession, isAuthenticated, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
