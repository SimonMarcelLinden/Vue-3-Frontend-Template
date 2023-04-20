import { GetterTree } 			from 'vuex';
import { RootState } 			from '@/store/root.store';
import { AuthenticationState } 	from './state.store';

export const getters: GetterTree<AuthenticationState, RootState> = {
	isAuthenticated: (state: any) => {
		return state.token && state.expiration > Date.now();
	},
	token: (state: any) => {
		return !!state.token ? state.token : '';
	},
};
