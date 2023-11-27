import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import( "../views/AboutView.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/error/404.vue"),
  },
  {
    path: "/calculator/:id",
    name: "calculator",
    component: () => import("../views/CalculatorView.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
