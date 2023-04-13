import router from '@/router'
import { Router, RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

import store from '@/store';

import SigninView from './views/login/login.view.module.vue';

const moduleRoute: Array<RouteRecordRaw> = [
	{
		path: "/login",
		name: "Sign In",
		component: SigninView, // import('./views/signin/signin.view.module.vue'),
		meta: {
			title: 'SignIn',
			metaTags: [
				{
					name: 'description',
					content: 'Sign In to use this Application.'
				},
				{
					property: 'og:description',
					content: 'Sign In to use this Application.'
				}
			]
		}
	},
];

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
	const publicPages 		= [`/login`, `/register`, '/blank'];
	const authRequired 		= !publicPages.includes(to.path);
	const isAuthenticated 	= store.getters['authentication/isAuthenticated'];

	if (authRequired && !isAuthenticated) {
		return next(`/login`);
	}

	if(publicPages.includes(to.path) && isAuthenticated)
		return next(`/`);

	return next();
});

export default (router: Router) => {
	// router.addRoute([moduleRoute]);
	moduleRoute.forEach(route => {
		router.addRoute('AppEntry', route);
	});
}
