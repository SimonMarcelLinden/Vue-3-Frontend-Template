import { ActionTree } 	from 'vuex';
import { RootState } 	from '@/store/root.store';
import { GlobalState } 	from '@/store/global/global.store';

export const actions: ActionTree<GlobalState, RootState> = {
	setBusy({ commit }: any, status: boolean): any {
		commit('setBusy', status);
	},
	clearBusy({ commit }: any): any {
		commit('setBusy', false);
	}
};
