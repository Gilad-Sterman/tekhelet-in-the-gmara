import { createRouter, createWebHistory } from 'vue-router'
import English from '../views/English.vue'
import Hebrew from '../views/Hebrew.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/heb',
      name: 'Hebrew',
      component: Hebrew
    },
    {
      path: '/',
      name: 'English',
      component: English
    }
  ]
})

export default router
