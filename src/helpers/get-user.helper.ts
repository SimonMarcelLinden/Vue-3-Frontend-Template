import { User } from '@/models/user/user.model';

/**
 *
 * @description Returns the user from the state
 * @return 		User
 *
 * @author Simon Marcel Linden
 * @version 1.0
 */
export function getUserHelper(): User {
    const userStorage = localStorage.getItem('user');

    if (!userStorage) {
        // @ts-ignore-next-line
		return null;
    }

    const user: User = JSON.parse(userStorage);

    return user as User;
}
