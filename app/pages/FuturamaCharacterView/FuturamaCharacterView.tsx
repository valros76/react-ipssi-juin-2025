import { useNavigate, useParams } from "react-router";
import CharacterDetails from "~/components/futurama/CharacterDetails/CharacterDetails";
import { FuturamaProvider } from "~/contexts/futurama/FuturamaContext";

export default function FuturamaCharacterView() {
  const params = useParams();
  const characterId = Number(params.characterId);
  const navigate = useNavigate();

  const notFound = () => {
    return navigate("/404");
  };

  console.error(typeof characterId !== "number")
  if (!characterId || typeof characterId !== "number") notFound();

  return (
    <section>
      <FuturamaProvider>
        <CharacterDetails id={characterId} />
      </FuturamaProvider>
    </section>
  );
}
