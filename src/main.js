import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from '@/router/index.js';

import './style.css';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');
