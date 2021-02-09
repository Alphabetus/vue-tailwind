import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/Homepage.vue";
import CatAge from "../views/CatAge.vue";
import Payload from "../views/Payload.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage
  },
  {
    path: "/cat-age",
    name: "CatAge",
    component: CatAge
  },
  {
    path: "/payload-handling",
    name: "Payload",
    component: Payload
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("../views/Chat")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
