import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BasketView from '../views/BasketView'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketView
  },
  {
    path: '/login',
    name: 'Log in',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Sign up',
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
