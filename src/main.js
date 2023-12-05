import './assets/main.css'

import { createApp } from 'vue'
// import App from './App.vue'
import Layout from "@/Layout.vue"
import { createRouter, createWebHashHistory } from "vue-router"


import HomePage from "@/pages/Home.vue"
import AboutPage from "@/pages/About.vue"
import PrivacyPage from "@/pages/Privacy.vue"

const routes = [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/privacy", component: PrivacyPage },
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })


createApp(Layout).use(router).mount('#app')
