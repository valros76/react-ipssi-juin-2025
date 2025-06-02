import { NavLink } from "react-router";
import { type FilmI } from "~/models/films.interface";
import { films } from "~/stores/films-datas";
import "./FilmsListComponent.css";
export default function FilmsListComponent() {
  const filmsList = films.map((film: FilmI) => (
    <article
      className="grid-articles"
      key={film.id}
    >
      <h2>
        {film.title} - {film.year}
      </h2>
      <img
        src={film.image}
        alt={`${film.title} - ${film.year}`}
      />
      <NavLink
        to={`/films/${film.id}`}
        className="cta"
      >
        Voir les détails
      </NavLink>
    </article>
  ));

  return filmsList;
}
