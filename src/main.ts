import { createApp } 	from 'vue'
import App 				from './app.view.vue'
import router 			from './router'
import store 			from './store'

import { registerComponents } from "@/register-components";

const app = createApp(App, { /** Options **/ })

registerComponents(app);

app.use(store)
app.use(router)

app.mount('#app')
