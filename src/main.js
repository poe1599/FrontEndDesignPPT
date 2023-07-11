import './css/tailwind.css'
import './css/main.css'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/solarized.css'
import 'reveal.js/plugin/highlight/monokai.css'
import './css/reveal.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
