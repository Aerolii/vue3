import vue from '@vitejs/plugin-vue'
/**
 * @type {import('vite').UserConfig}
 */

const path = require('path')
export default {
  plugins: [vue()],
  alias: {
    // 路径映射必须以/开头和结尾
    '@components': path.resolve(__dirname, 'src/components'),
    '@router': path.resolve(__dirname, 'src/router'),
    '@views': path.resolve(__dirname, 'src/views'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@api': path.resolve(__dirname, 'src/api')
  },
  // 生产构建配置
  build: {
    // rollup配置项
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
    }
    // lib: {
    //   entry: path.resolve(__dirname, 'src/main.js'),
    //   name: 'MyLib'
    // }
  },
  server: {
    proxy: {
      // string shorthand
      // '/foo': 'http://localhost:4567/foo',
      // with options
      '/pinganApi': {
        target: process.env.LOCAL_PROXY_API,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/pinganApi/, '')
      }
    }
  }
  // css: { loaderOptions: { sass: `` } },
}
