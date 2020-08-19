import {User} from '../interfaces/users.interface';

export const isEmptyObject = (obj: object): boolean => {
    return !Object.keys(obj).length;
};

export const cleanReturnUserObject = (user: User): User => {
	return {
		email: user.email,
		_id: user._id,
		leagues: user.leagues
	};
}
