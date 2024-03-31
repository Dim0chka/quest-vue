/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/:id', name: 'About', component: About},
  ]
})

export default router
