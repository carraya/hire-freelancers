import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
  try {
    //Generate hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create new user
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    //Save user and respond
    const user = await newUser.save();
    res.status(200).json(user);

  } catch (error) {
    res.status(500).json(error);
  }
}

export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json('User not found');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    !validPassword && res.status(400).json('The password you entered is incorrect');
    
    res.status(200).json(user)

  } catch (error) {
    res.status(500).json(error);
  }
}