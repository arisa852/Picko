import { createApp } from 'vue';
import './assets/style/main.scss';
import App from './App.vue';
import router from '../src/router/index';
import 'bootstrap-icons/font/bootstrap-icons.css'



const app = createApp(App)
app.use(router) 
app.mount('#app')
