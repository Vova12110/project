import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Импортируйте компоненты, которые будут отображаться на разных маршрутах
import Home from './components/Home.vue';
import About from './components/About.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About }
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
