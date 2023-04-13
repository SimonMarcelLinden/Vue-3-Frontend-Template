import { GetterTree }	from 'vuex';
import { RootState } 	from '@/store/root.store';
import { GlobalState } 	from '@/store/global/global.store';

export const getters: GetterTree<GlobalState, RootState> = {
	getLoading: (state: GlobalState) => {
		return state.loading;
	},
};
