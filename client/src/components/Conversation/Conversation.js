import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './conversation.css';

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios('http://localhost:5000/users?userId=' + friendId);
        setUser(res.data);

      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <span className="conversationName">{user?.name}</span>
    </div>
  )
}

export default Conversation
