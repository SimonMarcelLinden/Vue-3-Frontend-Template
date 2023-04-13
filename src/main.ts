import { createApp } 	from 'vue'
import App 				from './app.view.vue'
import router 			from './router'
import store 			from './store'

import { registerComponents } from "@/register-components";
import { registerModules }    from "@/register-modules";

import exampleModule 	from '@/modules/example-module'

const app = createApp(App, { /** Options **/ })

registerComponents(app);

registerModules({
	example		: exampleModule,
});

app.use(store)
app.use(router)

app.mount('#app')
