import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '/src/views/HomeView.vue'
import {log_event} from "@/scripts/log_events.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/events',
            name: 'events',
            component: () => import('/src/views/EventsView.vue')
        },
        {
            path: '/location',
            name: 'location',
            component: () => import('/src/views/LocationView.vue')
        },
    ]
})

router.beforeEach((to, from) => {
    // track page changes
    log_event('page_nav', 'nav', to.name)
})


export default router
