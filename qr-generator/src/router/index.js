import { createRouter, createWebHistory } from "vue-router";
import Auth from "./auth";
import Profile from "./profile";

const mainRoutes = [
  {
    path: "/",
    name: "home",
    redirect: "/auth/signin",
    meta: {
      layout: "default",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/NotFound404.vue"),
    meta: {
      layout: "default",
    },
  },
];

const routes = mainRoutes.concat(Auth).concat(Profile);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
