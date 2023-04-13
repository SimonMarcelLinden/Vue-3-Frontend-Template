import { ActionTree } 	from 'vuex';
import { RootState } 	from '@/store/root.store';
import { GlobalState } 	from '@/store/global/global.store';

export const actions: ActionTree<GlobalState, RootState> = {
	loading({ commit }: any, status: boolean): any {
		commit('setLoading', status);
	}
};
