import HomeView from '@/views/HomeView.vue'
import type { RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import { auth } from '@/middleware/auth'
import { guest } from '@/middleware/guest'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: auth,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter: guest,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
    beforeEnter: guest,
  },
]

export default routes
