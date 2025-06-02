import { type FilmI } from "~/models/films.interface";

export const films: FilmI[] = [
    {
      id: 1,
      title: "Lilo et Stitch",
      image:
        "https://m.media-amazon.com/images/M/MV5BNmM2Y2RlMTEtOGJjYi00NDM4LTg5ZmQtNjhmOTg0Njk3YTU1XkEyXkFqcGc@._V1_FMjpg_UX2048_.jpg",
      tags: ["Alien invasion", "Comedy", "Adventure"],
      year: "2025",
      target: "Tous publics",
      duration: "1h 48min", // Convertir en minutes, puis utiliser INTL
      grade: 7,
      maxGrade: 10,
    },
    {
      id: 2,
      title: "Karate Kid: Legends",
      image:
        "https://m.media-amazon.com/images/M/MV5BNGQzMThlMzItNDNjYS00MzZlLTkxODEtY2Y3ZTY4N2QwNjYwXkEyXkFqcGc@._V1_FMjpg_UX2000_.jpg",
      tags: ["Martial arts", "Action", "Family"],
      year: "2025",
      target: "PG-13",
      duration: "1h 34min",
      grade: 6.7,
      maxGrade: 10,
    }
  ];