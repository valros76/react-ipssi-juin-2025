import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Connexion" },
    { name: "description", content: "Simulation de connexion utilisateur" },
  ];
}

export default function Connexion() {
  return (
    <></>
  );
}
