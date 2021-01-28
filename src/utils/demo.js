/*
 * @Author: wenyu_zxb
 * @Date: 2021-01-25 00:38:30
 * @LastEditTime: 2021-01-25 11:23:03
 * @LastEditors: wenyu_zxb
 * @Description:
 * @FilePath: /vite-project-js/src/utils/demo.js
 */

import { ref } from 'vue'

export const a = ref(123)
export const onClick = () => {
  a.value += 1
  return a
}
