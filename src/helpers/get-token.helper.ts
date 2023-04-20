import { Token } from '@/models/token/token.model';

/**
 *
 * @description Returns the current user token from the state
 * @return 		Token
 *
 * @author Simon Marcel Linden
 * @version 1.0
 */
export function getTokenHelper(): Token {
	const tokenStorage = localStorage.getItem('token');

	if (!tokenStorage) {
		// @ts-ignore-next-line
		return null;
	}

	const token: Token = JSON.parse(tokenStorage);

	return token as Token;
}

/**
 *
 * @description Returns the expiration date from the state
 * @return 		Date
 *
 * @author Simon Marcel Linden
 * @version 1.0
 */
export function getExpirationHelper(): Date {
	const tokenStorage = localStorage.getItem('token');

	if (!tokenStorage) {
		return new Date();
	}

	const token: Token = JSON.parse(tokenStorage);
	const expiration = new Date(token.expiration);

	return expiration;
}
