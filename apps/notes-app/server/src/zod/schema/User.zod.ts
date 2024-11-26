import { z } from 'zod';
import validateZodSchema from '../validate/validateZodSchema';

const LogInUserSchema = z
	.object({
		username: z.string().max(150).trim(),
		password: z.string().max(255).trim(),
	})
	.required()
	.strip();

export type LogInUserType = z.infer<typeof LogInUserSchema>;

const UserSchema = z
	.object({
		firstName: z.string().max(150).trim(),
		lastName: z.string().max(150).trim(),
		email: z.string().max(255).email().trim(),
		mobile: z.string().max(20).trim(),
		username: z.string().max(150).trim()
	})
	.required()
	.strip();
	
export type UserType = z.infer<typeof UserSchema>;

const UpdateUserSchema = UserSchema.extend({
		age: z.number().int().min(5).max(100),
	})
	.required()
	.strip();

export type UpdateUserType = z.infer<typeof UpdateUserSchema>;

const CreateUserSchema = UserSchema.extend({
	password: z.string().max(255).trim(),
})
	.required()
	.strip();

export type CreateUserType = z.infer<typeof CreateUserSchema>;

const SignUpUserSchema = CreateUserSchema.extend({
	confirmPassword: z.string().max(255).trim(),
})
	.required()
	.strip();

export type SignUpUserType = z.infer<typeof SignUpUserSchema>;

export const validateCreateUser = validateZodSchema<CreateUserType>(CreateUserSchema);

export const validateSignUpUser = validateZodSchema<SignUpUserType>(SignUpUserSchema);

export const validateLogInUser = validateZodSchema<LogInUserType>(LogInUserSchema);

export const validateUserData = validateZodSchema<UserType>(UserSchema);
