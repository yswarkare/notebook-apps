import { SignUpUserType } from '../zod/schema/User.zod';
import { validateEmail, validatePassword, passwordAllocations } from './validators';


export const validateCreateUserDto = (user: SignUpUserType) => {
	let isValid = true;
	const errors: string[] = [];

	if (isValid) {
		const { valid, message } = validateEmail(user.email);
		if (!valid) {
			isValid = valid;
			errors.push(message);
		}
	}

	if (isValid) {
		const { success, message } = passwordAllocations(user);
		if (!success) {
			isValid = success;
			errors.push(message);
		}
	}

	if (user.password && isValid) {
		const { success, message, errors: err } = validatePassword(user.password);
		if (!success) {
			isValid = success;
			errors.splice(errors.length, 0, message, ...err);
		}
	}

	return { isValid, errors };
};
