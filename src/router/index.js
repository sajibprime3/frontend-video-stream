import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayerView from '../views/PlayerView.vue'
// import UploadView from '../views/UploadView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/watch/:uuid',
    name: 'Watch',
    component: PlayerView,
    props: true
  },
  {
    path: "/upload",
    name: "upload",
    component: () => import('../views/UploadView.vue'),
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../views/LoginView.vue'),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})

