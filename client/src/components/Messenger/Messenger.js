import React, { useContext, useEffect, useState, useRef } from 'react'
import Conversation from '../Conversation/Conversation.js';
import Message from '../Message/Message.js';
import { AuthContext } from '../../contexts/AuthContext.js';
import axios from 'axios';
import './messenger.css';
import {io} from 'socket.io-client';

const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [newConversation, setNewConversation] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  const scrollRef = useRef();

  const { user } = useContext(AuthContext);

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", data => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, [])

  useEffect(() => {
    arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
    setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", users => {
      console.log(users);
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get('http://localhost:5000/conversations/' + user._id);
        console.log(res.data);
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get('http://localhost:5000/messages/' + currentChat._id);
        setMessages(res.data);
      } catch (error) {
        console.log(error);  
      }
    };
    getMessages();
  }, [currentChat]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      conversationId: currentChat._id,
      sender: user._id,
      text: newMessage,
    };

    const receiverId = currentChat.members.find((member) => member !== user._id);
  
    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage
    });

    try {
      const res = await axios.post('http://localhost:5000/messages', message);
      setMessages([...messages, res.data]);
      clear();
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewConversationSubmit = async (e) => {
    e.preventDefault();

    try {
      const id = await axios.get('http://localhost:5000/users?name=' + newConversation)._id;
      const conversation = {
        senderId: user._id,
        receiverId: id
      };
      const res = await axios.post('http://localhost:5000/conversations', conversation);
      setConversations((prev) => [...prev, res.data]);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } 

  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const clear = () => {
    setNewMessage('');
  };

  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <input
            className="chatMessageInput"
            placeholder="Start Conversation"
            onChange={(e) => setNewConversation(e.target.value)}
            value={newConversation}
          ></input>
          <button className="chatSubmitButton" onClick={handleNewConversationSubmit}>
            Search
          </button>
          <div className="chatMenuWrapper">
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Messenger
