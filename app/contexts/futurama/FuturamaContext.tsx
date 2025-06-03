import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface FuturamaI{
  title: string,
  getCharacters: any,
  getEpisodes: any,
  getRandomSeason: any
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

  const getEpisodes = async () => {
    let episodes = null;
    await fetch(`${apiRoot}/episodes`)
    .then(result => result.ok && result.json())
    .then(datas => episodes = datas)
    .catch(err => console.error(`Erreur : ${err}`));
    return episodes;
  }

  const getRandomSeason = async () => {
    let season = null;
    await fetch(`${apiRoot}/random/season`)
    .then(result => result.ok && result.json())
    .then(datas => season = datas)
    .catch(err => console.error(`Erreur : ${err}`));
    return season;
  }

  return(
    <FuturamaContext.Provider value={{
      title,
      getCharacters,
      getEpisodes,
      getRandomSeason
    }}>
      {children}
    </FuturamaContext.Provider>
  );
}