import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShowsIndex from "../views/ShowsIndex.vue";
import ShowsShow from "../views/ShowsShow.vue";
import ShowsNew from "../views/ShowsNew.vue";
import ShowsUpdate from "../views/ShowsUpdate.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/shows",
    name: "shows",
    component: ShowsIndex,
  },
  {
    path: "/shows/:id",
    name: "shows-show",
    component: ShowsShow,
  },
  {
    path: "/shows/new",
    name: "shows-create",
    component: ShowsNew,
  },
  {
    path: "/shows/update",
    name: "shows-update",
    component: ShowsUpdate,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
