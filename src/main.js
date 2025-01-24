import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Acrylic from 'vue-acrylic'

import App from './App.vue'
import router from './router'
import './assets/fonts/fonts.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Acrylic)

app.mount('#app')
