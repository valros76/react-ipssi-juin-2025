import HomeView from "~/pages/HomeView/HomeView";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Accueil React Ipssi" },
    { name: "description", content: "Page d'accueil du projet React avec l'IPSSI." },
  ];
}

export default function Home() {
  return <HomeView/>;
}
