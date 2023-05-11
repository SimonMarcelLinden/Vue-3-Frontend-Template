
import authenticationStore from './store'

import { AuthenticationService } from './services/authentication.service'
import { authenticationRoutes } from './router/routes'
import { authenticationGuard } from './router/guards';

export default {
	routes	: authenticationRoutes,
	guards	: [authenticationGuard],
	store 	: authenticationStore,
	services: {
		AuthenticationService: AuthenticationService
	},
};
