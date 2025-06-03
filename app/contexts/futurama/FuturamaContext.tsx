import { createContext, useContext, useState, type ReactNode } from "react";

interface FuturamaI{
  title: string,
  getCharacters: any
}

export const FuturamaContext = createContext<FuturamaI>(null!);

export const FuturamaProvider = ({children}: {children: ReactNode}) => {
  const apiRoot = "https://futuramaapi.com/api";
  const [title, setTitle] = useState("Futurama API");

  const getCharacters = async () => {
    let characters = null;
    await fetch(`${apiRoot}/characters`)
    .then(result => result.ok && result.json())
    .then(datas => characters = datas)
    .catch(err => console.error(`Erreur : ${err}.`));

    return characters;
  }

  return(
    <FuturamaContext.Provider value={{
      title,
      getCharacters
    }}>
      {children}
    </FuturamaContext.Provider>
  );
}