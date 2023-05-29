import { createWebHistory, createRouter } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AboutPage from './pages/AboutPage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ProjectPage from './pages/ProjectPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage
        }, {
            path: '/projects/:slug',
            name: 'project',
            component: ProjectPage
        },



    ]
});

export { router };