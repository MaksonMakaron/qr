const Profile = [
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/Profile.vue"),
    meta: {
      layout: "profile",
      title: "Профиль",
    },
  },
  {
    path: "/generated",
    name: "generated",
    component: () => import("@/views/Generated.vue"),
    meta: {
      layout: "profile",
      title: "Зарегистрированные QR-коды",
    },
  },
  {
    path: "/profile/manage/:id?",
    name: "profileManage",
    component: () => import("@/views/ProfileAddEdit.vue"),
    meta: {
      layout: "profile",
      title: "Управление профилем",
    },
  },
];

export default Profile;
