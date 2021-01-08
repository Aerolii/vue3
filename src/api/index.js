/*
 * @Author: wenyu_zxb
 * @Date: 2021-01-08 17:16:47
 * @LastEditTime: 2021-01-08 17:40:33
 * @LastEditors: wenyu_zxb
 * @Description:axios
 * @FilePath: /vite-project-js/src/api/index.js
 */

import axios from 'axios'

/**
 *  @param {[Object]} config {url:请求接口,[params||data]:GET请求参数 或 POST 请求参数}
 */
export default (config, method = 'GET') => {
  const instance = axios.create({
    baseURL: process.env.BASE_URL,
    // 超时
    timeout: 15000,
    method
  })
  instance.interceptors.request.use(
    config => {
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    res => {
      const code = res.status
      if (code !== 200) {
        return Promise.reject(res)
      } else {
        return res.data
      }
    },
    error => {
      return Promise.reject(error)
    }
  )
  return instance(config)
}
