import { createRouter, createWebHistory } from "vue-router";
import Formulario from "../views/Formulario.vue";
import ListCards from "../views/ListCards.vue";
import login from "../views/login.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Formulario",
      component: Formulario,
    },

    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/ListCards",
      name: "ListCards",
      component: ListCards,
      beforeEnter: ( to, from, next) => {
        if (!(localStorage.getItem("isLoggedIn") === "true") ) {
          next();
        } else {
          next("/login");
        }
      },
    },
  ],
});

export default router;
