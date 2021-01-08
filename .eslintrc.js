/*
 * @Author: wenyu_zxb
 * @Date: 2021-01-07 15:28:20
 * @LastEditTime: 2021-01-08 16:48:20
 * @LastEditors: wenyu_zxb
 * @Description:
 * @FilePath: /vite-project-js/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    amd: true,
    es6: true,
    browser: true,
    node: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': [
      2,
      {
        vars: 'all', // 变量定义必须被使用
        args: 'none', // 对于函数形参不检测
        ignoreRestSiblings: true, // 忽略剩余子项 fn(...args)，{a, b, ...coords}
        caughtErrors: 'none' // 忽略 catch 语句的参数使用
      }
    ],
    // 禁止在变量被定义之前使用它
    'no-use-before-define': [
      2,
      {
        functions: false, // 允许函数在定义之前被调用
        classes: false // 允许类在定义之前被引用
      }
    ],
    'no-var': 2,
    'no-whitespace-before-property': 2,
    'semi-style': 0, // 允许行首出现分号
    'no-fallthrough': [2, { commentPattern: '.' }] // 每一个 switch 的 case 都需要有 break, return 或 throw
  }
}
