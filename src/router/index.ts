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
			},
			{
				path: '/about',
				name: 'about',
				component: () => import(/* webpackChunkName: "about" */ '@/views/home-view/home-view.view.vue')
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
