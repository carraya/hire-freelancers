import Message from '../models/messageModel.js';

export const newMessage = async (req, res) => {
  const newMessage = new Message(req.body);
  console.log(newMessage);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
    
  } catch (error) {
    res.status(500).json(error);
  }
}

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);

  } catch (error) {
    res.status(500).json(error);
  } 
}