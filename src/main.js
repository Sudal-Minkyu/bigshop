import {createApp} from 'vue'
import router from '@/scripts/router'
import store from '@/scripts/store'
import App from './App.vue'
import cookies from "vue-cookies";

createApp(App).use(store).use(router).use(cookies).mount('#app')
