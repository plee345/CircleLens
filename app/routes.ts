import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("profile", "routes/profile.tsx"),
  route("leaderboard", "routes/leaderboard.tsx"),
  route("dailyrotation", "routes/dailyrotation.tsx"),
] satisfies RouteConfig;
