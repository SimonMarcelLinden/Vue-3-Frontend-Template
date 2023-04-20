import { getters } 				from './getters.store';
import { actions } 				from './actions.store';
import { mutations }			from "./mutations.store";
import { AuthenticationState } 	from './state.store';

import { getTokenHelper, getExpirationHelper } 		from '@/helpers';

export const state: AuthenticationState = {
	token		: getTokenHelper(),
	expiration	: getExpirationHelper()
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
