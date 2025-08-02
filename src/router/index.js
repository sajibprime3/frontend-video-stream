import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayerView from '../views/PlayerView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/watch/:id',
        name: 'Watch',
        component: PlayerView,
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})

