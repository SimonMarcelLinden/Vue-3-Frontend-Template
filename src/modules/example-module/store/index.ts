import { ExampleState } 	from './state.store';

export const state: ExampleState = {
	status	: { loggedIn: false },
};

export default {
	namespaced: true,
	state,
};
