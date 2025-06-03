import { useEffect, useState } from "react";
import type { FuturamaCharactersI } from "~/models/futurama.interface";

export default function SearchCharacters({ characters }: {characters: FuturamaCharactersI[]}) {
    const [searchCharacter, setSearchCharacter] = useState("");
    const [filtredCharacters, setFiltredCharacters] = useState({} as FuturamaCharactersI[]);

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
      // e.currentTarget.value
      console.log();
    }

    const handleSubmit = (formData: FormData) => {
      console.table(formData.entries);
    }

    useEffect(() => {
      if(characters && !filtredCharacters){
        setFiltredCharacters(characters);
      }
    }, [filtredCharacters]);

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
      {filtredCharacters && (<datalist id="filtredCharacters">
        {[...filtredCharacters]?.map((character: FuturamaCharactersI) => (
          <option value={character.name}></option>
        ))}
      </datalist>)}
    </form>
  );
}
