import { useContext, useEffect, useState } from "react";
import { FuturamaContext } from "~/contexts/futurama/FuturamaContext";
import { type FuturamaCharactersI, type FuturamaCharactersResponseI } from "~/models/futurama.interface";

export default function FuturamaView() {
  const { title, getCharacters } = useContext(FuturamaContext);
  
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState({} as FuturamaCharactersResponseI);

  useEffect(() => {
    if(isLoading){
      (async function fetchCharacters(){
        const newCharacters = await getCharacters();
        if(newCharacters){
          setCharacters(newCharacters);
        }
      })()
    }
    if(characters){
      setIsLoading(false);
    }
  });

  return (
    <section>
      <h2>{title ?? "Erreur de chargement des données"}</h2>
      {isLoading && (
        <p>Chargement des données en cours ...</p>
      )}
      {characters && characters?.items?.map((character: FuturamaCharactersI) => (
        <article key={character.id}>
          <h3>{character.name}</h3>
        </article>
      ))}
    </section>
  );
}
