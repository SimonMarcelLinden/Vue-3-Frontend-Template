import { MutationTree } from 'vuex';

import { AuthenticationState } 	from './state.store';
import { User } 				from '@/models/user/user.model';

export const mutations: MutationTree<AuthenticationState> = {
	loginSuccess(state: any, user: User) {
		// state.inFlight 			= false;
		state.status.loggedIn 	= true;
		state.user 				= user;
		state.token 			= user.token;
	},
	loginFailure(state: any ) {
		// state.inFlight			= false;
		state.status.loggedIn 	= false;
		state.user				= null;
		state.token				= null;
	},
	logoutSuccess(state: any) {
		// state.inFlight 			= false;
		state.status.loggedIn 	= false;
		state.user 				= null;
		state.token 			= null;
	},
	loginRequest(state: any) {
		// state.inFlight 			= true;
		state.status.loggedIn 	= false;
	},
};
