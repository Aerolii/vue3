/*
 * @Author: wenyu_zxb
 * @Date: 2021-01-08 17:57:06
 * @LastEditTime: 2021-01-18 23:22:59
 * @LastEditors: wenyu_zxb
 * @Description: 路由
 * @FilePath: /vite-project-js/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@views/home/Home.vue')

const Cinema = () => import('@views/cinema/Cinema.vue')

const Profile = () => import('@views/profile/Profile.vue')

const routes = [
  {
    path: '/',
    name: 'Root',
    redirect: '/cinema'
  },
  {
    path: '/home',
    components: {
      default: Home
    },
    meta: { transition: 'slide-left' }
  },
  {
    path: '/cinema',
    components: {
      default: Cinema
    },
    meta: { transition: 'slide-left' }
  },
  {
    path: '/profile',
    components: {
      default: Profile
    },
    meta: { transition: 'slide-left' }
  }
]

const router = createRouter({ routes, history: createWebHistory() })

export default router
