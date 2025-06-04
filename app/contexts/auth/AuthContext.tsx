import { createContext, useEffect, useState, type ReactNode } from "react";
import type { UserI } from "~/models/auth.interface";

export const AuthContext = createContext<any>(null!);

export const AuthProvider = ({children}: {children: ReactNode}) => {

  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<UserI>({} as UserI);
  const [readSessionInfos, setReadSessionInfos] = useState(true);

  const handleConnexion = (state: boolean) => {
    setIsLogged(state);
  }

  const getUserSession = () => {
    const userSession = sessionStorage.getItem("user")
    return userSession ? JSON.parse(userSession) : undefined;
  }

  const saveUserInfos = (user: UserI) => {
    if(user) sessionStorage.setItem("user", JSON.stringify(user));
  }

  const deleteUserSession = () => {
    sessionStorage.removeItem("user");
  }

  const initUser = (userDatas: UserI = {
    id:1,
    username: "Miko",
    email: "miko@test.fr"
  }) => {
    setUser(userDatas);
  }

  const resetUser = () => {
    setUser({} as UserI);
  }

  useEffect(() => {
    if(readSessionInfos){
      setReadSessionInfos(false);
      const savedUser = getUserSession();
      if(savedUser){
        setUser(savedUser);
        handleConnexion(true);
      }
    }
  }, [readSessionInfos]);

  return(
    <AuthContext.Provider value={{
      isLogged,
      handleConnexion,
      user,
      initUser,
      resetUser,
      saveUserInfos,
      getUserSession,
      deleteUserSession
    }}>
      {children}
    </AuthContext.Provider>
  );
}