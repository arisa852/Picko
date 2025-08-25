import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import Whattoeat from '../pages/Whattoeat.vue'
import EatlocationView from '../pages/EatlocationView.vue'
import WhattowearView from '../pages/WhattowearView.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'eat',
        name: 'eat',
        component: Whattoeat,
      },
      {
        path: 'eat/location',
        name: 'EatLocation',
        component: EatlocationView,
      },
      {
        path: 'wear',
        name: 'wear',
        component: WhattowearView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
