import mongoose from 'mongoose';
import User from '../models/userModel.js';

export const getFreelancers = async (req, res) => {
  try {
    const freelancers = await User.find({ freelancer: true });
    res.status(200).json(freelancers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}