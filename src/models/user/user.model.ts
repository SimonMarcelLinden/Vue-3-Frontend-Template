import { IUser } from "./interfaces/user.interface.model";

export class User implements IUser {
	public token	: string;
	public id		: string;
	public firstname: string;
	public lastname	: string;
	public email	: string;

	constructor(options: {
		token		?: string;
		id			?: string,
		firstname	?: string;
		lastname	?: string;
		email		?: string,
	} = {}) {
		this.token 		= options.token 	|| '';
		this.id 		= options.id 		|| '';
		this.firstname 	= options.firstname || '';
		this.lastname 	= options.lastname 	|| '';
		this.email 		= options.email 	|| '';
	}
}
