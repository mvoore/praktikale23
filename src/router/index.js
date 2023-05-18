import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorView from "@/views/ErrorView.vue";
import CustomerView from "@/views/CustomerView.vue";
import SignUpView from "@/views/SignUpView.vue";
import InternView from "@/views/InternView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/intern',
    name:'internRoute',
    component: InternView
  },

  {
    path: '/error',
    name: 'errorRoute',
    component: ErrorView
    },
  {
    path: '/customer',
    name: 'customerRoute',
    component: CustomerView
  },
  {
    path: '/signup',
    name: 'signupRoute',
    component: SignUpView
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
