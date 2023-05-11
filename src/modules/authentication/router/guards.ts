import { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

import store from '@/store';

/**
 * BeforeEachGuard
 *
 * @param to - The target route being navigated to.
 * @param from - The current route being navigated from.
 * @param next - A function to indicate how to proceed with the navigation.
 * @returns void
 *
 * @author Simon Marcel Linden
 * @since 1.0.0
 */
export function authenticationGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): void {
	const publicPages 		= [`/login`, `/register`, '/blank'];
	const authRequired 		= !publicPages.includes(to.path);

	const isAuthenticated 	= store.getters['authentication/isAuthenticated'];
	// const isAuthenticated 	= false;

	if (authRequired && !isAuthenticated) {
		next(`/login`);
	} else if (publicPages.includes(to.path) && isAuthenticated) {
		next(`/dashboard`);
	} else {
		next();
	}
}
