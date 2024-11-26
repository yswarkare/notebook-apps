import { Request, Response, Router } from 'express';
import { authenticateToken } from '../middlewares/passport';

const router = Router();

router.get('/user-info', authenticateToken, async (req: Request, res: Response) => {
	try {
		
	} catch (error) {
		console.log(error);
		res.status(403).json({ success: false, message: 'failed to get user info' });
	}
});

export default router