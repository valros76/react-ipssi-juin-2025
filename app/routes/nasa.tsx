import NasaEarthView from "~/pages/NasaEarthView/NasaEarthView";
import type { Route } from "./+types/home";
import { NasaProvider } from "~/contexts/nasa/NasaContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nasa" },
    { name: "description", content: "Test de l'API nasa." },
  ];
}

export default function Nasa() {
  return (
    <NasaProvider>
      <NasaEarthView/>
    </NasaProvider>
  );
}
