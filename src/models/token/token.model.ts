import { IToken } from "./interfaces/token.interface.model";

export class Token implements IToken {
	public token 		: string;
	// public iss 		: string;
	// public sub		: string;
	// public iat		: string;
	public expiration	: string;

	constructor(options: {
		token 		?: string;
		// iss		?: string,
		// sub		?: string;
		// iat		?: string;
		expiration	?: string,
	} = {}) {
		this.token 	= options.token || '';
		// this.iss 	= options.iss 	|| '';
		// this.sub 	= options.sub 	|| '';
		// this.iat 	= options.iat 	|| '';
		this.expiration	= options.expiration 	|| '';
	}
}
