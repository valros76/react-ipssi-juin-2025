import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("films", [
    index("routes/films.tsx"),
    route(":filmId", "routes/film-details.tsx")
  ]),
  ...prefix("futurama", [
    index("routes/futurama.tsx"),
    route(":characterId", "pages/FuturamaCharacterView")
  ]),
  route("*", "routes/error.tsx")
] satisfies RouteConfig;
