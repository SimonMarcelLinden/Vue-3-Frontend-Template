class ExampleModel {
	public firstname: string;
	public lastname	: string;

	constructor(options: {
		firstname	?: string;
		lastname	?: string;
	} = {}) {
		this.firstname 	= options.firstname || '';
		this.lastname 	= options.lastname 	|| '';
	}
}


export interface ExampleState {
	example	?: ExampleModel;
	status	: {
		loggedIn: boolean
	};
}
