import { Router } from 'express';
import { createNewTag, deleteTag, getANotebookTags, getATag, getUserTags, updateUserTag } from '../controllers/tag.controller';
import { authenticateToken } from '../middlewares/passport';

const router = Router();

router.get('/list', authenticateToken, getUserTags);

router.get('/list/:notebookId', authenticateToken, getANotebookTags);

router.post('', authenticateToken, createNewTag);

router.patch('', authenticateToken, updateUserTag);

router.delete('/:tagId', authenticateToken, deleteTag);

router.get('/:tagId', authenticateToken, getATag);

export default router;
