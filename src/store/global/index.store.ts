import { GlobalState } 	from '@/store/global/global.store';
import { getters } 		from '@/store/global/getters.store';
import { actions } 		from '@/store/global/actions.store';
import { mutations } 	from '@/store/global/mutations.store';

export const state: GlobalState = {
	loading : false,
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
