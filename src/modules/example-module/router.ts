import router from '@/router'
import { Router, RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

import ExampleView from './views/example-view/example.view.module.vue';

const moduleRoute: Array<RouteRecordRaw> = [
	{
		path: "/example",
		name: "Example",
		component: ExampleView, // import('./views/signin/signin.view.module.vue'),
	},
];

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
	return next();
});

export default (router: Router) => {
	moduleRoute.forEach(route => {
		router.addRoute('AppEntry', route);
	});
}
