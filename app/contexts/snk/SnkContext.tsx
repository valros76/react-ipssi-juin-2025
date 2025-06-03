import { createContext, type ReactNode } from "react";

export const SnkContext = createContext<any>(null!);

export const SnkProvider = ({children}: {children:ReactNode}) => {
  const apiRoot = "https://api.attackontitanapi.com/characters";


  return(
    <SnkContext.Provider value={{apiRoot}}>
      {children}
    </SnkContext.Provider>
  );
}