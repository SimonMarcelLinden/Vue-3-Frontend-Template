import { getters } 				from './getters.store';
import { actions } 				from './actions.store';
import { mutations }			from "./mutations.store";
import { AuthenticationState } 	from './state.store';

import { getUserHelper } 		from '@/helpers';

export const state: AuthenticationState = {
	user	: getUserHelper(),
	status	: { loggedIn: false },
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
