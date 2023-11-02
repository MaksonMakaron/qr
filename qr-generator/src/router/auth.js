const Auth = [
  {
    path: "/auth/signin",
    name: "signin",
    component: () => import("@/views/Authorization.vue"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/auth/signup",
    name: "signup",
    component: () => import("@/views/Registration.vue"),
    meta: {
      layout: "auth",
    },
  },
];

export default Auth;
