import express from 'express';

//IMPORT CONTROLLERS
import { newMessage, getMessages } from '../controllers/messageControllers.js';

const router = express.Router();

router.post('/', newMessage);
router.get('/:conversationId', getMessages);

export default router;