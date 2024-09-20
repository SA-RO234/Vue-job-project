import './assets/main.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faR, fas } from '@fortawesome/free-solid-svg-icons';
import  Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import router from './router'
library.add(fas);
library.add(faR);

const app =  createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(Toast)
app.mount('#app')

