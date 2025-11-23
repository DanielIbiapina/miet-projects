import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.jsx"),
  route("select-store", "routes/select-store/index.jsx"),
  route("shopping-list", "routes/shopping-list/index.jsx"),
  route("navigation", "routes/navigation/index.jsx"),
  route("chef-journey", "routes/chef-journey/index.jsx"),
] satisfies RouteConfig;
