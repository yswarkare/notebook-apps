import { Request, Response } from 'express';
import { validateCreateUserDto } from '../utils/user.utils';
import { createNewUser, doesUserExists, getUserByUsernameOrEmailOrMobile } from '../helpers/user.helper';
import { comparePassword, hashPassword } from '../utils/bcryptjs';
import { createToken } from '../utils/token.utils';
import { UserEntity } from '../db/schema/users';
import { LogInUserType, SignUpUserType, validateCreateUser, validateLogInUser, validateSignUpUser } from '../zod/schema/User.zod';

export const signUpUser = async (req: Request<{}, {}, SignUpUserType>, res: Response) => {
	try {
		const user: SignUpUserType = req.body;

		const validUser = validateSignUpUser(user);

		/* validate user */
		const { isValid, errors } = validateCreateUserDto(validUser);
		if (!isValid) return res.status(401).json({ success: false, message: errors });

		/* check if user already exists */
		const result = await doesUserExists(validUser);
		if (result) return res.status(401).json({ success: false, message: `user already exists.` });

		/* Hash password using bcryptjs. */
		let { success, message, hashed } = await hashPassword(validUser.password);
		if (success === false) {
			return res.status(401).json({ success, message });
		}
		if (hashed) validUser.password = hashed;

		/* create new user */
		const userValue = validateCreateUser(validUser);
		const newUser = await createNewUser(userValue);

		/* create jwt token */
		const tokenInfo = createToken(newUser);

		res.setHeader('Authorization', tokenInfo.bearerToken);
		res.cookie('bearerToken', tokenInfo.bearerToken);

		/* return response */
		if (newUser) {
			return res.status(200).json({ success: true, message: 'user created successfully!' });
		} else {
			return res.status(400).json({ success: false, message: 'error occurred! failed to create user' });
		}
	} catch (error) {
		console.log(error);
		return res.status(400).json({ success: false, message: 'error occurred', error });
	}
};

export const loginUser = async (req: Request<{}, {}, LogInUserType>, res: Response) => {
	try {
		const logInUser: LogInUserType = req.body;

		/* validate user */
		const user = validateLogInUser(logInUser);

		/* get user */
		let userInfo: UserEntity;

		try {
			userInfo = await getUserByUsernameOrEmailOrMobile(user.username);
		} catch (error) {
			console.log(error);
			return res.status(401).json({ success: false, message: `user doesn't exists.` });
		}

		if (userInfo! && typeof userInfo != 'boolean' && userInfo?.password) {
			/* compare password using bcryptjs. */
			let { success, message } = await comparePassword(user.password, userInfo.password);
			if (success === false) {
				return res.status(403).json({ success, message });
			}
		}

		/* create jwt token */
		const tokenInfo = createToken(userInfo!);

		res.setHeader('Authorization', tokenInfo.bearerToken);
		res.cookie('bearerToken', tokenInfo.bearerToken);

		/* return response */
		if (tokenInfo?.token) {
			return res.status(200).json({ success: true, message: 'user logged in successfully!' });
		} else {
			return res.status(400).json({ success: false, message: 'error occurred! failed to log in user' });
		}
	} catch (error) {
		return res.status(400).json({ success: false, message: 'error occurred', error });
	}
};
