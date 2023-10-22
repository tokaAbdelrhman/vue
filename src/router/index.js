import { createRouter, createWebHistory } from "vue-router";
import MyMain from "@/views/MyMain";

const routes = [
  {
    name: "my_main",
    path: "/test",
    component: MyMain,
    meta: {
      title: "My main Page",
      description: " this is a main page",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
