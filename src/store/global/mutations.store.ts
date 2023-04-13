import { MutationTree } from 'vuex';
import { GlobalState } 	from '@/store/global/global.store';

export const mutations: MutationTree<GlobalState> = {
	setLoading(state: GlobalState, status: boolean) {
		state.loading = status;
	}
};
