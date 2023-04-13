import { ActionTree }			from 'vuex';
import { Response }				from '@/models/response/interfaces/response.interface.model';
import { User } 				from '@/models/user/user.model';

import { AuthenticationService } from '../services';

import { AuthenticationState } 	from './state.store';
import { RootState }			from '@/store/root.store';

// import store 					from "@/01-archiv/store"

export const actions: ActionTree<AuthenticationState, RootState> = {
	login({ dispatch, commit }: any, { email, password }: { email: string, password: string }) {

		return new Promise((resolve, reject) => {
			// commit('loginRequest', { email });

			return AuthenticationService.login(email, password)
				.then((response: User) => {
					commit('loginSuccess', response);
					resolve(response);
				})
				.catch((error: Response<any>) => {
					// @ts-ignore-next-line
            		// console.log(error.response.data.localized['en'] || error.message)
					commit('loginFailure', error);
					// @ts-ignore-next-line
					reject(error.response.data.localized);
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
