import express from 'express';

//IMPORT CONTROLLERS
import { getFreelancers } from '../controllers/freelancerControllers.js';

const router = express.Router();

router.get('/', getFreelancers);

export default router;