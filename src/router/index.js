import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BasketView from '../views/BasketView'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import ProductsView from '../views/ProductsView'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
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
