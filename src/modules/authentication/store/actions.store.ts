import { ActionTree }			from 'vuex';
import { Response }				from '@/models/response/interfaces/response.interface.model';

import { AuthenticationService } from '../services';

import { RootState }			from '@/store/root.store';
import { AuthenticationState } 	from './state.store';
import { Token } 				from '@/models/token/token.model';

// import store 					from "@/01-archiv/store"

export const actions: ActionTree<AuthenticationState, RootState> = {
	login({ commit }: any, { email, password }: { email: string, password: string }) {
		return new Promise((resolve, reject) => {
			// commit("setBusy");

			return AuthenticationService.login(email, password)
				.then((response: Token) => {
					commit('setToken', response);
					resolve(response);
				})
				// .catch((error: any) => {
				.catch((error: Response<any>) => {
					// commit('error/setError', error.response, { root: true })
					reject(error);
				});
		});
	},
	logout({ commit }: any) {
		return new Promise((resolve) => {
			AuthenticationService.logout();
			commit('logoutSuccess');
			resolve(undefined);
		});
	},
	// Todo:
	register() {}
};
