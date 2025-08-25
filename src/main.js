import { createApp } from 'vue'
import './assets/style/main.scss'
import App from './App.vue'
import router from '../src/router/index'
import 'bootstrap-icons/font/bootstrap-icons.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB65rgwIQ6zZGuDB26Ck8gO4wH69INfodk',
    libraries: 'places',
  },
})
app.use(router)
app.mount('#app')
