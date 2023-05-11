import { IToken } from "./interfaces/token.interface.model";

export class Token implements IToken {
	public token 		: string;
	public expiration	: string;

	constructor(options: {
		token 		?: string;
		expiration	?: string,
	} = {}) {
		this.token 		= options.token || '';
		this.expiration	= options.expiration 	|| '';
	}
}
