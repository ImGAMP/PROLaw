import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Lawer from "../views/RegisterLawer.vue";
import Change from "../views/ChangePassword.vue";
import New from "../views/NewPassword.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;