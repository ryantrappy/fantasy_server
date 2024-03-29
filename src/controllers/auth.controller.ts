import {NextFunction, Request, Response} from 'express';
import {CreateUserDto} from '../dtos/users.dto';
import AuthService from '../services/auth.service';
import {User} from '../interfaces/users.interface';
import {RequestWithUser} from '../interfaces/auth.interface';
import {cleanReturnUserObject} from '../utils/util';

class AuthController {
	public authService = new AuthService();

	public signUp = async (req: Request, res: Response, next: NextFunction) => {
		const userData: CreateUserDto = req.body;

		try {
			const signUpUserData: User = await this.authService.signup(userData);
			const authResponse = this.logIn(req, res, next);
			// res.status(201).json({ data: signUpUserData, message: 'signup' });
		} catch (error) {
			next(error);
		}
	};

	public logIn = async (req: Request, res: Response, next: NextFunction) => {
		const userData: CreateUserDto = req.body;

		try {
			const {cookie, findUser} = await this.authService.login(userData);
			const userResult = cleanReturnUserObject(findUser);
			res.setHeader('Set-Cookie', [cookie]);
			res.status(200).json({data: cookie, userData: userResult});
		} catch (error) {
			next(error);
		}
	};

	public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
		const userData: User = req.user;

		try {
			const logOutUserData: User = await this.authService.logout(userData);
			const result = {
				success: true
			};
			res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
			res.status(200).json(result);
		} catch (error) {
			next(error);
		}
	};
}

export default AuthController;
