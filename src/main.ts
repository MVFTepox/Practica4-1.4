import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from './Router/router'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')