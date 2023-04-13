import { createStore } 	from 'vuex'
import { RootState } 	from '@/store/root.store';

import global 			from '@/store/global/index.store';

export default createStore<RootState>({
	state: {
		version: '1.0.0',
	},
	modules: {
		global: global,
	},
})
