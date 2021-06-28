import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Lawer from "../views/RegisterLawer.vue";
import Change from "../views/ChangePassword.vue";
import New from "../views/NewPassword.vue";
import Tramite from "../views/Tramites.vue";
import Details from  "../views/TramiteDetail.vue";
import Sub from "../views/subCat.vue";
import Prd from "../views/Procedures.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    props: true
  },
  {
    path: "/lawer",
    name: "lawer",
    component: Lawer,
    props: true
  },
  {
    path: "/change",
    name: "change",
    component: Change,
    props: true
  },
  {
    path: "/new",
    name: "new",
    component: New,
    props: true
  },
  {
    path: "/tramites",
    name: "tramite",
    component: Tramite,
    props: true
  },
  {
    path: "/details",
    name: "details",
    component: Details,
    props: true
  },
  {
    path: "/sub",
    name: "sub",
    component: Sub,
    props: true
  },
  {
    path: "/prd",
    name: "prd",
    component: Prd,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;