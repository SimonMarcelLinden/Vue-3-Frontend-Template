import { createApp } 	from 'vue'
import App 				from './app.view.vue'
import router 			from './router'
import store 			from './store'

import { registerComponents } from "@/register-components";
import { registerModules }    from "@/register-modules";

import metaDataModule 			from '@/modules/metadata'
import authenticationModule 	from '@/modules/authentication'

const app = createApp(App, { /** Options **/ })

registerComponents(app);

registerModules({
	meta			: metaDataModule,
	authentication	: authenticationModule
});

app.use(store)
app.use(router)

app.mount('#app')
