import { createRouter, createWebHistory } from "vue-router";
import PlacesList from "../views/PlacesList.vue";
import PlaceDetails from "../views/PlaceDetails.vue";

const routes = [
  {
    path: "/",
    name: "Places",
    component: PlacesList,
  },
  {
    path: "/place/1",
    name: "PlaceDetails",
    component: PlaceDetails,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
