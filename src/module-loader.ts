import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw, Router, NavigationGuard } from 'vue-router';
import { Store } from 'vuex';
import store 	from '@/store'

// Define an interface for a module
interface Module {
	components	?: Record<string, any>;
	routes		?: RouteRecordRaw[];
	guard		?: NavigationGuard;
	store		?: Store<any>
	services	?: Record<string, any>;
}

const modulesFolder = require.context(
	// The relative path of the components folder
	'./modules',
	// Whether or not to look in subfolders
	true,
	// The regular expression used to match component filenames who starts with "My"
	/[A-Za-z]\w+\.module\.(ts|vue)/
);

/**
 * Loads the modules dynamically from the modules folder.
 *
 * @returns A Promise that resolves to an object containing the loaded modules.
 *
 * @author Simon Marcel Linden
 * @since 1.0.0
 * @version 1.0.0
 */
async function loadModule(): Promise<Record<string, Module>> {

	const loadedModules: Record<string, Module> = {};
	const moduleContext = require.context('./modules', true, /[A-Za-z]\w+\.module\.(ts|vue)/);
	moduleContext.keys().forEach((modulePath: string) => {
		const module = moduleContext(modulePath);
		const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
		loadedModules[moduleName] = module.default || module;
	});
	return loadedModules;
}

/**
 * Registers the components of a module to the Vue app.
 *
 * @param app - The Vue app instance.
 * @param components - An object containing the components to be registered.
 *
 * @author Simon Marcel Linden
 * @since 1.0.0
 * @version 1.0.0
 */
function registerComponents(app: App, components: Record<string, any>): void {

	for (const componentName in components) {
		app.component(componentName, components[componentName]);
	}
}

/**
 * Registers the routes of a module to the router.
 *
 * @param routes - An array of route objects to be registered.
 * @param router - The Vue Router instance.
 *
 * @author Simon Marcel Linden
 * @since 1.0.0
 * @version 1.0.0
 */
function registerRoutes(routes: RouteRecordRaw[], router: Router): void {
	routes.forEach(route => {
		router.addRoute(route);
	});
}

/**
 * Registers a global navigation guard to the router.
 *
 * @param guard - The navigation guard function.
 * @param router - The Vue Router instance.
 *
 * @author Simon Marcel Linden
 * @since 1.0.0
 * @version 1.0.0
 */
function registerGuard(guard: any, router: Router): void{
	router.beforeEach(guard);
}

/**
 * Registers the services of a module.
 *
 * @param services - An object containing the services to be registered.
 *
 * @author Simon Marcel Linden
 * @since 1.0.0
 * @version 1.0.0
 */
function registerServices(app: App, services: Record<string, any>): void {
	for (const serviceName in services) {
		app.provide(serviceName, services[serviceName]);
	}
}

/**
 * Registers the store of a module.
 *
 * @param {string} name - The name of the module under which the store should be registered. If the name contains a slash ('/'), only the part before the slash will be used.
 * @param {*} moduleStore - The store of the module to be registered.
 *
 * @author Simon Marcel Linden
 * @since 1.0.0
 * @version 1.0.0
 */
function registerStore(name: string, moduleStore: any): void {
	name = name?.split('/')[0];
	moduleStore && store.registerModule(name, moduleStore);
}

// Create the router
const router = createRouter({
	history: createWebHistory(),
	routes: [],
});

/**
 * Adds default routes to the router.
 *
 * @param routes - An array of route objects to be added.
 *
 * @author Simon Marcel Linden
 * @since 1.0.0
 * @version 1.0.0
 */
export function addDefaultRoutes(routes: RouteRecordRaw[]): void  {
	routes.forEach((route) => {
	  	router.addRoute(route);
	});
}

/**
 * Loads and registers a module to the Vue app and router.
 *
 * @param app - The Vue app instance.
 * @returns A Promise that resolves when the module registration is complete.
 *
 * @author Simon Marcel Linden
 * @since 1.0.0
 * @version 1.0.0
 */
export async function registerModule(app: App): Promise<void> {
	const modules = await loadModule();

	Object.keys(modules).forEach((moduleKey: string) => {
		const module = modules[moduleKey];

		if (module.components) {
			registerComponents(app, module.components);
		}

		if (module.routes) {
			registerRoutes(module.routes, router);
		}

		if (module.guard) {
			registerGuard(module.guard, router);
		}

		if (module.services) {
			registerServices(app, module.services);
		}

		if (module.store) {
			console.log(modules[moduleKey])
			registerStore(moduleKey, module.store);
		}
	});
}

// Export the router
export { router };
