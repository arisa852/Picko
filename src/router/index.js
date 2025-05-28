import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../pages/HomeView.vue';
import DefaultLayout from "../layouts/DefaultLayout.vue";

const routes = [
    {
        path: '/',
        component:DefaultLayout,
        children: [
            {
                path:'home',
                name:'home',
                component:HomeView
            }
        ]
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router