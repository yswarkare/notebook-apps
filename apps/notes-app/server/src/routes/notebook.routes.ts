import { Router } from "express";
import { createNewNotebook, deleteNotebook, getANotebook, updateUserNotebook } from "../controllers/notebook.controller";
import { authenticateToken } from "../middlewares/passport";

const router = Router();

router.get('/:notebookId', authenticateToken, getANotebook)

router.post('', authenticateToken, createNewNotebook)

router.patch('', authenticateToken, updateUserNotebook)

router.delete('', authenticateToken, deleteNotebook)


export default router;