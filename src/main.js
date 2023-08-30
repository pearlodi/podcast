import './assets/style.css'
import {createRouter, createWebHistory} from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Service from './views/Service.vue'
import Courses from './views/Courses.vue'
import Contact from './views/Contact.vue'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const routes = [
    {
        path: '/',
        name:'home',
        component:Home
    },

    {
        path: '/about',
        name:'about',
        component:About
    },

    {
        path: '/service',
        name:'service',
        component:Service
    },

    {
        path:'/Courses',
        name:'courses',
        component:Courses
    },
    {
        path:'/contact',
        name:'contact',
        component: Contact
    }


]

const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
