import { MutationTree } from 'vuex';
import { GlobalState } 	from '@/store/global/global.store';

export const mutations: MutationTree<GlobalState> = {
	setBusy(state: any, status: boolean) {
		state.busy = status;
	}
};
