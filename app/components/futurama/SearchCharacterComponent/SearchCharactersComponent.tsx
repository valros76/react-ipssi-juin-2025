import { useEffect, useState } from "react";
import type { FuturamaCharactersI } from "~/models/futurama.interface";
import "./SearchCharactersComponent.css";

export default function SearchCharacters({
  characters,
}: {
  characters: FuturamaCharactersI[];
}) {
  const [searchCharacter, setSearchCharacter] =
    useState("");
  const [filtredCharacters, setFiltredCharacters] =
    useState<FuturamaCharactersI[]>(characters ?? []);

  const handleSearch = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    setSearchCharacter(e.currentTarget.value);
  };

  const handleSubmit = (formData: FormData) => {
    const id = Number(formData.get("characterName"));
    if (typeof id !== "number") return;
    alert(`Votre recherche : ${id}.`);
  };

  useEffect(() => {
    if (searchCharacter) {
      const filtered = characters.filter((char) =>
        char.name
          .toLowerCase()
          .includes(searchCharacter.toLowerCase())
      );
      setFiltredCharacters(filtered);
    } else {
      setFiltredCharacters(characters);
    }
  }, [searchCharacter, characters]);

  return (
    <form action={handleSubmit}>
      <label htmlFor="characterName">
        Nom du personnage
      </label>
      <input
        type="text"
        name="characterName"
        id="characterName"
        list="filtredCharacters"
        onKeyUp={handleSearch}
        required
      />
      {filtredCharacters.length > 0 && (
        <datalist id="filtredCharacters">
          {filtredCharacters.map(
            (character: FuturamaCharactersI) => (
              <option
                value={character.id}
                key={character.id}
              >
                {character.name}
              </option>
            )
          )}
        </datalist>
      )}
      <button type="reset">Reset</button>
    </form>
  );
}
