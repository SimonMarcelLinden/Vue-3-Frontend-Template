import { MutationTree } from 'vuex';

import { AuthenticationState } 	from './state.store';
import { Token } 				from '../models/token/token.model';

export const mutations: MutationTree<AuthenticationState> = {
	setToken(state: any, token: Token) {
		state.token 		= token;
		state.expiration 	= new Date(token.expiration)
	},
	clearToken(state: any, token: Token) {
		state.token 		= null;
		state.expiration 	= null;
	},
};
