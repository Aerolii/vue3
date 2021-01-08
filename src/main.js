import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 默认样式表
import './assets/css/base.css'
// px转换rem
import 'amfe-flexible'

const app = createApp(App)
app.use(router)
app.mount('#app')
