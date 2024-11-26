import { Request, Response } from 'express';

export const getUserInfo = async (req: Request, res: Response) => {
	try {
		console.log(req.user);
	} catch (error) {}
};
