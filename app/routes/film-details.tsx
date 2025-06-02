import { useParams } from "react-router";
import FilmDetailsView from "~/pages/FilmDetailsView/FilmDetailsView";
import type { Route } from "../+types/root";
import { films } from "~/stores/films-datas";
import type { FilmI } from "~/models/films.interface";


export function meta({}: Route.MetaArgs){
  return [
    { title: "Détails d'un film" },
    { name: "description", content: "Consulter le détail d'un film."}
  ];
}

export default function FilmDetails(){
  return (<FilmDetailsView/>);
}