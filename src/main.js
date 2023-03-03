import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/css/zcx.css"
import "@/assets/css/bootstrap.css"
import router from './router'
const app = createApp(App)

app.use(router)

app.mount('#app')
