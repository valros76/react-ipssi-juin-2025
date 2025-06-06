import { useEffect, useState } from "react";
import type { FuturamaCharactersI } from "~/models/futurama.interface";
import "./SearchCharactersComponent.css";
import { redirect, useNavigate } from "react-router";

export default function SearchCharacters({
  characters,
}: {
  characters: FuturamaCharactersI[];
}) {
  const navigate = useNavigate();

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
    console.log(`%c ${id}`, "color: #296;font-weight: 900;font-size:1.3rem;");
    navigate(`/futurama/${id}`);
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
      <button type="submit">
        Rechercher
      </button>
      <button type="reset">Reset</button>
    </form>
  );
}
