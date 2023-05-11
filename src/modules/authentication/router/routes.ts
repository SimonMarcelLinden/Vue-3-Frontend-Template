/**
 * The code imports the necessary dependencies, including
 * RouteRecordRaw from vue-router, and the LoginView component from
 * the specified module. It then defines an array routes of
 * RouteRecordRaw objects.
 *
 * Each route object represents a specific route in your application.
 * In this case, there is a single route defined with the path /login, the name
 * 'Sign In', and the component LoginView associated with it. The route
 * also includes a meta object, which contains additional metadata for
 * the route, such as the title and meta tags for SEO purposes.
 */

import { RouteRecordRaw } from 'vue-router'

import LoginView from '@/modules/authentication/views/login/login.view.module.vue';

// Define an array of route objects
export const authenticationRoutes: Array<RouteRecordRaw> = [
	{
		path		: '/login',
		name		: "Sign In",
		component	: LoginView,
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
	}
];
