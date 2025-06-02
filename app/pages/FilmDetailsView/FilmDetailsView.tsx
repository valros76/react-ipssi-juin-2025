import { NavLink, useParams } from "react-router";
import type { FilmI } from "~/models/films.interface";
import { films } from "~/stores/films-datas";
import "./FilmDetailsView.css";
import ReviewComponent from "~/components/films/ReviewComponent/ReviewComponent";

export default function FilmDetailsView() {
  const params = useParams();
  const filmId: number = Number(params.filmId);

  if (filmId === 0) {
    throw new Error("Ce film n'existe pas.");
  }

  const film: FilmI = films.filter(
    (film: FilmI) => Number(film.id) === filmId
  )[0];

  return !film ? (
    <section className="main-sections">
      <h2>Erreur</h2>
      <p>
        Ce film n'existe pas dans notre base de données.
      </p>
      <NavLink to="/films">Retour au catalogue</NavLink>
    </section>
  ) : (
    <section className="main-sections">
      <article className="main-articles">
        <h2>
          {film.title} - {film.year}
        </h2>
        <ReviewComponent maxStars={5} />
        <img
          src={film.image}
          alt={`${film.title} - ${film.year}`}
        />
        <p>Durée : {film.duration}</p>
        <p>Public : {film.target}</p>
        <p>
          Note : {film.grade}/{film.maxGrade}
        </p>
        <aside className="tags-container">
          {film.tags &&
            film.tags.map((tag: string, idx: number) => (
              <button key={idx}>{tag}</button>
            ))}
        </aside>
      </article>
    </section>
  );
}
