/*
 * @Author: wenyu_zxb
 * @Date: 2021-01-08 17:57:06
 * @LastEditTime: 2021-01-08 18:26:42
 * @LastEditors: wenyu_zxb
 * @Description: 路由
 * @FilePath: /vite-project-js/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@views/home/Home.vue')

const routes = [
  {
    path: '/',
    name: 'Root',
    redirect: '/home'
  },
  {
    path: '/home',
    components: {
      default: Home
    }
  }
]

const router = createRouter({ routes, history: createWebHashHistory() })

export default router
