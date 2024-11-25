import { z } from 'zod';

export const LogInUserSchema = z
	.object({
		username: z.string().max(150).trim(),
		password: z.string().max(255).trim(),
	})
	.required()
	.strip();

export type LogInUserType = z.infer<typeof LogInUserSchema>;

export const UserSchema = z
	.object({
		firstName: z.string().max(150).trim(),
		lastName: z.string().max(150).trim(),
		email: z.string().max(255).email().trim(),
		mobile: z.string().max(20).trim(),
		username: z.string().max(150).trim(),
		age: z.number().int().min(5).max(100),
	})
	.required()
	.strip();

export type UserType = z.infer<typeof UserSchema>;

export const SignUpUserSchema = UserSchema.extend({
	confirmPassword: z.string().max(255).trim(),
})
	.required()
	.strip();

export type SignUpUserType = z.infer<typeof SignUpUserSchema>;
