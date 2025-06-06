import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("films", [
    index("routes/films.tsx"),
    route(":filmId", "routes/film-details.tsx")
  ]),
  ...prefix("futurama", [
    index("routes/futurama.tsx"),
    route(":characterId", "pages/FuturamaCharacterView/FuturamaCharacterView.tsx")
  ]),
  route("nasa", "routes/nasa.tsx"),
  route("connexion", "routes/connexion.tsx"),
  route("profile", "pages/ProfileView/ProfileView.tsx"),
  route("deconnexion", "pages/DeconnexionView/DeconnexionView.tsx"),
  route("*", "routes/error.tsx")
] satisfies RouteConfig;
