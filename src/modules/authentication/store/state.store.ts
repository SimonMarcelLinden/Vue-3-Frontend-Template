import { User } from '@/models/user/user.model';

export interface AuthenticationState {
	user	?: User;
	status	: {
		loggedIn: boolean
	};
}
