import express from 'express';

//IMPORT CONTROLLERS
import { getUsers, getUser, deleteUser, updateUser } from '../controllers/userControllers.js';

const router = express.Router();

router.get('/', getUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router;