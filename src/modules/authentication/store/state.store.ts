import { Token } from '@/models/token/token.model';

export interface AuthenticationState {
	token 		?: Token,
	expiration 	?: Date | null,
}
