import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);

  } catch (error) {
    res.status(404).json(error);
  }
}

export const getUser = async (req, res) => {
  const userId = req.query.userId;
  const name = req.query.name;

  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ name: name });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);

  } catch (error) {
    res.status(500).json(error);
  }
}

export const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('Account has been deleted');

    } catch (error) {
      return res.status(500).json(error);
    }
  }

  else {
    return res.status(403).json('You can delete only your account!');
  }
}

export const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);

      } catch (error) {
        return res.status(500).json(error);
      }
    }
    
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json('Account has been updated');

    } catch (error) {
      return res.status(500).json(error);
    }
  } 
  
  else {
    return res.status(403).json('You can update only your account!');
  }
}