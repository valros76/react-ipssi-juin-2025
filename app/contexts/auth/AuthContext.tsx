import { createContext, useState, type ReactNode } from "react";
import type { UserI } from "~/models/auth.interface";

export const AuthContext = createContext<any>(null!);

export const AuthProvider = ({children}: {children: ReactNode}) => {

  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<UserI>({} as UserI);

  const handleConnexion = (state: boolean) => {
    setIsLogged(state);
  }

  const initUser = (userDatas: UserI = {
    id:1,
    username: "Miko",
    email: "miko@test.fr"
  }) => {
    setUser(userDatas);
  }

  return(
    <AuthContext.Provider value={{
      isLogged,
      handleConnexion,
      user,
      initUser
    }}>
      {children}
    </AuthContext.Provider>
  );
}