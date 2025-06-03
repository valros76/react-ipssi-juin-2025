import { useContext, useEffect, useState } from "react";
import { FuturamaContext } from "~/contexts/futurama/FuturamaContext";
import type { FuturamaCharactersI } from "~/models/futurama.interface";
import "./CharacterDetails.css";

export default function CharacterDetails({
  id,
}: {
  id: number;
}) {
  const { getCharacters } = useContext(FuturamaContext);

  const [character, setCharacter] =
    useState<FuturamaCharactersI | null>(null);

  useEffect(() => {
    if (!character) {
      (async function fetchDatas() {
        const charactersList = await getCharacters();
        if (charactersList) {
          let actualCharacter = charactersList.items.filter(
            (character: FuturamaCharactersI) =>
              id === Number(character.id)
          )[0];
          setCharacter(actualCharacter);
        }
      })();
    }
  }, [character]);

  if (!character)
    return (
      <p>
        Tentative de récupération des données en cours...
      </p>
    );

  return (
    <section>
      <article>
        <h2>Personnage n°{character.id} - {character.name}</h2>
        <img src={character.image} alt={`Image de ${character.name}`} />
        <table>
          <thead>
            <tr>
              <th>Genre</th>
              <th>État</th>
              <th>Race</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {character.gender}
              </td>
              <td>
                {character.status}
              </td>
              <td>
                {character.species}
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  );
}
