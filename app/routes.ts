import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index/index.jsx"),
  route("flash-shopping", "routes/flash-shopping/index.jsx"),
  route("select-store", "routes/select-store/index.jsx"),
  route("shopping-list", "routes/shopping-list/index.jsx"),
  route("navigation", "routes/navigation/index.jsx"),
  route("chef-journey", "routes/chef-journey/index.jsx"),
  route("know-your-limit", "routes/know-your-limit/Home/index.jsx"),
  route("know-your-limit/onboarding", "routes/know-your-limit/Onboarding/index.jsx"),
  route("know-your-limit/activate-sticker", "routes/know-your-limit/ActivateSticker/index.jsx"),
  route("know-your-limit/history", "routes/know-your-limit/History/index.jsx"),
  route("know-your-limit/profile", "routes/know-your-limit/Profile/index.jsx"),
  route("know-your-limit/manage-contacts", "routes/know-your-limit/ManageContacts/index.jsx"),
  route("know-your-limit/check-level", "routes/know-your-limit/CheckLevel/index.jsx"),
  route("know-your-limit/feedback", "routes/know-your-limit/Feedback/index.jsx"),
  route("know-your-limit/recommendation", "routes/know-your-limit/Recommendation/index.jsx"),
  route("know-your-limit/emergency", "routes/know-your-limit/Emergency/index.jsx"),
  route("know-your-limit/trusted-contact", "routes/know-your-limit/TrustedContact/index.jsx"),
] satisfies RouteConfig;
