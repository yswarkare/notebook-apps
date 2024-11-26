import { ZodSchema } from 'zod';

function validateZodSchema<T>(schema: ZodSchema) {
	return function (data: T): T {
		try {
			const userData = schema.parse(data);
			return userData;
		} catch (error) {
			console.log(error);
			throw error;
		}
	};
}

export default validateZodSchema;
