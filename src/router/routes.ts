import HomeView from '@/views/HomeView.vue'
import type { RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/LoginView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
]

export default routes
