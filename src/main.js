import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import './assets/css/normalize.css'
import router from './router/index'
import store from './store/index'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
