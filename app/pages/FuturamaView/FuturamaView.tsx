import { useContext, useEffect, useState } from "react";
import { FuturamaContext } from "~/contexts/futurama/FuturamaContext";
import {
  type FuturamaCharactersI,
  type FuturamaCharactersResponseI,
  type FuturamaEpisodesI,
  type FuturamaEpisodesResponseI,
  type FuturamaSeasonEpisodeI,
  type FuturamaSeasonI,
} from "~/models/futurama.interface";

export default function FuturamaView() {
  const {
    title,
    getCharacters,
    getEpisodes,
    getRandomSeason,
  } = useContext(FuturamaContext);

  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState(
    {} as FuturamaCharactersResponseI
  );
  const [episodes, setEpisodes] = useState(
    {} as FuturamaEpisodesResponseI
  );
  const [randomSeason, setRandomSeason] = useState(
    {} as FuturamaSeasonI
  );

  useEffect(() => {
    if (isLoading) {
      (async function fetchDatas() {
        const newCharacters = await getCharacters();
        if (newCharacters) {
          setCharacters(newCharacters);
        }
        const newEpisodes = await getEpisodes();
        if (newEpisodes) {
          setEpisodes(newEpisodes);
        }
        const newRandomSeason = await getRandomSeason();
        if (newRandomSeason) {
          setRandomSeason(newRandomSeason);
        }
      })();
    }
    if (characters || episodes || randomSeason) {
      setIsLoading(false);
    }
  });

  return (
    <section>
      <h2>{title ?? "Erreur de chargement des données"}</h2>
      {isLoading && (
        <p>Chargement des données en cours ...</p>
      )}
      {randomSeason && (
        <article>
          <h3>Saison {randomSeason.id}</h3>
          <table>
            {randomSeason.episodes?.map(
              (episode: FuturamaSeasonEpisodeI) => (
                <tr key={episode.id}>
                  <th>{episode.name}</th>
                  <td>{episode.number}</td>
                </tr>
              )
            )}
          </table>
        </article>
      )}
      {characters &&
        characters?.items?.map(
          (character: FuturamaCharactersI) => (
            <article key={character.id}>
              <h3>{character.name}</h3>
            </article>
          )
        )}
      {episodes &&
        episodes?.items?.map(
          (episode: FuturamaEpisodesI) => (
            <article key={episode.id}>
              <h3>Épisode : {episode.name}</h3>
              <p>
                <strong>Numéro {episode.number}</strong>
              </p>
            </article>
          )
        )}
    </section>
  );
}
