import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorView from "@/views/ErrorView.vue";
import CustomerView from "@/views/CustomerView.vue";
import SignUpView from "@/views/SignUpView.vue";
import InternView from "@/views/InternView.vue";
import AdminView from "@/views/AdminView.vue";
import InternshipsView from "@/views/InternshipsView.vue";
import NewOfferView from "@/views/NewOfferView.vue";
import KKKView from "@/views/KKKView.vue";
import ContactView from "@/views/ContactView.vue";
import ApplicationView from "@/views/ApplicationView.vue";

const routes = [
  {
    path: '/',
    name: 'homeRoute',
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
  {
    path: '/admin',
    name: 'adminRoute',
    component: AdminView
  },

  {
    path: '/internships',
    name: 'internshipsRoute',
    component: InternshipsView
  },
  {
    path: '/new-offer',
    name: 'newOfferView',
    component: NewOfferView
  },

  {
    path: '/KKK',
    name: 'kkkRoute',
    component: KKKView
  },

  {
    path: '/contact',
    name: 'contactRoute',
    component: ContactView
  },

  {
    path: '/application',
    name: 'applicationRoute',
    component: ApplicationView
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
