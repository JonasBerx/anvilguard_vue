import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PVPView from "../views/PVPView.vue";
import LoginView from "../views/LoginView.vue";
import MissionView from "../views/MissionView.vue";
import OrganisationView from "../views/OrganisationView.vue";
import MembersView from "../views/MembersView.vue";
import AdventuresView from "../views/AdventuresView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/pvp",
    name: "pvp",
    component: PVPView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/mission",
    name: "login",
    component: MissionView,
  },
  {
    path: "/organisation",
    name: "login",
    component: OrganisationView,
  },
  {
    path: "/members",
    name: "login",
    component: MembersView,
  },
  {
    path: "/adventures",
    name: "adventures",
    component: AdventuresView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    const { title } = to.meta;
    document.title = title ? `${title} - The Anvilguard` : "The Anvilguard";
  });
});

export default router;
