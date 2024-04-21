import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DevicesView from '@/views/DevicesView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/devices',
    name: 'Devices',
    component: DevicesView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
