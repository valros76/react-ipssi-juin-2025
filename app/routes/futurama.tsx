import { FuturamaContext, FuturamaProvider } from "~/contexts/futurama/FuturamaContext";
import type { Route } from "../+types/root";
import { useContext } from "react";
import FuturamaView from "~/pages/FuturamaView/FuturamaView";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Futurama" },
    {
      name: "description",
      content: "Test communication API futurama",
    },
  ];
}

export default function Futurama() {

  return (
    <FuturamaProvider>
      <FuturamaView/>
    </FuturamaProvider>
  );
}
