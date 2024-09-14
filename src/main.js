import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axiosRetry from 'axios-retry';
import axios from 'axios';

import {Plugin} from '/src/scripts/vue-responsive-video-background-player.mjs'

const app = createApp(App)

axiosRetry(axios, {
    retryDelay: ((count) => count * 500),
    retries: 3,
    onRetry: ((retryCount, error) => console.log('retry', retryCount, error.message, error.code)),
    retryCondition: ((error) => true)
});

app.use(router)
app.use(Plugin)
app.mount('#app')
