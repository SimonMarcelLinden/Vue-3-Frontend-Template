import { createRouter } from 'vue-router'
import router 	from '@/router'
import store 	from '@/store'

interface RegisterModel {
	store?	: object; // oder den genauen Typ von store definieren
	router?	: (router: ReturnType<typeof createRouter>) => void; // oder den genauen Typ von router definieren
}

interface RegisterModels {
	[key: string]: RegisterModel;
}

/**
 * Registers routes and/or the store for a module.
 *
 * @param name
 * @param module
 *
 * @author Simon Marcel Linden
 * @version 1.0
 */
const registerModule = (name: string, module: RegisterModel) => {
	module.store && store.registerModule(name, module.store);
	module.router && module.router(router);
};

/**
 * Exports the module registration function.
 * Requires an array with all modules to be registered
 *
 * @param modules
 *
 * @author Simon Marcel Linden
 * @version 1.0
 */
export const registerModules = (modules: RegisterModels) => {
	Object.keys(modules).forEach(moduleKey => {
		const module = modules[moduleKey];
		registerModule(moduleKey, module);
	});
};
