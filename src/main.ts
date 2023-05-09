import { createApp } from 'vue';
import { registerModule, router, addDefaultRoutes  } from './module-loader';

import store 			from './store'

import App from './app.view.vue';

import ExampleView from '@/views/example.view.vue'

// Definiere die Standardrouten
const defaultRoutes = [
	{
		path: '/',
		component:ExampleView
	},
	{
		path: '/about',
		component: ExampleView
	},
];

// Füge die Standardrouten hinzu
addDefaultRoutes(defaultRoutes);

// Lade und registriere das Beispielmodul
const app = createApp(App);

registerModule(app)
.then(() => {
    app.use(store)
	app.use(router);
	app.mount('#app');
})
.catch((error) => {
	console.error('Error loading module:', error);
});
