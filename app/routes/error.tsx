import FilmsView from "~/pages/FilmsView/FilmsView";
import type { Route } from "../+types/root";
import { NavLink, useRouteError } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Erreur 404" },
    { name: "description", content: "Ce contenu n'existe pas." },
  ];
}

export default function Error() {
  return (
    <section className="error-sections">
      <h2>
        Erreur 404
      </h2>
      <p>
        Le contenu recherché n'existe pas !
      </p>
      <NavLink to="/">
        Retour sur la page d'accueil
      </NavLink>
    </section>
  );
}
