import './assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axiosRetry from 'axios-retry';
import axios from 'axios';

import {Plugin} from '/src/scripts/vue-responsive-video-background-player.mjs'

import VueLazyload from "vue-lazyload";

const app = createApp(App)

axiosRetry(axios, {
    retryDelay: ((count) => count * 500),
    retries: import.meta.env.DEV ? 0 : 5,
    onRetry: ((retryCount, error) => console.log('retry', retryCount, error.message, error.code)),
    retryCondition: ((error) => true)
});

app.use(VueLazyload, {
    preLoad: 1.5,
    lazyComponent: true,
})

app.use(router)
app.use(Plugin)
app.mount('#app')
