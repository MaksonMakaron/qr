import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      layout: "default",
    },
  },
  {
    path: "/visit/:contact_id",
    name: "visit",
    component: () => import("@/views/Visit.vue"),
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
