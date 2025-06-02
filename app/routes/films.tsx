import FilmsView from "~/pages/FilmsView/FilmsView";
import type { Route } from "../+types/root";
import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nos films" },
    { name: "description", content: "La liste des films." },
  ];
}

export default function Films() {
  return (<FilmsView />);
}
