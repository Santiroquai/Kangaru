import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css' // tailwind aquí

createApp(App).use(router).mount('#app')
