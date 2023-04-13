import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import MainView from '@/views/main-view.view.vue'
import HomeView from '@/views/home-view/home-view.view.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path		: '/',
		name		: 'AppEntry',
		component	: MainView,
		redirect() {
			return { path: '/home' }
		},
		children: [
			{
				path: "Home",
				name: "home",
				component: HomeView,
				meta: {
					title: 'Home',
					metaTags: [
						{
							name: 'description',
							content: 'Home - Landingpage'
						},
						{
							property: 'og:description',
							content: 'Home - Landingpage'
						}
					]
				}
			},
			{
				path: '/about',
				name: 'about',
				component: () => import(/* webpackChunkName: "about" */ '@/views/home-view/home-view.view.vue'),
				meta: {
					title: 'About',
					metaTags: [
						{
							name: 'description',
							content: 'About - About page'
						},
						{
							property: 'og:description',
							content: 'About - About page'
						}
					]
				}
			}
		]
	},
	{
		path: "/:catchAll(.*)",
		redirect: `/`,
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
