import { Router } from "express";
import { createNewNotebook, deleteNotebook, getANotebook, getUserNotebooks, updateUserNotebook } from "../controllers/notebook.controller";
import { authenticateToken } from "../middlewares/passport";

const router = Router();

router.get('/list', authenticateToken, getUserNotebooks)

router.post('', authenticateToken, createNewNotebook)

router.patch('', authenticateToken, updateUserNotebook)

router.delete('/:notebookId', authenticateToken, deleteNotebook)

router.get('/:notebookId', authenticateToken, getANotebook)

export default router;
