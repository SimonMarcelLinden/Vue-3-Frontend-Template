import { GetterTree } 			from 'vuex';
import { RootState } 			from '@/store/root.store';
import { AuthenticationState } 	from './state.store';

export const getters: GetterTree<AuthenticationState, RootState> = {
	isAuthenticated: (state: any) => {
		// return !!state.status.loggedIn;
		return !!state.user;
	},
	userToken: (state: any) => {
		return !!state.user ? state.user.token : '';
	},
	user: (state: any) => {
		return state.user;
	},
};
