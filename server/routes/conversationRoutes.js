import express from 'express';

//IMPORT CONTROLLERS
import { newConversation, getUserConversation } from '../controllers/conversationControllers.js';

const router = express.Router();

router.post('/', newConversation);
router.get('/:userId', getUserConversation);

export default router;