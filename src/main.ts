import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import '../node_modules/@mdi/font/scss/materialdesignicons.scss'


const VueInstance = createApp(App)

VueInstance.use(router)
VueInstance.mount('#app')
