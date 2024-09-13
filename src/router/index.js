import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {log_event} from "@/scripts/log_events.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

router.beforeEach((to, from) => {
  // track page changes
  log_event('page_nav', 'nav', to.name)
})


export default router
